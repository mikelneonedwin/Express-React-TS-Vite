import { Router } from 'express';

const api:Router = Router();

export const $404 = (req, res) => {
    return res.status(404).json({
        error: '404 - Not Found!'
    })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const $500 = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: '505 - Server Error!'
    })
}


/* ADD YOUR API ROUTES HERE */


api.use($404);
api.use($500);
export default api;