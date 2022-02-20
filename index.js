import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

//create roughts
app.get('/', (req, res) => {
    res.send('Hello from the home page');
});

// make it listen to request

app.listen(PORT, () => {
    console.log(`server  on port ${PORT}`);
})