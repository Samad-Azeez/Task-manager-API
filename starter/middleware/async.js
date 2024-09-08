// asyncWrapper simplifies error handling in async route handlers
export const asyncWrapper = (cb) => {
    // Return a new async function that Express uses as middleware or a route handler
    return async (req, res, next) => {
        try {
            await cb(req, res, next);  // Execute the passed async function
        } catch (error) {
            next(error);  // Forward any errors to Express error handling
        }
    };
};