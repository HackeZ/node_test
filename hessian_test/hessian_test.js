var Hessian = require('hessian-proxy');
Long = require('long');

var str = 'test';
writeStr = new Hessian.Writer2()
var buffer = writeStr.write(str);

console.log(typeof str);
console.log('str => ', buffer.getBuffer().toString())

// STRING OBJECT
var stringObject = {
    color: 'red', 
    model: 'corvette', 
    '__type__': 'example.Car'
};

write = new Hessian.Writer2()
var stringBuffer = write.writeObject(stringObject);

console.log('stringObject => ', stringObject);
console.log('stringBuffer => ', stringBuffer.getBuffer());

// NUMBER OBJECT
var numberObject = {
    int: 129, 
    int32: new Long(139),
    // int64: new double(149),
    '__type__': 'example.Height'
};

write = new Hessian.Writer2()
var numberBuffer = write.writeObject(numberObject);

console.log('numberObject => ', numberObject);
console.log('numberBuffer => ', numberBuffer.getBuffer());
