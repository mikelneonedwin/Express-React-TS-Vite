import express from 'express';
import api, { $404, $500 } from './api';

const Server = (path:string) => {
    const app = express();
    app.use('/', api);
    app.use($404);
    app.use($500);
    
    console.log('API request to /api/' + path);

    try {
        const server = app.listen(8000, () => {
            console.log('Express running on', 8000);
        })
        server.on('connection', () => {
            console.log('Closing Express...');
            server.close();
        })
    } catch (err){ 
        console.log('Error starting express');
        console.error(err);
    }

    return path;
}

export default Server;