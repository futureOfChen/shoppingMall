const  client = {};
const MongoClient = require('mongodb').MongoClient;
const queryUrl = 'mongodb://localhost:27017/db_demo';

client.getGoodslist = (fn) => {
    MongoClient.connect(queryUrl,(err,db) => {
        if(err) {
            console.log('err'+err);
            return;
        }
        let dt = db.db('db_demo');

        let goods = dt.collection('goods');

        goods.find({}).toArray( (err,res) => {
            if(err) {
                console.log('err'+err);
                return;
            }
            fn(res);
            db.close();
        } )
    })
}

module.exports = client;