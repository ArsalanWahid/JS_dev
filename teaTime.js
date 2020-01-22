// This is just a fun program that I made to show my friend huzaifa , how flow charts work
// and how to convert that flowchart logic to a program to open his mind and to 
// thinking logically

let kettle = true
let cup = true
let sugar = false
let milk = true
let tea = true
let addWater = false

class Kettle {
  
  waterLevel = 0
  water = false
  
  waterBoiled = false
  
  minWaterLevel = 100
  maxWaterLevel = 1000

  boilWater() {
    setTimeout(()=> {
      this.waterBoiled = true
    },.100 * this.waterLevel)
  }

  addWater(amount){
    if(this.water < this.maxWaterLevel && amount <= this.maxWaterLevel && amount >= this.minWaterLevel){
      this.water += amount
      console.log('added water to kettle')
    }else{
      console.log('water level is not right')
    }
  }

  pourTea() { 
    if(kettle.water - 250 == kettle.water >= 0)
    return kettle.water - 250
  }

}

kettle = new Kettle()



function makeTea() {
  if(kettle) {
    console.log(kettle.water)
    if(kettle.water >= kettle.minWaterLevel){
        console.log('kettle has water')
        if(tea && cup){
          console.log('adding tea leaves to water')
          kettle.boilWater()
          console.log("adding tea to cup")
          if(sugar && milk) {
            console.log('sugar and milk added')
            console.log('Tea made ')
          }else{
            console.log('enjoy black tea without sugar')
          }
        }else{
          console.log('get some tea and cup')
          tea = false
          cup = false
        }
    }
    else{
      console.log("Add water to kettle")
      return addWater = true
    }
  }else{
    console.log('no cup kettle ')
  }

}


makeTea()
if(addWater){
  kettle.addWater(100)
  makeTea()
}
