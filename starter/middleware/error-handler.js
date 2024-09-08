export const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({error_message: err});
    next()
}