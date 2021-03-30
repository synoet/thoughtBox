import express from 'express';
import * as http from 'http';
import dotenv from 'dotenv';
dotenv.config();
import {CommonRoutesConfig} from './common/common.routes.config';
import {PostsRoutes} from './posts/posts.routes.config';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import helmet from 'helmet';
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT;
const routes: any = [];
console.log('gate 1')



app.use(express.json());
app.use(express.urlencoded());

let index = expressWinston.requestWhitelist.indexOf('headers');
if (index !== -1) expressWinston.requestWhitelist.splice(index, 1);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    } else {
        return next();
    }
});

app.use(helmet());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

// routes definition should be placed here
routes.push(new PostsRoutes(app));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at port ${port}`)
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
});

export default app;