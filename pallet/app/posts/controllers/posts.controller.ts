import express from 'express';
import { PostsService } from '../services/post.services';


export class PostsController {
    constructor(){}

    listPosts = async(req: express.Request, res: express.Response) => {
        const service = PostsService.getInstance();
        const postList = await service.list(20, 0);
        res.status(200).send(postList);
    }

    getPost = async(req: express.Request, res: express.Response) => {
        const service = PostsService.getInstance();
        const post = await service.get(req.params.id);
        res.status(200).send(post);
    }

    createPost = async(req: express.Request, res: express.Response) => {
        const service = PostsService.getInstance();
        const postId = await service.create(req.body);
        res.status(201).send({id: postId});
    }

    vote = async(req: express.Request, res: express.Response) => {
        const service = PostsService.getInstance();
        const type = req.body.type;
        const postId = req.params.id;
        const post = await service.vote(type, postId);
        res.status(201).send(post);
    }
}