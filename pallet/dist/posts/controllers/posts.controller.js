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
class PostsController {
    constructor() {
        this.listPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const postList = yield service.list(20, 0);
            res.status(200).send(postList);
        });
        this.getPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const post = yield service.get(req.params.id);
            res.status(200).send(post);
        });
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = post_services_1.PostsService.getInstance();
            const postId = yield service.create(req.body);
            res.status(201).send({ id: postId });
        });
    }
}
exports.PostsController = PostsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9wb3N0cy9jb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDZEQUF5RDtBQUd6RCxNQUFhLGVBQWU7SUFDeEI7UUFFQSxjQUFTLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUM3RCxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFBLENBQUE7UUFFRCxZQUFPLEdBQUcsQ0FBTSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUMzRCxNQUFNLE9BQU8sR0FBRyw0QkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQSxDQUFBO1FBRUQsZUFBVSxHQUFHLENBQU0sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDOUQsTUFBTSxPQUFPLEdBQUcsNEJBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFBLENBQUE7SUFsQmEsQ0FBQztDQW1CbEI7QUFwQkQsMENBb0JDIn0=