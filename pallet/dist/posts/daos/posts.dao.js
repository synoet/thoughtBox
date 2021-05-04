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
            type: String,
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
                },
                yes: {
                    type: Number,
                    default: 0
                },
                no: {
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
        this.listPostsByCategory = (category) => __awaiter(this, void 0, void 0, function* () {
            console.log(category);
            return this.Post
                .find({ category: category });
        });
        this.listPosts = (limit = 25, page = 0) => __awaiter(this, void 0, void 0, function* () {
            return this.Post
                .find({}).sort({ time: 'desc' })
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
            else if (type == 'yes') {
                post.votes.yes++;
            }
            else if (type == 'no') {
                post.votes.no++;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3Bvc3RzL2Rhb3MvcG9zdHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBdUU7QUFDdkUsc0RBQXdDO0FBRXhDLE1BQWEsUUFBUTtJQW9EakI7UUFuREEsb0JBQWUsR0FBb0Isa0NBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUdqRSxXQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFbkQsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUUsTUFBTTtZQUNYLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXLEVBQUUsTUFBTTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7YUFDdEI7WUFDRCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUU7b0JBQ0YsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLENBQUM7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2dCQUNELEdBQUcsRUFBRTtvQkFDRCxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0QsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLENBQUM7aUJBQ2I7Z0JBQ0QsRUFBRSxFQUFFO29CQUNBLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2FBQ0o7WUFDRCxlQUFl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