function processOrder(order) {
  // declare items as object to total mains/sides/drinks/desserts
  let items = {};
  // split meal from items ordered
  let processedOrder = order.split(" ");
  //Check to make sure item ids are passed
  if (processedOrder.length != 2) {
    return "Invalid input";
  }
  //declare meal type
  const meal = processedOrder[0].toLowerCase();
  //seperate items and count them in items object
  processedOrder = processedOrder[1].split(",");
  processedOrder.forEach((item) => {
    items[item] = (items[item] || 0) + 1;
  });
  //Check to see if Main and Side are missing and just a meal is passed
  if (!items["1"] && !items["2"]) {
    return "Unable to process. Main is missing. Side is missing";
  }
  //Check if there is more than one main ordered
  if (items["1"] > 1) {
    switch (meal) {
      case "breakfast":
        return "Unable to process. Eggs can not be ordered more than once";
      case "lunch":
        return "Unable to process. Sandwich can not be ordered more than once";
      case "dinner":
        return "Unable to process. Steak can not be ordered more than once";
    }
  }
  //Check if more than 1 side is ordered for breakfast or dinner
  if (items["2"] > 1 && meal != "lunch") {
    return "Unable to process. Can only order one side";
  }
  //Check which meal function to call
  switch (meal) {
    case "breakfast":
      return breakfastOrder(items);
    case "lunch":
      return lunchOrder(items);
    case "dinner":
      return dinnerOrder(items);
    //Check to see if a nonstandard meal name is passed
    default:
      return "Invalid meal type";
  }
}

function breakfastOrder(items) {
  let reciept = "";
  //look up table for breakfast
  let breakfastMenuItems = {
    1: "Eggs",
    2: "Toast",
    3: "Coffee",
  };
  //Create reciept output for breakfast
  if (items["1"] > 1) {
    reciept += `${breakfastMenuItems["1"]}(${items["1"]}) `;
  } else {
    reciept += `${breakfastMenuItems["1"]} `;
  }
  if (items["2"] > 1) {
    reciept += `${breakfastMenuItems["2"]}(${items["2"]}) `;
  } else {
    reciept += `${breakfastMenuItems["2"]} `;
  }
  if (items["3"] > 1) {
    reciept += `${breakfastMenuItems["3"]}(${items["3"]})`;
  } else if (items["3"] === 1) {
    reciept += `${breakfastMenuItems["3"]}`;
  } else {
    reciept += "Water";
  }
  return reciept;
}

function lunchOrder(items) {
  let reciept = "";
  //look up table for lunch
  let lunchMenuItems = {
    1: "Sandwich",
    2: "Chips",
    3: "Soda",
  };
  //Create reciept output for lunch
  if (items["1"] > 1) {
    reciept += `${lunchMenuItems["1"]}(${items["1"]}) `;
  } else {
    reciept += `${lunchMenuItems["1"]} `;
  }
  if (items["2"] > 1) {
    reciept += `${lunchMenuItems["2"]}(${items["2"]}) `;
  } else {
    reciept += `${lunchMenuItems["2"]} `;
  }
  if (items["3"] > 1) {
    reciept += `${lunchMenuItems["3"]}(${items["3"]})`;
  } else if (items["3"] === 1) {
    reciept += `${lunchMenuItems["3"]}`;
  } else {
    reciept += "Water";
  }
  return reciept;
}
function dinnerOrder(items) {
  let reciept = "";
  //Look up table for dinner
  let dinnerMenuItems = {
    1: "Steak",
    2: "Potatoes",
    3: "Wine",
    4: "Cake",
  };
  //Create reciept output for dinner
  if (items["1"] > 1) {
    reciept += `${dinnerMenuItems["1"]}(${items["1"]}) `;
  } else {
    reciept += `${dinnerMenuItems["1"]} `;
  }
  if (items["2"] > 1) {
    reciept += `${dinnerMenuItems["2"]}(${items["2"]}) `;
  } else {
    reciept += `${dinnerMenuItems["2"]} `;
  }
  if (items["3"] > 1) {
    reciept += `${dinnerMenuItems["3"]}(${items["3"]}) Water(${items["3"]}) `;
  } else if (items["3"] === 1) {
    reciept += `${dinnerMenuItems["3"]} Water `;
  } else {
    reciept += "Water ";
  }
  if (items["4"] > 1) {
    reciept += `${dinnerMenuItems["4"]}(${items["4"]}) `;
  } else if (!items["4"]) {
    return "Unable to process. Dessert is missing";
  } else {
    reciept += `${dinnerMenuItems["4"]}`;
  }
  console.log(reciept);
  return reciept;
}

//Expor modules for jest
module.exports = {
  processOrder,
  breakfastOrder,
  lunchOrder,
  dinnerOrder,
};
