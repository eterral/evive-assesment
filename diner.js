import readlineSync from "readline-sync";

// function getInput(prompt) {
//   return readlineSync.question(`${prompt}: `);
// }

// function greet() {
//   let meal = getInput(
//     "Welcome to the diner, Do you want Breakfast, Lunch, or Dinner?"
//   );
//   if (meal.toLowerCase() === "breakfast") {
//     breakfast();
//   } else if (meal.toLowerCase() === "lunch") {
//     lunch();
//   } else if (meal.toLocaleLowerCase === "dinner") {
//     dinner();
//   } else {
//     console.log("Please enter either Breakfast, Lunch, or Dinner");
//     greet();
//   }
// }

// greet();

function order() {
  let order = readlineSync.question(`Enter you order: `);
  let reciept = "";
  let items = {};
  order = order.split(" ");
  const meal = order[0];
  order = order[1].split(",");
  order.forEach((item) => {
    items[item] = (items[item] || 0) + 1;
  });
  console.log(items);
  if (!order) {
    return "Unable to process. Main is missing. Side is missing";
  }
  // if (meal.toLocaleLowerCase() === "breakfast") {
  //   if (order[0] === "1" && meal.toLocaleLowerCase() === "breakfast") {
  //     reciept = reciept + "Eggs ";
  //     order.shift();
  //     if (order[0] === "1") {
  //       return console.log("Unable to process. You can only order one main");
  //     }
  //   } else if (order[0] === "1" && meal.toLocaleLowerCase() === "lunch") {
  //     reciept = reciept + "Sandwhich ";
  //     order.shift();
  //     if (order[0] === "1") {
  //       return console.log("Unable to process. You can only order one main");
  //     }
  //   } else if (order[0] === "1" && meal.toLocaleLowerCase() === "dinner") {
  //     reciept = reciept + "Steak ";
  //   }
  //   else {
  //     return console.log("Unable to process. You must order a main.");
  //   }
  //   order.shift();
  //   if (order[0] === "1") {
  //     return console.log("Unable to process. You can only order one main");
  //   }
  //   if (order[0] === "2") {
  //     reciept = reciept + "Toast ";
  //     order.shift();
  //   } else {
  //     return console.log("Unable to process. You must order a side");
  //   }
  //   let drinks = 0;
  //   order.forEach((drink) => {
  //     drinks++;
  //   });
  //   reciept = reciept + `Coffee(${drinks})`;
  // }
  // console.log(reciept);
  // return reciept;
}

order();
