
///object constoctor


function clinet(name,balace) {

    this.name = name;
    this.balace = balace;

    this.mambership= function(){

        let name;
        if(this.balace > 3000){
            name="gold"
        }
       
        else if (this.balace >1000) {
            
            name="black"
        }
        else{
            name ="normal"
        }
        return name;
    }


}


const result =new clinet("sohel",1000)

const result2 =new clinet("sohel",2000)

console.log(result2.mambership())