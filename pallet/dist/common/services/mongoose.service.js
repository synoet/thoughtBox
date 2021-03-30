"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const port = process.env.DB || '3000';
class MongooseService {
    constructor() {
        this.options = {
            autoIndex: false,
            poolSize: 10,
            bufferMaxEntries: 0,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        this.count = 0;
        this.connectWithRetry();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new MongooseService();
        }
        return this.instance;
    }
    getMongoose() {
        return mongoose_1.default;
    }
    connectWithRetry() {
        console.log('MongoDB connection with retry');
        mongoose_1.default.connect(port, this.options).then(() => {
            console.log('MongoDB is connected');
        }).catch(err => {
            console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++this.count);
            setTimeout(this.connectWithRetry, 5000);
        });
    }
    ;
}
exports.MongooseService = MongooseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21tb24vc2VydmljZXMvbW9uZ29vc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3REFBZ0M7QUFFaEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDO0FBQ3RDLE1BQWEsZUFBZTtJQVl4QjtRQVRBLFlBQU8sR0FBRztZQUNOLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFFBQVEsRUFBRSxFQUFFO1lBQ1osZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1NBQzNCLENBQUM7UUFDRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR04sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sa0JBQVEsQ0FBQztJQUNwQixDQUFDO0lBR0QsZ0JBQWdCO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLGtCQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RixVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUFBLENBQUM7Q0FFTDtBQXRDRCwwQ0FzQ0MifQ==