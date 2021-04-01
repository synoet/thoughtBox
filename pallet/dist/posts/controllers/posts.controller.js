"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const post_services_1 = require("../services/post.services");
const categories_constant_1 = __importDefault(require("../constants/categories.constant"));
class PostsController {
    constructor() {
        this.listPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const postList = yield service.list(20, 0);
            res.status(200).send(postList);
        });
        this.listPostsByCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const postList = yield service.listByCategory(req.params.category);
            res.status(200).send(postList);
        });
        this.getPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const post = yield service.get(req.params.id);
            res.status(200).send(post);
        });
        this.listCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            res.status(200).send(categories_constant_1.default);
        });
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const postId = yield service.create(req.body);
            res.status(201).send({ id: postId });
        });
        this.createComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const postId = req.params.id;
            const post = yield service.createComment(postId, req.body);
            res.status(201).send(post);
        });
        this.vote = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const type = req.body.type;
            const postId = req.params.id;
            const post = yield service.vote(type, postId);
            res.status(201).send(post);
        });
    }
}
exports.PostsController = PostsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9wb3N0cy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZEQUF5RDtBQUN6RCwyRkFBMEQ7QUFFMUQsTUFBYSxlQUFlO0lBQ3hCO1FBRUEsY0FBUyxHQUFHLENBQU0sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDN0QsTUFBTSxPQUFPLEdBQUcsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQSxDQUFBO1FBRUQsd0JBQW1CLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUN2RSxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQSxDQUFBO1FBRUQsWUFBTyxHQUFHLENBQU0sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDM0QsTUFBTSxPQUFPLEdBQUcsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUEsQ0FBQTtRQUVELG1CQUFjLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRSxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUEsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFNLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQzlELE1BQU0sT0FBTyxHQUFHLDRCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQSxDQUFBO1FBRUQsa0JBQWEsR0FBRyxDQUFNLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2pFLE1BQU0sT0FBTyxHQUFHLDRCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFBLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUN4RCxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzNCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFBLENBQUE7SUE1Q2EsQ0FBQztDQTZDbEI7QUE5Q0QsMENBOENDIn0=