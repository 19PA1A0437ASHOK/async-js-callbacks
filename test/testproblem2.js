const module2 = require('../problem2');
async function abc(){
    await module2.readLipsum();
    await module2.uppercasefile();
    await module2.uppertolower();
    await module2.sentencefile();
    await module2.readandsort();
    await module2.deletefiles();
}
abc();