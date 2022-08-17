//Determine how long it takes to mix a juice


function TimeToMixJuse(name) {

  let time;
  switch (name) {
    case 'Pure Strawberry Joy':
      time = .5;
      break;
    case "Energizer":
      time = 1.5
      break;
    case "Green Garder":
      time = 1.5
      break;

    case "Tropical Island":
      time = 3
      break;

    case "All or Nothing":
      time = 5
      break;
    default:
      time = 2.5

  }
  return time

}


TimeToMixJuse('Energizer')



//////////////Replenish the lime wedge supply


function limesToCut(numberoflime, lime) {


  let allitemofarray = []
  for (var i = 0; i < lime.length; i++) {

    let wedges = 0;
    switch (lime[i]) {
      case 'small':
        wedges = 6

        break;

      case "medium":
        wedges = 8
        break;
      case 'large':
        wedges = 10
        break;

    }

    allitemofarray.push(wedges)

  }

  let allitemofnumber = 0;
  let item = 0

  while (allitemofnumber < numberoflime) {

    allitemofnumber += allitemofarray[item]

    if (item < allitemofarray.length) {

      item++
    }
  }

  return item
}

  limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])


//Finish up the shift
function remainingOrders(time, itemofjuse){


  let alljusemakingtimearray =[]

  for (let i = 0; i < itemofjuse.length; i++) {


    let time=0
    switch (itemofjuse[i]) {
      case 'Pure Strawberry Joy':
        time = .5;
        break;
      case "Energizer":
        time = 1.5
        break;
      case "Green Garden":
        time = 1.5
        break;
  
      case "Tropical Island":
        time = 3
        break;
  
      case "All or Nothing":
        time = 5
        break;
      default:
        time = 2.5
  
    }

    alljusemakingtimearray.push(time);

  }
  
  let item=0;
  let hendeltime=0;
  while(hendeltime <time){
    
    hendeltime +=alljusemakingtimearray[item];

    item++

  }

  const result=itemofjuse.slice(item,itemofjuse.length)
 console.log(result);
}


  remainingOrders(10, ['Energizer', 'All or Nothing', 'Green Garden']);