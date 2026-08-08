import { Router } from "express";
import { getFleets, getFleetByID, addFleet, editFleet, deleteFleet, maxFare, raterName } from "../controller/microbus.controller";
import {validation} from "../middleware/microbus.middleware"

const router = Router()

router.get("/", getFleets)
router.get("/filter", maxFare)
router.get("/rate/:id",raterName)
router.get("/:id", getFleetByID)
router.post("/", validation, addFleet)
router.put("/:id", validation, editFleet)
router.delete("/:id", deleteFleet)

export default router