import express, { Express } from "express";
import cors from "cors";
import { conectarDB } from "../data/config";
import userRoutes from "../routes/users";
import ExperienceRoutes from "../routes/experience";

export class Server {
  app: Express;
  port: string | number | undefined;
  authPath: string;
  orderPath: string;
  issuesPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/auth";
    this.orderPath = "/orders";
    this.issuesPath = "/issues";

    this.conectTheDB();
    this.middlewares();
    this.routes();
  }

  async conectTheDB(): Promise<void> {
    await conectarDB();
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes(): void {
    this.app.use("/users", userRoutes);
    this.app.use("/experience", ExperienceRoutes);
  }

  listen(): void {
    this.app.listen(8080, () => {
      console.log(`El servidor está corriendo en el puerto 8080`);
    });
  }
}
