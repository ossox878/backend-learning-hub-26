import routerBuilder,{ Router } from "express";
import * as methods from "../controller/controller";
import { middleware } from "../middleware/middleware";


const router:Router = routerBuilder()

router.post("/signIn",methods.signIn)
router.post("/signUp",methods.signUp)
router.get("/signOut",methods.signOut)
router.get("/users",middleware,methods.getAdminProfile)
router.get("/users",middleware,methods.getProfile)

export default router