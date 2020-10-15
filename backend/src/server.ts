import express, { response } from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    return response.json({ message: 'Semana NLW#3' })
})

app.listen(3333);