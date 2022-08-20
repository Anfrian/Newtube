import express from "express";
import { del, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js"

const router = express.Router()

router.put("/id", update)

router.delete("/id", del)

router.get("/find/:id", getUser)

router.put("/sub/:id", subscribe)

router.put("/unsub/id", unsubscribe)

router.put("/like/:videoId", like)

router.put("/dislike/:videoId", dislike)

export default router;