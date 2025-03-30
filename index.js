const express = require('express');
const mongoose = require('mongoose');
const { Message } = require('./Model/dataModel');
const { router } = require('./Routes/messageRoutes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ImageData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

app.use('/api', router);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
