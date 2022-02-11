class Counter {
  constructor(runEveryFive) {
    this.counter=0;
    this.callback = runEveryFive;
  }
  
  increase(callback) {
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0 ){
      this.callback && this.callback(this.counter);
    }
  }
}

function DoTestLog(num) {
  console.log(`DoTest number is ${num}`);
}

const coolCounter = new Counter(DoTestLog);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
