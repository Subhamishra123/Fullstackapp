function download(url,cb)
{
    setTimeout(()=>{
        console.log('downloading data from ',url);
        let data='abcdef';
        console.log('finished downloading');
        cb(data);
    },5000);
}



download('www.xyz.com',function process(data){
    console.log(`downloaded data is ${data}`);
    saveDatatoFile(data,function process(filename){
        console.log('data saved to file name ',filename);
        uploadFile('www.abc.com',filename,function( status){
            console.log('file upload status is ',status);
        }) 
    });
});
function saveDatatoFile(data,cb)
{
    setTimeout(()=>{
        console.log('saving data to file',data);
        let filename='abc.txt'
        cb(filename);
    },1000);
}
function uploadFile(url,filename,cb)
{
    setTimeout(()=>{
        console.log(`file ${filename} uploaded started`);
        console.log(`file uploaded to new url ${url}`);
        cb('success');

    },2000);
}