import { Router } from "express";

import { index } from "../controllers/index.controllers.js";

const router = Router()

router.get('/ping', index)

export default router