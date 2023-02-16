function findPowerOfTwo(num) {
    let pwr = 1;
  
    while (pwr * 2 < num) {
      pwr *= 2;
    }
  
    const nearestPower = Math.abs(pwr - num) < Math.abs(pwr * 2 - num) ? pwr : pwr * 2;
  
    console.log(`The number ${nearestPower} is the power of 2 nearest to ${num}.`);
  }
  
  findPowerOfTwo(10); // The number 8 is the power of 2 nearest to 10.
  findPowerOfTwo(20); // The number 16 is the power of 2 nearest to 20.
  findPowerOfTwo(33); // The number 32 is the power of 2 nearest to 33.
  