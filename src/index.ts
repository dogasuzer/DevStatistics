import express, { Express } from "express";
import { PORT } from "./secret";
import rootRouter from "./routes";

const app: Express = express();

app.use(express.json());
app.use("/api", rootRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
