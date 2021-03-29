import { CRUD } from '../../common/interfaces/crud.interface';
import { PostsDao } from '../daos/posts.dao';

export class PostsService implements CRUD {
    private static instance: PostsService;

    constructor(){}
    
    create = (data: any) => {
        return PostsDao.getInstance().createPost(data);
    }

    list = (limit: number, page: number) => {
        return PostsDao.getInstance().listPosts(limit, page);
    }

    get = (id: any) => {
        return PostsDao.getInstance().getPostById(id);
    }

}