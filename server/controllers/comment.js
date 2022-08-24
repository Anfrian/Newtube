import Comment from "../models/Comment.js"
import Video from "../models/Video.js"

export const addComment = async (req,res,next) => {
    try{
        var comment = new Comment({
            UserId:req.user.id,
            ...req.body
        })
        comment = await comment.save()
        res.status(200).json(comment)
    } catch (err) {
        next(err)
    }
}

export const updateComment = async (req,res,next) => {
    try{
        var comment = await Comment.findById(req.params.id)
        if (!comment) {
            return next(createError(404,"not found"))
        }
        if (req.user.id == comment.UserId) {
            comment = await Comment.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
            res.status(200).json(comment)
        } else {
            return createError(403, "not auth")
        }
    } catch (err) {
        next(err)
    }
}

export const deleteComment = async (req,res,next) => {
    try{
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(res.params.id)
        if (!comment&&!video) {
            return next(createError(404,"not found"))
        }
        if (req.user.id == comment.UserId || req.user.id == video.userId) {
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("comment deleted")
        } else {
            return createError(403, "not auth")
        }
    } catch (err) {
        next(err)
    }
}

export const getComment = async (req,res,next) => {
    try{
        const comments = await Comment.find({videoId:req.params.videoId})
        if (!comments) {
            return next(createError(404,"not found"))
        }
        res.status(200).json(comments)
    } catch (err) {
        next(err)
    }
}