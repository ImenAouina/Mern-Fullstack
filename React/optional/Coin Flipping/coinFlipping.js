
function tossCoin() {
return Math.random() > 0.5 ? "heads" : "tails";
}
 function fiveHeads() {
	 let headsCount = 0;
     let attempts = 0;
	 let maxAttempts = 100;
  return new Promise( (resolve, reject) => {
  // your code here!
  while (headsCount < 5) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    if (attempts <= maxAttempts) {
      resolve(`It took ${attempts} tries to flip five "heads"`);
    } else {
      reject("Coin has been flipped more than 100 times");
    }
  });
}

fiveHeads()
.then( res => console.log(res) )
.catch( err => console.log(err) );
console.log( "When does this run now?" );

