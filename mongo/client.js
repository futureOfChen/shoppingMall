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


client.addToCart = (goods,fn) => {
    MongoClient.connect(queryUrl,(err,db) => {
        if(err) {
            console.log('err'+err);
            return;
        }
        let dt = db.db('db_demo');

        let users = dt.collection('users');

        
       //查询条件  db.users.find({"cartList.productId":"201710017"})

        // 根据传入的goods.productId在集合中查询
        
            
        users.find({"cartList.productId":goods.productId}).toArray((err,res) => {
            if(err) {
               if(err) throw err;
               return;
            }else {

                let length = res.length;
                
                if(length === 0) {
                    // 没有查询到的话就插入
                    fn("没有查询到");
                } else {
                    //查询到的话更新数据
                    fn("查询到了数据");
                }        
                db.close();    
            }
        })

            
    })
}

module.exports = client;