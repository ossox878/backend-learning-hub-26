// //* PART 1 ======================================================================================================================
function cookRice() {
  console.log("rice starting...");

  for (let i = 0; i < 100000000; i++) {}

  console.log("Rice done!");
}

function cookRiceAcync() {
  console.log("rice starting...");

  setTimeout(() => {
    console.log("Rice done!");
  }, 1000);
}

cookRice();
console.log("Am Farouk yells at the next customer");

cookRiceAcync();
console.log("Am Farouk yells at the next customer");

// cookRice() : makes am farouk freezed because it is synchronous function so it runs block by block so am farouk will wait till
// finish to start yelling

// cookRiceAcync() : it uses setTimeout() to print ("Rice done!") and it is an asynchronous function so when it is being compiled
// other instruction will be compiled too and its result will be shown at the end of the program so that what makes am farouk keep
// yelling immediately

// //* PART 2 ===========================================================================================================================

function orderRice(callback: (msg: string) => void) {
  console.log("calling the rice supplier....");
  let msg: string = "Rice delivered!";

  setTimeout(() => {
    callback(msg);
  }, 1000);
}

orderRice((message) => {
  console.log(message);
});
console.log("Am Farouk keeps serving customers while waiting");

//* PART 3 =============================================================================================================================
let koshariOrder = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Order ready! 🍝");
  }, 2000);
});

koshariOrder
.then((msg) => console.log(msg))
.catch((err) => console.log(err));

let sauceOrder = new Promise((resolve, reject) => {
  reject("We are out of da2a !");
});

sauceOrder
.then()
.catch((err) => console.log(err));

//* PART 4 =========================================================================================================================

function getRice(): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("Rice ready");
  });
}

function getChickpeas(rice: string): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("Chickpeas ready, rice was: " + rice);
  });
}

function getSauce(chickpeas: string): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("Sauce added, previous: " + chickpeas)
  })
}

getRice()
  .then(rice => getChickpeas(rice))
  .then(chickpeas => getSauce(chickpeas))
  .then(finalOrder => console.log(finalOrder))

  //* PART 5 ====================================================================================================================================

   async function makeKoshari(){

    try{
      const rice = await getRice()
      const chickpeas = await getChickpeas(rice)
      const finalOrder = await getSauce(chickpeas)
      console.log(finalOrder)
    }
    catch(err){
      console.log(err)
    }
   }