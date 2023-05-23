// // function sayHellow (name, surnName, age) {
// //     const text = 'hello' + " "  + name +" " + surnName + ", Happy Birthday" + " " + age;
// //    return text
// // }
// // console.log(sayHellow('Grzegoż', 'Twardowski', '42'));









// // 1. define a global variable named "count" and assign 0 as a value
// // let count = 0;

// // /*
// //  2.
// //  add an action to the "add" button which will add a <div class="element">
// //  to the bottom of the "elements" section,
// //  and then will put a number inside it (the 'count' variable);
// //  after that the 'count' variable should be increased by 1
// //  */
// // const addButton = document.querySelector('.add');
// // addButton.addEventListener('click', addElement);
// // function addElement() {
// //   const elementHtml = '<div class="element"> '+ count +'</div>';
// //   const Elementwrapper = document.querySelector('.elements');
// //   Elementwrapper.innerHTML = Elementwrapper.innerHTML + elementHtml;
// //   count = count + 1;
// // }

// /*
//  3.
//  add an action to the "remove" button which will remove
//  the very top <div class="element"> from the "elements" section;
//  the 'count' variable should NOT change!
//  */


// /*
//  4.
//  go back to your functions that add/remove elements and extend them
//  with a functionality of displaying a <div class="info"> in the "output" section;
//  the div's text should say what just happened
//  (e.g. "adding element 3", "removing element 0")
//  */


// /*
//  5.
//  go back to your functions that removes elements and extend it
//  with a functionality of displaying a <div class="error"> in the "output" section;
//  saying "There is nothing to remove!"
//  */




// class Client {
//   constructor (name, cash) {
//     this.name=name;
//     this.cash=cash;
//     this.shopping=[];
//   }

//   summary() {
//     console.log('client: ' + this.name);
//     console.log(this.shopping);
//     console.log('cash: ' + this.cash);
//   }

//   buy(prodact, cound, price) {
//     for (let i=1; i<=cound; i++) {
//         this.shopping.push(prodact)
//         this.cash -=price
//     }
//   }
// }

// const Adam=new Client ('Adam', 123); 
// const Greg=new Client ('Greg', 100); 

// Adam.buy("bułka", 3, 2)
// Greg.buy("chleb", 1, 3.50)
// Adam.buy("mleko", 2, 3.20)
// Greg.buy("mleko", 1, 3.50)


// Adam.summary();
// Greg.summary();


// class Animal  {
//     constructor (name, liczbanóg) {
//       this.name=name;
//       this.liczbanóg=liczbanóg;
//     }
  
//     dajgłos() {
//       console.log('dźwięk zwierzęcia nieznany');
//     }
  
//     idź() {
//       if (this.liczbanóg >= 2)
//         console.log(this.name + ' idzie');
//       else 
//         console.log(this.name + ' nie może iść');
//     }
//   }
  
//   const rybka=new Animal ('rybka zwana Wandą', 0 );
  
//   rybka.dajgłos();
//   rybka.idź();
  
  
//   class Dog extends Animal {
//     constructor (name) {
//       super(name, 4)
//     }
//     dajgłos() {
//       console.log("hał hał");
//     }
   
//   }
//   const Spike=new Dog ('Spike');
  
//   Spike.dajgłos();
//   Spike.idź();
  
  
  
  
//   class Stonoga extends Animal {
  
//     // idź() {
//     //   console.log (this.name + " poplątała nogi");
//     // }
  
  
//   }
  
  
//   const Mike=new Stonoga ("Mike", 100);
  
//   Mike.dajgłos()
//   Mike.idź()