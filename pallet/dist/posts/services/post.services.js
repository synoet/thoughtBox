"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
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
    }
}
exports.PostsService = PostsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3N0cy9zZXJ2aWNlcy9wb3N0LnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlEQUE2QztBQUU3QyxNQUFhLFlBQVk7SUFHckI7UUFFQSxXQUFNLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNuQixPQUFPLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQTtRQUVELFNBQUksR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUNuQyxPQUFPLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUE7UUFFRCxRQUFHLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNkLE9BQU8sb0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFBO0lBWmEsQ0FBQztDQWNsQjtBQWpCRCxvQ0FpQkMifQ==