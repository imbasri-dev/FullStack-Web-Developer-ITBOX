// Promise
// function cbPromise(resolve,reject) {
//       try {
//          resolve("fullfield");
//       } catch (err) {
//          reject(err);
//       }
// }

// let janji = new Promise(cbPromise)
// console.log(janji)
// janji.then(result=>{
// console.log(result)
// }).catch(err=>{
//     console.log(err)
// })

function janjiManis() {
        return new Promise((resolve,reject)=>{
            try {
                resolve("Janji Manis")
            } catch (err) {
                reject(err)
            }
        })
}
janjiManis().then(result=>{
    console.log(result)
}).catch(reject=>[
    reject(err)
])
console.log(janjiManis())