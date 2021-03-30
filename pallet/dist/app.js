"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const bodyparser = __importStar(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const posts_routes_config_1 = require("./posts/posts.routes.config");
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const helmet_1 = __importDefault(require("helmet"));
const app = express_1.default();
const server = http.createServer(app);
const port = process.env.PORT;
const routes = [];
console.log('gate 1');
app.use(bodyparser.json({ limit: '5mb' }));
let index = expressWinston.requestWhitelist.indexOf('headers');
if (index !== -1)
    expressWinston.requestWhitelist.splice(index, 1);
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    }
    else {
        return next();
    }
});
app.use(helmet_1.default());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
}));
// routes definition should be placed here
routes.push(new posts_routes_config_1.PostsRoutes(app));
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
}));
app.get('/', (req, res) => {
    res.status(200).send(`Server running at port ${port}`);
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    routes.forEach((route) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsMkNBQTZCO0FBQzdCLHdEQUEwQztBQUMxQyxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixxRUFBd0Q7QUFFeEQsaURBQW1DO0FBQ25DLGdFQUFrRDtBQUNsRCxvREFBNEI7QUFDNUIsTUFBTSxHQUFHLEdBQXdCLGlCQUFPLEVBQUUsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM5QixNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7QUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUlyQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXpDLElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0QsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQUUsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUM1QixHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzdFLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQStCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2pDO1NBQU07UUFDSCxPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2pCO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMxQixVQUFVLEVBQUU7UUFDUixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO0tBQ25DO0lBQ0QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMxQixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUN4QjtDQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUosMENBQTBDO0FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQy9CLFVBQVUsRUFBRTtRQUNSLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7S0FDbkM7SUFDRCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQ3hCO0NBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzFELENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxHQUFHLENBQUMifQ==