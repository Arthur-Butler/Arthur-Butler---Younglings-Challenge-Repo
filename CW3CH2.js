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

if (Type == "Mode") {
  var PopCount = 0;
  var PrePopCount = 0;
  for (let i = 0; i < NumNo; i++) {
    for (let i2 = 0; i2 < NumNo; i2++) {
      if (ValArr[i] == ValArr[i2]) {
        PopCount++;
      }
    }
    if (PopCount > PrePopCount) {
      PrePopCount = PopCount;
      PopCount = 0;
      var Mode = ValArr[i];
    }
  }
  console.log(`Mode is: ${Mode}`);
}

if (Type == "Median") {
  ValArr.sort(function (a, b) {
    return a - b;
  });
  if (NumNo % 2 == 0) {
    HalfLength = Math.round(NumNo / 2 - 1);
    var Median = (ValArr[HalfLength] + ValArr[HalfLength + 1]) / 2;
  } else {
    HalfLength = Math.round(NumNo / 2 - 1);
    var Median = ValArr[HalfLength];
  }
  console.log(`Median is: ${Median}`);
}

if (Type == "Range") {
  ValArr.sort(function (a, b) {
    return a - b;
  });
  var Range = ValArr[NumNo - 1] - ValArr[0];
  console.log(`Range is: ${Range}`);
}
