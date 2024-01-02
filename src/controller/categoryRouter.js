let app=require('express');
let categoryRouter=app.Router();

const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

   function routing(routes)
{
    
     categoryRouter.route('/').get((request,response)=>{
        MongoClient.connect('mongodb://localhost:27017')
        .then(client => {
        console.log(`Connected to Database`)
        const db = client.db('dec31')
        const tasksCollection = db.collection('category')
        tasksCollection.find({}).
        toArray().
        then(
            function resolve(data){
               // console.log(data);
                response.render('category',{title:'Category Page',data,routes});
            },
            function reject(data){
              //  console.log(data);
            });
        })
        .catch(error=>{
            console.error(error);
            response.status(500).send('Error while Fetching');
        })
    
    
        .catch(error=>
            {
                console.error(error);
                response.status(500).send('Error while connecting');
            });
        
   });


    categoryRouter.route('/details').get((request,response)=>{
        response.send('<h1>Category Details</h1>');
    });

    return categoryRouter;
}



module.exports=routing;