// const point =[39,50,60,30,40]

// point.sort((a,b)=>{

//     return a-b
// })
// console.log(point)

const points = [40, 100, 1, 5, 25, 10];


function sort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0; j<arr.length -i  -1;j++){
     console.log(arr  ,arr[j],arr[j+1])
      if(arr[j]>arr[j+1]){
      let tram= arr[j]
      arr[j]=arr[j+1];
      arr[j+1]=tram
      }
    }
  }
  console.log(arr)
}


sort(points)