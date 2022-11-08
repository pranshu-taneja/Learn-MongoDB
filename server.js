const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient        //require for mongo normal commands {find insert show} etc
const ObjectId = require('mongodb').ObjectId        //using object id for using object id in express
const PORT = process.env.PORT || 4000
const dblink = 'mongodb+srv://pranshu123:hellomoto123@cluster0.sxymknl.mongodb.net/?retryWrites=true&w=majority' //'mongodb://{<USERNAME>:<PASSWORD>@}localhost:27017' if need username password together

// mongodb+srv://pranshu123:hellomoto123@cluster0.sxymknl.mongodb.net/?retryWrites=true&w=majority      (online link)
// mongodb://{<USERNAME>:<PASSWORD>@}localhost:27017                                                    (local link --need to start server first)


let db;         //to use db variable as global

//------------------- creating and connecting client with the database  ------------------- (basically setup the database)
(async function(){                                          //syntactic sugar for promises
    try{
        const client = await MongoClient.connect(dblink)        //WIll surely get resolved rem-- Promises 
        db = client.db('demo')
    }
    catch(err){
        throw err
    }
})();  
//------------------- creating and connecting client with the database  ------------------- (basically setup the database)


//------------------- fetching details from the database -------------------
app.get('/', async(req,res)=>{    
    
    try{
        //--your query here--   (Typical example given below)
        // const coll_connect = await db.collection('one').find({price:{$gt: 188}}).toArray()      // as the result is sured so we don't use if here
        
        const result = await db.collection('product').find().toArray()      // as the result is sured so we don't use `if` here
        res.send(result) 
    }
    catch(err){
        throw err
    }
})
//------------------- fetching details from the database -------------------

app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)       // use `` for using variable in string
})


/*                          ----------------------------------------------------------------                        */




//-------------------------------------- Remove the Single comment from me for concept --------------------------------------


// //------------------- Asynchronous (promise) way of creating setup for database -------------------
// let db;

// /* 
// (async function(){                                          //syntactic sugar for promises
//     const client = await MongoClient.connect(dblink)        //WIll surely get resolved rem-- Promises 
//     db = client.db('demo')
// })();                                                      //the last extra () is used for syntax blah 
//  */

// // same above with error handling
// (async function(){                                          //syntactic sugar for promises
//     try{
//         const client = await MongoClient.connect(dblink)        //WIll surely get resolved rem-- Promises 
//         db = client.db('demo')
//     }
//     catch(err){
//         throw err
//     }
// })();                                                      //the last extra () is used for syntax blah 
// //------------------- Asynchronous (promise) way of creating setup for database -------------------





// /*   
// //------------------- Normal way of creating setup of database ------------------- 

// let db;
// MongoClient.connect(dblink, (err, client)=>{        //client is going to be connected with our database
//     if(err)throw err
    
//     db = client.db('demo')      //after this our client will be connected to 'demo' database
// })

// //------------------- Normal way of creating setup of database ------------------- 
// */




// // app.get('/', async(req,res)=>{            
    
// //     //using the connected database by client to fetch details and show them on the page
// //     //basically using the query here
// //     db.collection('one').find().toArray((err,result)=>{
// //         if(err)throw err

// //         res.send(result)
// //     })
// // })




// //------------------- The HomePage with async behaviour -------------------
// /* 
// app.get('/', async(req,res)=>{            
//     const coll_connect = await db.collection('one').find().toArray()      // as the result is sured so we don't use if here
//     res.send(coll_connect)
// })
// */

// // same above with error handling
// app.get('/', async(req,res)=>{    
            
//     try{
//         const coll_connect = await db.collection('one').find().toArray()      // as the result is sured so we don't use if here
//         res.send(coll_connect) 
//     }
//     catch(err){
//         throw err
//     }
// })
// //------------------- The HomePage with async behaviour -------------------

//-------------------------------------- Remove the comment from me --------------------------------------
