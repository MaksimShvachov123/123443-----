  //const maks = {}
  
  //maks.name = "Maks"
  //maks.age = 24
  //maks.height = 160
  //maks.place = "Kiyv"

//const maksKeys = Object.keys(maks)

//for(let i = 0; i < maksKeys.length; i++){
    //const key = maksKeys[i]
    //console.log(key + " = " + maks[key])
//}

// const maksCopy = Object.assign({}, maks)
// const maksCopy2 = {
//     ...maks
// }

// console.log(maks)
// console.log(maksCopy)

// maksCopy.lastName = "Shvachov"

// console.log(maks)
// console.log(maksCopy)
 
//

const dictionary = new Map()

dictionary.set("key1", {
    name: "Dad",
    phoneNUmber: "+380*********"
})

const arrayKey = [1, 2, 3]

dictionary.set(arrayKey, {
    name: "Mom",
    phoneNUmber: "+380*********"
})

console.log(dictionary)

console.log(dictionary.get("key1"))
console.log(dictionary.get(arrayKey))

console.log(dictionary.size)