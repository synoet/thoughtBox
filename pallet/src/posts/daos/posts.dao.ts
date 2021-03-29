import {MongooseService} from '../../common/services/mongoose.service';
import * as shortUUID from "short-uuid";

export class PostsDao {
    mongooseService: MongooseService = MongooseService.getInstance();
    private static instance: PostsDao;

    Schema = this.mongooseService.getMongoose().Schema;

    postSchema = new this.Schema({
        _id: String,
        title: String,
        link: String,
        description: String,
    });

    Post = this.mongooseService.getMongoose().model('Posts', this.postSchema);


    constructor() {
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new PostsDao();
        }
        return this.instance;
    }

    async createPost(postFields: any) {
        console.log(postFields);
        postFields._id = shortUUID.generate();
        const post = new this.Post(postFields);
        await post.save();
        return postFields._id;
    }

    async getPostById(postId: string) {
        return this.Post.findOne({_id: postId});
    }

    async listPosts(limit: number = 25, page: number = 0) {
        return this.Post.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
}