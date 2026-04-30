const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get('/', (req, res)  => {
    res.send('Hello world');
});

app.listen(PORT,() =>{
    console.log('Server is running on port ${PORT}');
});

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const userRoutes = require('./userRoutes');
app.use('/api/users', userRoutes);
app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}');
})