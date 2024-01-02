let app=require('express');
//let express=app();
let productRouter=app.Router();
const { MongoClient } =require('mongodb');
//const client=new MongoClient('mongodb://localhost:27017');

function routing(routes)
{
    productRouter.route('/').get((request,response)=>{
        MongoClient.connect('mongodb://localhost:27017')
        .then(client=>{
            console.log(`Connected to Database`);
            const db=client.db('dec31');
            const tasksCollection=db.collection('product');
            tasksCollection.find({}).toArray()
            .then(
                function resolve(products){
                    response.render('product',{title:'Products Page',products:products,routes});
                },
                function reject(data){

                }
                )
            .catch(error=>{
                console.error(error);
                response.status(500).send('Error while Fetching');
            })

        })
        .catch(error=>
            {
                console.error(error);
                response.status(500).send('Error while connecting');
            });




       
    })
    
    productRouter.route('/category/:id').get((request,response)=>{
        const {id}=request.params;
        MongoClient.connect('mongodb://localhost:27017')
        .then(client=>{
            const db=client.db('dec31');
            const tasksCollection=db.collection('product');
            tasksCollection.find({"category_id":Number(id)})
            .toArray()
            .then(
                function resolve(products)
                {

                    response.render('product',{title:'Products Page',products:products,routes});
                },
                function reject(products)
                {

                }

            )
            .catch(error=>{
                console.error(error);
                response.status(500).send('Error while Fetching');
            })
        })
        .catch(error=>
            {
                console.error(error);
                response.status(500).send('Error while connecting');
            });




       // response.send('<h1>Products Details</h1>');
    });
    return productRouter;
}






module.exports=routing;