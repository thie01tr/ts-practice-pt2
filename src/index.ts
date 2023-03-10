import Phone from "./models/Phone";

const detroitWarehouseInv: Phone[] = [
    {
      name: "iPhone SE",
      price: 399,
      fiveG: false,
    },
    {
      name: "iPhone XR",
      price: 499,
      fiveG: false,
    },
    {
      name: "iPhone 11",
      price: 599,
      fiveG: false,
    },
    {
      name: "iPhone 12 Mini",
      price: 729,
      fiveG: true,
    },
    {
      name: "iPhone 12",
      price: 829,
      fiveG: true,
    },
    {
      name: "iPhone 12 Pro",
      price: 999,
      fiveG: true,
    },
    {
      name: "iPhone 12 Max",
      price: 1099,
      fiveG: true,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
  ];
  
  export const newYorkWarehouseInv: Phone[] = [
    {
      name: "iPhone SE",
      price: 399,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a 5G",
      price: 499,
      fiveG: true,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Galaxy S10",
      price: 750,
      fiveG: false,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
  ];
  
  const chicagoWarehouseInv: Phone[] = [
    {
      name: "Galaxy S10",
      price: 750,
      fiveG: false,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "Galaxy S10+",
      price: 1500,
      fiveG: true,
    },
    {
      name: "iPhone 12",
      price: 829,
      fiveG: true,
    },
    {
      name: "iPhone 12 Pro",
      price: 999,
      fiveG: true,
    },
    {
      name: "iPhone 12 Max",
      price: 1099,
      fiveG: true,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: true,
    },
  ];
  
  const no5GWarehouseInv: Phone[] = [
    {
      name: "Galaxy S10",
      price: 750,
      fiveG: false,
    },
    {
      name: "Pixel 4a",
      price: 349,
      fiveG: false,
    },
    {
      name: "Pixel 5",
      price: 699,
      fiveG: false,
    },
  ];

  const discontedTypes:string[] = ["iPhone SE","Pixel 5"]

  const addPhone = (arr: Phone[], phone:Phone):void => {
    arr.push(phone);
  }

  
  const deletePhoneByIndex = (arr: Phone[], i:number):void => {
    arr.splice(i,1);
  }

  const deletePhoneByName = (arr: Phone[], name:string):void => {
    const i = arr.findIndex(
      (phone)=>
      {
        return phone.name === name;
      }
    );

    deletePhoneByIndex(arr,i);
  }


  const filterPhone = (arr:Phone[],filterType:string,value?:number):Phone[] => {
    const filteredArr:Phone [] = [];

    switch(filterType){
      case "5G":
        arr.forEach((phone)=>
          {
            if(phone.fiveG) addPhone(filteredArr,phone);
          }
        );
        break;

      case "<":
        if(value){
          arr.forEach((phone) =>{
            if(phone.price < value) addPhone(filteredArr,phone);
          });
          break;
        }
        
      case ">":
        if(value){
          arr.forEach((phone) =>{
            if(phone.price > value) addPhone(filteredArr,phone);
          });
          break;
        }

      default:
        console.log(value?`Filter - ${filterType} not covered.`:`Value Undefined.`);
    }

    return filteredArr;

  }

  const filter5G = (arr:Phone[]): Phone[] => {
    return filterPhone(arr,"5G");
  }

  const filterPriceLessThan = (arr:Phone[],price:number): Phone[] => {
    return filterPhone(arr,"<",price);
  }
  
  const filterPriceGreaterThan  = (arr:Phone[],price:number): Phone[] => {
    return filterPhone(arr,">",price);
  }
  const findPhoneByName = (arr:Phone[],name:string):Phone|undefined => {
    return arr.find((item) => {return item.name === name});

  }
  const calcAverageCost = (arr:Phone[]) :number =>{
    let total = 0;
    arr.forEach((item) => total+=item.price);
    return arr.length>0?(total / arr.length):-1
  }
  const doWeHaveA5GPhone = (arr:Phone[]):boolean => {
    return arr.some((item)=>{return item.fiveG})
  }
  const phoneFlashSale = (arr:Phone[], discount:number):Phone[] => {
    let newArr: Phone[] = [];
    arr.forEach((phone: Phone) => {
    let discountedPrice: number = (phone.price * discount) / 100;
    let newPhone: Phone = {
      ...phone,
      discountedPrice,
    };
    newArr.push(newPhone);
  });
  return newArr;
  }
  const phoneFlashSaleV2 = (arr:Phone[], discount:number, phoneTypes: string[]):Phone[] => {
    let newArr: Phone[] = [];
    arr.forEach((phone: Phone) => {
    if (phoneTypes.includes(phone.name)) {
      let discountedPrice: number = (phone.price * discount) / 100;
      let newPhone: Phone = {
        ...phone,
        discountedPrice,
      };
      newArr.push(newPhone);
    } else {
      newArr.push(phone);
    }
  });
  return newArr;
  }

//could be more dynamic
  const testAll = () => {
    //Add
    const newPhone:Phone = {
      name:"Test Phone",
      price:5,
      fiveG:false
    }
    
    console.log("Inital Chicago: ")
    console.log(chicagoWarehouseInv)
    console.log("\nAdd: ")
    console.log(newPhone)
    console.log("\nResult: ")
    addPhone(chicagoWarehouseInv,newPhone)
    console.log(chicagoWarehouseInv)
    console.log("\n")
    console.log("\n")
    //Delete
    console.log("Inital New York: ")
    console.log(newYorkWarehouseInv)
    console.log("\Delete By Index: ")
    console.log(3)
    console.log("\nResult: ")
    deletePhoneByIndex(newYorkWarehouseInv,3)
    console.log(newYorkWarehouseInv)

    console.log("\n")
    console.log("\n")
    console.log("Inital Detroit: ")
    console.log(detroitWarehouseInv)
    console.log("\Delete By Name: ")
    console.log("Pixel 5")
    console.log("\nResult: ")
    deletePhoneByName(detroitWarehouseInv,"Pixel 5")
    console.log(detroitWarehouseInv)
    console.log("\n")
    console.log("\n")
    //Filter
    console.log("Inital Chicago: ")
    console.log(chicagoWarehouseInv)
    console.log("\Filter 5G: ")
    console.log("\nResult: ")
    console.log(filter5G(chicagoWarehouseInv))
    console.log("\n")
    console.log("\n")
    console.log("Inital New York: ")
    console.log(newYorkWarehouseInv)
    console.log("\nFilter <: ")
    console.log(500)
    console.log("\nResult: ")
    console.log(filterPriceLessThan(newYorkWarehouseInv,500))
    console.log("\n")
    console.log("\n")
    console.log("Inital Detroit: ")
    console.log(detroitWarehouseInv)
    console.log("\nFilter >: ")
    console.log(500)
    console.log("\nResult: ")
    console.log(filterPriceGreaterThan(detroitWarehouseInv,500))
    //Find
    console.log("\n")
    console.log("\n")
    console.log("Inital Chicago: ")
    console.log(chicagoWarehouseInv)
    console.log("\nFind By Name: Test Phone")
    console.log("\nResult: ")
    console.log(findPhoneByName(chicagoWarehouseInv,"Test Phone"))
    console.log("\n")
    console.log("\n")
    console.log("Inital Chicago: ")
    console.log(chicagoWarehouseInv)
    console.log("\nFind By Name: Does Not Exist")
    console.log("\nResult: ")
    console.log(findPhoneByName(chicagoWarehouseInv,"Does Not Exist"))
    console.log("\n")
    console.log("\n")
    //Average
    console.log("\nCalc Average: ")
    console.log("Inital New York: ")
    console.log(newYorkWarehouseInv)
    console.log("\nResult: ")
    console.log(calcAverageCost(newYorkWarehouseInv))
    console.log("\n")
    console.log("\n")
    //5G Check
    console.log("\nCheck 5G: ")
    console.log("Inital Detroit: ")
    console.log(detroitWarehouseInv)
    console.log("\nResult: ")
    console.log(doWeHaveA5GPhone(detroitWarehouseInv))
    console.log("\n")
    console.log("\n")
    console.log("\nCheck 5G: ")
    console.log("Inital No 5G Warehouse: ")
    console.log(no5GWarehouseInv)
    console.log("\nResult: ")
    console.log(doWeHaveA5GPhone(no5GWarehouseInv))
    console.log("\n")
    console.log("\n")
    //Flash Sales
    console.log("Inital New York: ")
    console.log(newYorkWarehouseInv)
    console.log("\nFlash Sale v1 by 50%: ")
    console.log(50)
    console.log("\nResult: ")
    console.log(phoneFlashSale(newYorkWarehouseInv,50))
    console.log("\n")
    console.log("\n")

    console.log("Inital New York: ")
    console.log(newYorkWarehouseInv)
    console.log("\nFlash Sale v2 by 50%: ")
    console.log(50)
    console.log("\nPhone Types: ")
    console.log(discontedTypes)
    console.log("\nResult: ")
    console.log(phoneFlashSaleV2(newYorkWarehouseInv,50,discontedTypes))
    console.log("\n")
    console.log("\n")
  }

  testAll()