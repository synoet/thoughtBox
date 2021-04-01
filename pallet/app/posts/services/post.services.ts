import { CRUD } from '../../common/interfaces/crud.interface';
import { GenericInMemoryDao } from '../daos/in.memory.dao';
import { PostsDao } from '../daos/posts.dao';

export class PostsService implements CRUD {
    private static instance: PostsService;
    dao: GenericInMemoryDao;

    constructor(){
        this.dao = GenericInMemoryDao.getInstance();
    }

    static getInstance(): PostsService {
        if (!PostsService.instance) {
            PostsService.instance = new PostsService();
        }
        return PostsService.instance;
    }
    
    
    create = (data: any) => {
        return PostsDao.getInstance().createPost(data);
    }

    list = (limit: number, page: number) => {
        return PostsDao.getInstance().listPosts(limit, page);
    }

    listByCategory = (category: string) => {
        return PostsDao.getInstance().listPostsByCategory(category);
    }

    get = (id: any) => {
        return PostsDao.getInstance().getPostById(id);
    }

    createComment = (postId: string, commentFields: any) => {
        return PostsDao.getInstance().createComment(postId, commentFields);
    }

    vote = (type: string, postId: string) => {
        return PostsDao.getInstance().vote(type, postId);
    }

}