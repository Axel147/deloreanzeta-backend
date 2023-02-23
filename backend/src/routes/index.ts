import {Router} from "express";

import auth from "./auth";
import category from "./category";
import hiring from "./hiring";
import member from "./member";
import neww from "./new";
import product from "./product";
import tour from "./tour"
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/category", category);
routes.use("/hirings", hiring);
routes.use("/member", member),
routes.use("/new", neww);
routes.use("/product", product);
routes.use("/users", user);
routes.use("/tour", tour);


export default routes;
