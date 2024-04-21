const fs = require('fs').promises;
async function createJsonasync(details) {
    try {
        await fs.mkdir(`./random1`, (err) => {
            if (!err) {
                console.log('directory created successfully');
            } else {
                console.log('error in creating directory:', err);
            }
        });
    for(let i=1;i<4;i++){
        const filename = `./random1/${i}.json`
        await fs.writeFile(filename,details, (err) => {
            if(!err){
                console.log('file created succesfully')
            }else{
                console.log('error while creating file')
            }
        })
    }
    for(let j=1;j<4;j++){
        const deleteFile = `./random1/${j}.json`
        setTimeout(()=>{
            fs.unlink(deleteFile,(err)=>{
            if(!err){
                console.log("deleted sucessfully")
            }else{
                console.log('error while deleting')
            }
        }),1000})
    }
}catch(err){
    console.log('Error',err)
} 
    
}
module.exports={createJsonasync};