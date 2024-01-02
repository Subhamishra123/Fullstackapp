function download(url)
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('downloading data from ',url);
            let data='abcdef';
            console.log('finished downloading');
           resolve(data);
        },5000);
    });
}

function saveDatatoFile(data)
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('saving data to file',data);
            let filename='abc.txt'
            resolve(filename);
        },1000);
    });
}

function uploadFile(url,filename)
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(`file ${filename} uploaded started`);
            console.log(`file uploaded to new url ${url}`);
            resolve('success');
        },2000);
    });
}

download('www.xyz.com')
.then(function handler1(data){
    console.log(`downloaded data is ${data}`);
    return saveDatatoFile(data);
})
.then(function handler2(filename){
    console.log('data saved to file name ',filename);
    return uploadFile('www.abc.com',filename);
})
.then(function handler3(status){
    console.log('file upload status is ',status);
});

// console.log("==================================");

// download('www.xyz.com',function process(data){
//     console.log(`downloaded data is ${data}`);
//     saveDatatoFile(data,function process(filename){
//         console.log('data saved to file name ',filename);
//         uploadFile('www.abc.com',filename,function( status){
//             console.log('file upload status is ',status);
//         }) 
//     });
// });

