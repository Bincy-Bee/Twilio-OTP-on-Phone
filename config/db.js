const mongoose = require('mongoose');

const db = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/SMSOTP');
    console.log('DataBase Connected')
}

module.exports={db}