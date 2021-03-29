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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const post_services_1 = require("../services/post.services");
const service = new post_services_1.PostsService();
class PostsController {
    constructor() {
        this.listPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const postList = yield service.list(20, 0);
            res.status(200).send(postList);
        });
        this.getPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = yield service.get(req.params.id);
            res.status(200).send(post);
        });
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const postId = yield service.create(req.body);
            res.status(201).send({ id: postId });
        });
    }
}
exports.PostsController = PostsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3N0cy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDZEQUF5RDtBQUV6RCxNQUFNLE9BQU8sR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztBQUNuQyxNQUFhLGVBQWU7SUFDeEI7UUFFQSxjQUFTLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUM3RCxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQSxDQUFBO1FBRUQsWUFBTyxHQUFHLENBQU0sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDM0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFBLENBQUE7UUFFRCxlQUFVLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUM5RCxNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFBLENBQUE7SUFmYSxDQUFDO0NBZ0JsQjtBQWpCRCwwQ0FpQkMifQ==