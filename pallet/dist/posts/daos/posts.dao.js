"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsDao = void 0;
const mongoose_service_1 = require("../../common/services/mongoose.service");
const shortUUID = __importStar(require("short-uuid"));
class PostsDao {
    constructor() {
        this.mongooseService = mongoose_service_1.MongooseService.getInstance();
        this.Schema = this.mongooseService.getMongoose().Schema;
        this.postSchema = new this.Schema({
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
        this.Post = this.mongooseService.getMongoose().model('Posts', this.postSchema);
        this.createPost = (postFields) => __awaiter(this, void 0, void 0, function* () {
            console.log(postFields);
            postFields._id = shortUUID.generate();
            const post = new this.Post(postFields);
            yield post.save();
            return postFields._id;
        });
        this.getPostById = (postId) => __awaiter(this, void 0, void 0, function* () {
            console.log(postId);
            return this.Post.findOne({ _id: postId });
        });
        this.listPosts = (limit = 25, page = 0) => __awaiter(this, void 0, void 0, function* () {
            return this.Post.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
        this.createComment = (postId, commentFields) => __awaiter(this, void 0, void 0, function* () {
            let post = yield this.Post.findById(postId);
            commentFields._id = shortUUID.generate();
            post.comments.push(commentFields);
            return yield post.save();
        });
        this.vote = (type, postId) => __awaiter(this, void 0, void 0, function* () {
            let post = yield this.Post.findById(postId);
            if (type == 'good') {
                post.votes.good++;
            }
            else if (type == 'neutral') {
                post.votes.neutral++;
            }
            else if (type == 'bad') {
                post.votes.bad++;
            }
            return yield post.save();
        });
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new PostsDao();
        }
        return this.instance;
    }
}
exports.PostsDao = PostsDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3Bvc3RzL2Rhb3MvcG9zdHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBdUU7QUFDdkUsc0RBQXdDO0FBRXhDLE1BQWEsUUFBUTtJQTJDakI7UUExQ0Esb0JBQWUsR0FBb0Isa0NBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUdqRSxXQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFbkQsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUUsTUFBTTtZQUNYLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXLEVBQUUsTUFBTTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7YUFDdEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFO29CQUNGLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLENBQUM7aUJBQ2I7YUFDSjtZQUNELGVBQWUsRUFBRTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsQ0FBQzthQUNiO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxLQUFLO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2FBQ2Q7U0FDSixDQUFDLENBQUM7UUFFSCxTQUFJLEdBQUcsSUFB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