"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const in_memory_dao_1 = require("../daos/in.memory.dao");
const posts_dao_1 = require("../daos/posts.dao");
class PostsService {
    constructor() {
        this.create = (data) => {
            return posts_dao_1.PostsDao.getInstance().createPost(data);
        };
        this.list = (limit, page) => {
            return posts_dao_1.PostsDao.getInstance().listPosts(limit, page);
        };
        this.get = (id) => {
            return posts_dao_1.PostsDao.getInstance().getPostById(id);
        };
        this.vote = (type, postId) => {
            return posts_dao_1.PostsDao.getInstance().vote(type, postId);
        };
        this.dao = in_memory_dao_1.GenericInMemoryDao.getInstance();
    }
    static getInstance() {
        if (!PostsService.instance) {
            PostsService.instance = new PostsService();
        }
        return PostsService.instance;
    }
}
exports.PostsService = PostsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9wb3N0cy9zZXJ2aWNlcy9wb3N0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlEQUEyRDtBQUMzRCxpREFBNkM7QUFFN0MsTUFBYSxZQUFZO0lBSXJCO1FBWUEsV0FBTSxHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDbkIsT0FBTyxvQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUU7WUFDbkMsT0FBTyxvQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFBO1FBRUQsUUFBRyxHQUFHLENBQUMsRUFBTyxFQUFFLEVBQUU7WUFDZCxPQUFPLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQTtRQUVELFNBQUksR0FBRyxDQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUNwQyxPQUFPLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUE7UUF6QkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxrQ0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN4QixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDOUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztDQW1CSjtBQWhDRCxvQ0FnQ0MifQ==