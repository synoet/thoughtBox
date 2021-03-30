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
        time: {
            type: Date,
            default: Date.now(),
        },
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
        },
        num_of_comments: {
            type: Number,
            default: 0
        },
        comments: {
            type: Array,
            default: []
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
        return this.Post
            .find({}).sort({time: 'desc'})
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    createComment = async(postId: string, commentFields: any) => {
        let post: any = await this.Post.findById(postId);
        commentFields._id = shortUUID.generate();
        post.comments.push(commentFields);
        return await post.save();
    }

    vote = async (type: String, postId: string) => {
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