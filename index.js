function produceDrivingRange(blockRange) {
  return function(firstBlock, lastBlock) {
    let start = parseInt(firstBlock);
    let end = parseInt(lastBlock);
     let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;
     if (difference > 0) {
      return `within range by ${difference}`;
    }
    return `${Math.abs(difference)} blocks out of range`;
  };
}
 function produceTipCalculator(tipPercentage) {
  return function(price) {
    return price * tipPercentage;
  };
}
 function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}