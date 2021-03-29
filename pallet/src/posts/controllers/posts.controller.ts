import express from 'express';
import { PostsService } from '../services/post.services';

const service = new PostsService();
export class PostsController {
    constructor(){}

    listPosts = async(req: express.Request, res: express.Response) => {
        const postList = await service.list(20, 0);
        res.status(200).send(postList);
    }

    getPost = async(req: express.Request, res: express.Response) => {
        const post = await service.get(req.params.id);
        res.status(200).send(post);
    }

    createPost = async(req: express.Request, res: express.Response) => {
        const postId = await service.create(req.body);
        res.status(201).send({id: postId});
    }
}