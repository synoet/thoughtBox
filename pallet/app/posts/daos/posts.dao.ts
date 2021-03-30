import {MongooseService} from '../../common/services/mongoose.service';
import * as shortUUID from "short-uuid";

export class PostsDao {
    mongooseService: MongooseService = MongooseService.getInstance();
    private static instance: PostsDao;

    Schema = this.mongooseService.getMongoose().Schema;

    postSchema = new this.Schema({
        _id: String,
        category: String, 
        title: String,
        link: String,
        description: String,
        votes: {
            good: {
                type: Number,
                default: 0
            },
            neutral: {
                type: Number,
                default: 0
            },
            bad: {
                type: Number,
                default: 0,
            }
        }
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

    createPost = async (postFields: any) => {
        console.log(postFields);
        postFields._id = shortUUID.generate();
        const post = new this.Post(postFields);
        await post.save();
        return postFields._id;
    }

    getPostById = async (postId: string) => {
        console.log(postId);
        return this.Post.findOne({_id: postId});
    }

    listPosts = async (limit: number = 25, page: number = 0) => {
        return this.Post.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    vote = async (type: String, postId: String) => {
        let post: any = await this.Post.findById(postId);
        if (type == 'good'){
            post.votes.good ++;
        }else if(type == 'neutral'){
            post.votes.neutral ++;
        }else if (type == 'bad'){
            post.votes.bad ++;
        }
        return await post.save();
    }
}