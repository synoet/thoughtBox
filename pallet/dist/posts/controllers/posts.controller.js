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
            console.log(req.params.category);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9wb3N0cy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZEQUF5RDtBQUN6RCwyRkFBMEQ7QUFFMUQsTUFBYSxlQUFlO0lBQ3hCO1FBRUEsY0FBUyxHQUFHLENBQU0sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDN0QsTUFBTSxPQUFPLEdBQUcsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQSxDQUFBO1FBRUQsd0JBQW1CLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUN2RSxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUEsQ0FBQTtRQUVELFlBQU8sR0FBRyxDQUFNLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQzNELE1BQU0sT0FBTyxHQUFHLDRCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFBLENBQUE7UUFFRCxtQkFBYyxHQUFHLENBQU0sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEUsTUFBTSxPQUFPLEdBQUcsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFBLENBQUE7UUFFRCxlQUFVLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUM5RCxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUEsQ0FBQTtRQUVELGtCQUFhLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNqRSxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQSxDQUFBO1FBRUQsU0FBSSxHQUFHLENBQU0sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDeEQsTUFBTSxPQUFPLEdBQUcsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQSxDQUFBO0lBN0NhLENBQUM7Q0E4Q2xCO0FBL0NELDBDQStDQyJ9