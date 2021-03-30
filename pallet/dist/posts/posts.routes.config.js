"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const posts_controller_1 = require("./controllers/posts.controller");
class PostsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostsRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const controller = new posts_controller_1.PostsController();
        this.app.get(`/posts`, [
            controller.listPosts
        ]);
        this.app.post(`/posts`, [
            controller.createPost
        ]);
        this.app.get(`/posts/:id`, [
            controller.getPost
        ]);
        this.app.patch(`/posts/:id`, [
            controller.vote
        ]);
        this.app.post(`/posts/:id/comment`, [
            controller.createComment
        ]);
    }
}
exports.PostsRoutes = PostsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9wb3N0cy9wb3N0cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFtRjtBQUluRixxRUFBaUU7QUFFakUsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLFVBQVUsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsVUFBVSxDQUFDLFNBQVM7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLFVBQVUsQ0FBQyxVQUFVO1NBQ3hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTztTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDekIsVUFBVSxDQUFDLElBQUk7U0FDbEIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDaEMsVUFBVSxDQUFDLGFBQWE7U0FDM0IsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBN0JELGtDQTZCQyJ9