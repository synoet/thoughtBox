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
        this.app.get(`/posts/:category/category`, [
            controller.listPostsByCategory
        ]);
        this.app.post(`/posts`, [
            controller.createPost
        ]);
        this.app.get(`/post/:id`, [
            controller.getPost
        ]);
        this.app.patch(`/posts/:id`, [
            controller.vote
        ]);
        this.app.post(`/comments`, [
            controller.createComment
        ]);
        this.app.get(`/categories`, [
            controller.listCategories
        ]);
    }
}
exports.PostsRoutes = PostsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9wb3N0cy9wb3N0cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFtRjtBQUluRixxRUFBaUU7QUFFakUsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLFVBQVUsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsVUFBVSxDQUFDLFNBQVM7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUU7WUFDdEMsVUFBVSxDQUFDLG1CQUFtQjtTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEIsVUFBVSxDQUFDLFVBQVU7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUN6QixVQUFVLENBQUMsSUFBSTtTQUNsQixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdkIsVUFBVSxDQUFDLGFBQWE7U0FDM0IsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFO1lBQ3hCLFVBQVUsQ0FBQyxjQUFjO1NBQzVCLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQXJDRCxrQ0FxQ0MifQ==