const module1 = require('../problem1');
const obj = { Name:'ashok', Profession:'SDE', Age:'22'};
var details = JSON.stringify(obj, null, 2);
module1.createJsonasync(details);
