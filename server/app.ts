import express, { type Express } from 'express';
import api, { $500 } from './api';
import { resolve } from 'path';

const app:Express = express();

app.use('/api', api);

app.use('/', express.static('./dist'));

app.get('*', (req, res) => {
    res.sendFile(resolve('dist/index.html'));
})

app.use($500);

const port = process.env.PORT || 80;
app.listen(Number(port), '0.0.0.0', () => {
    console.log('Express running on port', port);
})
