let particleArray=[]
class Particle{
    constructor(){
        
        this.size=Math.random() * 5+1;
        this.speedX=Math.random() * 3-1.5;
        this.speedY=Math.random() * 3-1.5
    }
    update(){
      return {
        speedX :this.speedX,
      tspeedY :this.speedY,
      size:this.size
      }
    }
   
}

let re= new Particle();

function into(){
    for(let i=0; i<=10;i++){
        particleArray.push(new Particle())
    }
}
into()
// console.log(particleArray.length)
function handlepartical(){
    for(let i=0; i<particleArray.length; i++) {
       console.log( particleArray[i].update())
    }
}
handlepartical()

