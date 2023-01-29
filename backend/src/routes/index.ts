import {Router} from "express";

import auth from "./auth";
import user from "./user";
import category from "./category";
import product from "./product";
import neww from "./new";
import hiring from "./hiring"

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/category", category);
routes.use("/product", product);
routes.use("/new", neww);
routes.use("/hirings", hiring);

export default routes;
