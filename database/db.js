import mongoose from 'mongoose';
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = `mongodb://${username}:${password}@cluster0.4voqu.mongodb.net/mydb?retryWrites=true&w=majority`;
const Connection = async(URL) => {
    // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useMongoClient: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;