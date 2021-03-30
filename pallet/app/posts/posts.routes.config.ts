import {CommonRoutesConfig, configureRoutes} from '../common/common.routes.config';


import express from 'express';
import { PostsController } from './controllers/posts.controller';

export class PostsRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'PostsRoute');
        this.configureRoutes();
    }

    configureRoutes() {
        const controller = new PostsController();

        this.app.get(`/posts`, [
            controller.listPosts
        ]);

        this.app.post(`/posts`, [
            controller.createPost
        ]);

        this.app.put(`/posts/:id`, [
            controller.getPost
        ]);

    }


}