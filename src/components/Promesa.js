const PrimeraPromesa = new Promise ((resolve, reject)=> {
    reject(new Error('Error'))
})

function onSuccess(returnValue){
console.log('Exitoso:', returnValue)
}
function onFailure(error){
    console.log('Fallido', error)
    }

PrimeraPromesa.then(onSuccess,onFailure)