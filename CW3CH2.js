var Sum = 0;
var Ave = 0;
var Med = 0;
var Mod = 0;
var Ran = 0;
const NumNo = prompt('Enter the number of values:');
const Type = prompt('Enter the type of operation (Sum, Average, Median, Mode, Range):');
const ValArr = [];
for (let i = 0; i < NumNo; i++) {
    Value = prompt(`Enter value (${i + 1}/${NumNo})`)
    PushArr = ValArr.push(Value)
};

if (Type == 'Sum') {
    for (let i = 0; i < NumNo; i++) {
        Sum = parseInt(Sum) + parseInt(ValArr[i]);
    }
    console.log(`Sum is: ${Sum}`);
};

if (Type == 'Average') {
    for (let i = 0; i < NumNo; i++) {
        Sum = parseInt(Sum) + parseInt(ValArr[i]);
    }
    Ave = Sum / NumNo
    console.log(`Average is: ${Ave}`);
};

if (Type == 'Mode') {
    let PopCount=0;
    let PrePopCount=0;
    for (let i = 0; i < NumNo; i++) {
         for (let i2 = 0; i2 < NumNo; i2++) {
            if(ValArr[i]==ValArr[i2]){
                PopCount++;
            }
         }
         if (PopCount>PrePopCount){
             PrePopCount=PopCount;
             PopCount=0;
         }
    }
    console.log(`Average is: ${PrePopCount}`);
};
/*
switch (OpType = Type) {
    case (Type = 'Sum'):
        Sum = valArr.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log(Sum);
        break;

    case (Type = 'Average'):
        var Product = valArr.reduce(function (a, b) {
            return a * b;
        }, 0);
        var Average = Product / NumNo
        console.log(Average);
        break;
};

case (Type = 'Median'):
    console.log(sum);
    break;

case (Type = 'Mode'):
    for (let i = 0; i < NumNo; i++) {
        const sum = +valArr[i];
    };
    console.log(sum);
    break;

case (Type = 'Range'):
    for (let i = 0; i < NumNo; i++) {
        const sum = +valArr[i];
    };
    console.log(sum);
    break;
}
*/

