const PrimeraPromesa = new Promesa ((resolve, reject)=> {
    reject(new Error('Error'))
})

function onSuccess(returnValue){
console.log('Exitoso:', returnValue)
}
function onFailure(error){
    console.log('Fallido', error)
    }

PrimeraPromesa.then(onSuccess,onFailure)