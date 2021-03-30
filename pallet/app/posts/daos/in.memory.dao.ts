import * as shortUUID from 'short-uuid';

export class GenericInMemoryDao {
    private static instance: GenericInMemoryDao;
    posts: any = [];

    constructor() {
        console.log('Created new instance of GenericInMemoryDao');
    }

    static getInstance(): GenericInMemoryDao {
        if (!GenericInMemoryDao.instance) {
            GenericInMemoryDao.instance = new GenericInMemoryDao();
        }
        return GenericInMemoryDao.instance;
    }

    createPost = (postFields: any) => {
        return new Promise((resolve) => {
            postFields._id = shortUUID.generate();
            this.posts.push(postFields)
            resolve(postFields._id)
        })
    }

    getPostByIde = (postId: any) => {
        return new Promise((resolve) => {
            resolve(this.posts.find((post: {id: string; }) => post.id === postId));
        })
    }

    listPosts = (limit: number, page: number = 0) => {
        return new Promise((resolve) => {
            resolve(this.posts);
        })

    }
}