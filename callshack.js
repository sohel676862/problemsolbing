const takeshower=()=>{
     console.log("take shower")
    return "take shower"
}

const takebreakfast=()=>{

    let male=cookmail()
    console.log(male)
    return `eaing ${male}`;

}

const cookmail=()=>{

    const item=["apple","mabgo","orange"]
    return item[Math.floor(Math.random() *item.length)];

}

const weekupdate=()=>{
   
    takeshower();
    takebreakfast();
    console.log("day is start")
}

weekupdate();