
let  height = [1,8,6,2,5,4,8,3,7]

function waterContainer(height){
   let totalcount=0;
for(let i=0;i<height.length;i++){
    for(let j=i+1;j<=height.length-1;j++){
      let heightlavle=Math.min(height[i],height[j]);
      
   //   if(height[i]>height[j]){
   //         heightlavle=height[j]
   //   }else{
   //    heightlavle=height[i]
   //   }
   //   let heighti=height[i]
   //   let heightj=height[j]
   //   console.log({heighti,heightj,heightlavle})
   let width=j-i
   let currentWater=width* heightlavle
   // console.log({currentWater})
   // if(currentWater>totalcount){
   //    totalcount=currentWater
   // }
   totalcount=Math.max(currentWater ,totalcount)
    }
}
console.log(totalcount)
}
waterContainer(height)