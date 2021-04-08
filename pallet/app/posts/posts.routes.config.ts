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

        this.app.get(`/posts?category=:category`, [
            controller.listPostsByCategory
        ]);

        this.app.post(`/posts`, [
            controller.createPost
        ]);

        this.app.get(`/posts/:id`, [
            controller.getPost
        ]);

        this.app.patch(`/posts?id=:id`, [
            controller.vote
        ])

        this.app.post(`/comments`, [
            controller.createComment
        ])

        this.app.get(`/categories`, [
            controller.listCategories
        ])
    }
}