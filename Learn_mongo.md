## Some Basic MongoDB commands
```SQL
show dbs                                        --show available dbs 
use <db name>                                   --will create a db if not availabe otherwise switched
show collections                                -- show collections of that db
db.createCollection('<coll_name>')              --create a collection in the database
db.<col_name>.drop()		                    --//to drop a collection
db.dropDatabase()                               --to delete a database 
db.<coll_name>.find()                           --to find/see the collection specified/all data  
db.<coll_name>.find({name:'rahul'})  
db.<coll_name>.insertOne({name:'keyboard'})		--adding json value into collection as a document
db.products.find({price:300})		            --wiill give results about the document objects which have price value 300
```

> There is a difference between collection and db 
`db > collection > documents > {fields: value} `
 
> `collections` name is basically here is the all individual dbs have one or more collections 

> `objects` are the json data in mongodb also known as `documents`

> A `Database` contains a collection, and a collection contains documents and the documents contain data `{field:value}`, they are related to each other. 
[Read Some Basics](https://www.guru99.com/what-is-mongodb.html)


# `Difference between rdbms and mongodb`

| RDBMS	    | MongoDB	         |    Difference
|-----------|--------------------|-----------------------------------------
| Table	    | Collection	     |    In RDBMS, the table contains the columns and rows which are used to store the data whereas, in MongoDB, this same structure is known as a collection. The collection contains documents which in turn contains Fields, which in turn are key-value pairs.
| Row	    | Document	         |    In RDBMS, the row represents a single, implicitly structured data item in a table. In MongoDB, the data is stored in documents.
| Column    | Field	             |    In RDBMS, the column denotes a set of data values. These in MongoDB are known as Fields.
| Joins	    | Embedded documents |	  In RDBMS, data is sometimes spread across various tables and in order to show a complete view of all data, a join is sometimes formed across tables to get the data. In MongoDB, the data is normally stored in a single collection, but separated by using Embedded documents. So there is no concept of joins in MongoDB.

- https://www.guru99.com/nosql-tutorial.html

- https://stackoverflow.com/questions/58119813/is-better-to-have-multiple-collections-with-thousands-of-documents-or-one-collec

## Use more collections or more documents in NO-SQL Database?
> <p style="color:hotpink;">Using more collections with single document vs single collection with multiple document which one to choose does really depend on the requirements for example just example if you have cheap database with quite key value or hashing type queries in future then multiple collection with single document might be a good idea but ofc this will cost extra memory to you rem so all and all it toatlly depends on the requiremnets </p>

```SQL
show dbs
use <db_name>
db.createCollection('_coll_name')
db.<coll_name>.find()		            -- show the documents in the collections and also to filter the results that we need like {price:350}	//it returns multiple documents
db.<coll_name>.findOne() 		        -- it returns single document basically object       //to enter some query inside use {} json in side ()
db.one.insertOne({JSON object})		    -- to add data or documents in the collection
{_id: ObjectId("id_name")}              --to select by id use 
db.one.update({_id: ObjectId("6365ec17b3ece3266a0fad01")}, {$set:{name:'TV', price:200}})   //to update value
```
> Everything is case sensitive in mognodb so becareful while writing function names

## syntax To update:
```SQL
db.<col_name>.update(
    {
        _id: ObjectId("Id_name")
    },
    {
        $set:{
            JSON updated Values
        }
    }
)
```
## Syntax to delete: 
```SQL
db.one.deleteOne({_id:ObjectId('6365ec17b3ece3266a0fad01')})        //real example 

db.<col_name>.deleteOne(
    {
        _id: ObjectId('Id_name')
    }
)

```

## Syntax to delete Many
```SQL
db.one.deleteMany(
    {
        _id: {$in:      //array Here Of ObjectId
         [ObjectId('6365ec3eb3ece3266a0fad02'),ObjectId('63633c54b7537afc507172c6')]
        }
    }
)
```


## Syntax to insert Many
```SQL
//array of objects or documents is being passed for a <coll_name> == "one"

db.one.insertMany([{name:'laptop',price:1000},{name:'CPU', price:5000}, {name:'Monitor', price:1000}])  
```


## Creating foreign keys in another collection (named as reveiw)
```SQL
db.reveiws.insertMany(
        [   --array of objects/documents

            {text:'Good Product', prd_id:ObjectId('6365f23eb3ece3266a0fad05')},     //adding id for foreign key
            {text:'bad product', prd_id:ObjectId('6365f23eb3ece3266a0fad04')}
        ]
    )
```

## $in and $set are operators in mongodb 
> operators are always used inside { } while implementing

## fields are basically the key and value you already know what is it

## syntax for operators
```SQL
db.one.find({price:{$gt:200}})      --just remember to use the CONDITION with the operator inside { }

db.one.find({$and: [{price:{$gt:200}},{price:{$lt:20000}}]})    --typical one just use all condition in array--
```

## Syntax to add documents using loop of js

```SQL
for (i = 0; i < 5000; i++) 
    { 
        db.scale.insertMany(
            [ {name: "Product_" + i}, {price: i + 100}] --array of document value
        ) 
    }
```

## Syntax of another command
```SQL
db.scale.find({name:'Product_2715'}).explain('executionStats')          -- to see the execution details (ex time etc)

db.scale.createIndex({name:1})  -- to fast the process of reading of a particular field values but it hardens write process 

db.scale.getIndexes({name:1})   --tell about created indexes 

db.scale.dropIndex({name:1})    --drop a particular index
```

## Auth in mongodb
```SQL
 db.createUser( 
    { 
        user: 'demouser', 
        pwd: passwordPrompt(), 
        roles: [{ role: 'readWrite', db: "demo" },      --use for admin this -- {role: 'userAdminAnyDatabase', db:'admin}, "readWriteAnyDatabase" --
                { role: 'read', db: 'test' }] 
    }
)
```

```SQL
db.getUsers()                           --to get all the details of users of that database
db.auth("demouser",passwordPrompt())    --use this to authorize as a user
db.runCommand({connectionStatus:1})    --write this to know who is the user and what privilages he have
```



