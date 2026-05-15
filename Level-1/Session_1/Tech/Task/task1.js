
/* 
    كان يا مكان في قديم الزمان كان شاب اسمه خالد ..الشب خالد ها ها ها .. احم انا اسف خالد كان بيحاول يصرف على نفسه 
    بعد ما اكتشف ان حاسبات مش جايبة همها و اشتغل كطيار ..... طيار بيتزا  و في يوم خالد قرر انه يتطور باستخدام 
    اللي اتعلمه في الجامعة يا ترا عمل كدا ازاي ؟ و هل فعلا قدر يعمل حاجة مفيدة ؟

    عامة عايز اوجه رسالة للفيب عبدالله اسامة ان البطيخ عم اي فاكهة و ممكن اللي تسويها هي المانجا بس
     ..... و عايزك تيجيلي جيم شطرنج
*/

//* Task 1
let studentName = "Ahmed"
const pizzaFlavor = "pepperoni"

//* Task 2
let hungerLevel = 10
let isPizzaHot = true
let deliveryAddress = "Shbein Al-qanater"

console.log("Data type of (hungerLevel) is: ",typeof hungerLevel);
console.log("Data type of (isPizzaHot) is: ",typeof isPizzaHot);
console.log("Data type of (deliveryAddress) is: ",typeof deliveryAddress);

//* Task 3
console.log("Final bill: ",Number("85") + 15 + true);

//* Task 4
let pizzaCost = 85
let tip = 15

let totalBill = pizzaCost + tip
let minutesWaiting = 45 + 15

function useless (){
  
  console.log("is minutes waiting even: ", minutesWaiting % 2 === 0)

}

useless()

//* Task 5
console.log(2 + 3 * 4 - 1) //13
console.log((2 + 3) * (4 - 1)) //15

//* Task 6 
if(isPizzaHot && hungerLevel>7){

  console.log("OPEN THE DOOR AND SPRINT");
  
}
else if(hungerLevel >= 5 && hungerLevel <= 7){

  console.log("Walk, you have dignity")

}
else{

  console.log("Order WATERMELON next time");

}

//* Task 7
console.log(hungerLevel > 5)// when I print an expression like that it will print the result of that expression for ex. [( 5 == '5') => true] / [( 5 === '5') => false].

if (hungerLevel > 5) // On the other hand if statements will chose an action depends on the condition in (IF) part
{

  console.log("I hate python")

}
else{

  console.log("Hmmm.... I still hate python , a3r a3r a3r a3r")

}

//* Task 8
console.log(pizzaFlavor.toUpperCase())
console.log(pizzaFlavor.length)
console.log(pizzaFlavor.includes("pepper"))

//* Task 9 
console.log(`the student name is: ${studentName} 
The pizza flavor is: ${pizzaFlavor} 
the total bill is: ${totalBill} 
minutes to wait: ${minutesWaiting}`)

//* Task 10 
let toppings = ["cheese","tuna","manga"]
let order = {
      
  customer: " El 7ag 3bdel ghafor el bura3y " , 
  flavor: " Kushary ",
  isDelivered: false

}


//*Task 11
//* Ahshek el gambary
function calculateTotalRegular(price,tip){
  
  return (price + tip)
  
}

const calculateTotalArrow = (price,tip) => {return(price + tip)}

console.log(calculateTotalRegular(pizzaCost , tip))
console.log(calculateTotalArrow(pizzaCost , tip))

//*Task 12 

let stops = ["Ahmed" , "Sara" , "Mona" , "Tarek" ]

for (let i  = 0 ; i < stops.length ; i++){

  console.log(`Delivering to ${stops[i]}`)
  
  if(stops[i] === "Ahmed")
    break
}
console.log(order.isDelivered)
order.isDelivered = true;
console.log(order.isDelivered)

//*Task 13