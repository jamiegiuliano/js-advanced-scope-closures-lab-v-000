function produceDrivingRange(blockRange) {
  return function (start, end) {
    let range = parseInt(end) - parseInt(start);
    if(range > blockRange ) {
      return `${range - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - range}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (billAmount) {
    return billAmount * percentage;
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
