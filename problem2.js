const fs = require('fs').promises;
const {unlink}= require('fs');
async function readLipsum(){
    try{
        const readendata = await fs.readFile('./lipsum-1.txt','utf8');
        return readendata;
    }catch(err){
        console.error('Error:',err);
    }
}
async function uppercasefile(){
    try{
    const data = await readLipsum();
    await fs.writeFile('./uppercase.txt',data.toString().toUpperCase());
    await fs.appendFile('./filenames','uppercase.txt');
    console.log('upper successful');
    return 'uppercase.txt';
    }catch(err){
        
        console.log('error in converting to upper')
    }
}
async function uppertolower(){
    try{
    const upperdata=await fs.readFile('./uppercase.txt','utf8');
    const lowerdata = upperdata.toLowerCase().split('.');
    console.log('lower success');
    return lowerdata;
    }catch(err){
        console.log('Error',err);
    }
}
async function sentencefile(){
    try {
        const data = await uppertolower();
        const filenames = [];

        for (let i = 0; i < data.length; i++) {
            const filename = `sentence${i}.txt`;
            await fs.writeFile(filename, data[i]);
            filenames.push(filename);
            console.log(`sentence${i} created successfully`);
        }

        // Append all filenames to the ./filenames.txt file
        await fs.appendFile('./filenames.txt', filenames.join('\n') + '\n');
    } catch (err) {
        console.log('Error', err);
    }
}

async function readandsort(){
    try{
        const fileName = await fs.readFile('./filenames.txt','utf8');
        const array =fileName.split('\n').filter(Boolean);
        let merged='';
        for(let i=0;i<array.length;i++){
            const pathfile = array[i].trim();
            try{
                await fs.access(pathfile);
                const content = await fs.readFile(pathfile,'utf8');
                merged+=content;
            }catch(err){
                console.log(`error while reading file${pathfile}`,err);
            }
        }
        const sorted = merged.split('\n').sort();
        fs.writeFile('./sorted.txt',sorted.join('\n'));
        console.log('sorted and saved to sorted.txt');
        fs.appendFile('./filenames.txt','\n./sorted.txt');

    }catch(err){
        console.log('error',err);
    }
}
async function deletefiles(){
    try{
        const filename1 = await fs.readFile('./filenames.txt','utf8');
        const arr1 = filename1.split('\n');
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]){
                await fs.unlink(arr1[i].trim(),(err) =>{
                    if(!err){
                        console.log('deleted succesfully')
                    }else{
                        console.log('Error',err);
                    }
                });
            }
        }
    }catch(err){
        console.log('error',err);
    }
}
module.exports = {readLipsum,uppercasefile,uppertolower,sentencefile,readandsort,deletefiles}
