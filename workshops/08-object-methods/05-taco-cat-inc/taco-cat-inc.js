let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
// console.log(Object.values(tacoCatInc)[0])
// for(key in Object.values(tacoCatInc)[0]){
//   console.log(Object.values(tacoCatInc)[0][key].cost)
//   break;
// }
tacoCatInc.currentInventory = function(){
  let total = 0;
  Object.values(this).forEach(element => {
    for(key in element){
      total += element[key].cost * element[key].quantity;
    }
  })
  // return total;
  if(this.cash !== 0 ){
    return total;
  }
  total += this.cash;
  return total;
}

tacoCatInc.sale = function(order){
  let finalcost = 0
  for (keys in order) {
      tacoCatInc[keys][order[keys]]['quantity']--
      let items = tacoCatInc[keys][order[keys]]
      finalcost = finalcost + items['cost']
  }
  this.cash = this.cash + finalcost
  return finalcost
}


// Need to recheck; why it is not working
// tacoCatInc.sale = function(orderObj){
//   let retVal =0;
//   let orderKeyArr = Object.keys(orderObj);
//   let orderValArr = Object.values(orderObj);

//   orderKeyArr.forEach(orderKey => {
//     for(orderKey in tacoCatInc){
//       for(let i=0; i<orderValArr.length; i++){
//         retVal += tacoCatInc[orderKey][orderValArr[i]].cost;
//       }
//     }
//   })

//   return retVal;

// }

// let order = {
//   gourmetShell: 'hard treat shell',
//   gourmetFishFilling: 'salmon'
// }

// console.log(tacoCatInc.sale(order));




