import { Router } from "express";
import questionRoutes from "./question";
// import statsRoutes from "./stat";

const rootRouter: Router = Router();
rootRouter.use("/question", questionRoutes);
// rootRouter.use("/stats", statsRoutes);

export default rootRouter;
