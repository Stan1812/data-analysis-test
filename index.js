const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const log = console.log

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const arts = db.db("articles").collection("arts")
    const authors = db.db("articles").collection("authors")
    const distinctAuthor= 'data.author'
    arts.distinct(distinctAuthor, (err, res) => {
        if (err) log(err);
        log(res)
        res.forEach(element => {
            let newObj = {
                'author': element,
                'titles': []
            }
            authors.insertOne(newObj, (err, res) => {
                if (err) throw err;
                console.log(`${newObj.author}插入成功`);
            });
        })
    });
    // arts.find({"data.author":"王小波"}).toArray((err, result) => {
    //     if (err) throw err;
    //     console.log(result);
    //     // let authorList =[]
    //     // result.forEach(element => {
    //     // authorList.push(element.author)            
    //     // });
    //     db.close();
    // });
});