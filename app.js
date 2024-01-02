let express=require('express');
let app=express();
let env=require('dotenv');
env.config();
let port=process.env.PORT || 7100;
let morgan=require('morgan');
let fs=require('fs');
//app.use(morgan('combined'));
app.use(morgan('short',{stream:fs.createWriteStream('./app.logs')}));



let routes = [
    {path:'/',key:'Home'},
    {path:'/category',key:'Category'},
    {path:'/product',key:'Product'}
]
let categoryRouter=require('./src/controller/categoryRouter')(routes);
let productRouter=require('./src/controller/productsRoute')(routes);

//static filepath
app.use(express.static(__dirname+'/public'));

//html filepath
app.set('views','./src/views');

//view engine
app.set('view engine','ejs');

app.use('/category',categoryRouter);
app.use('/product',productRouter);

app.get('/',(request,response)=>{
    response.render('index',{title:'Home Page',routes});
});
/*
app.get('/category',(request,response)=>{
    response.send(category);
});
app.get('/product',(request,response)=>{
    response.send(products);
});
*/

app.listen(port,(err)=>{
    if(err) throw err;
    else{
        console.log(`server is running at port ${port}`);
    }
});