/* Reescribir la función programa del insiso anterior para que use
async y await */
function dividirNumeros(diviendo, divisor) {
    return new Promise(function(resolve,reject){
try{
    setTimeout(() => {
    resolve(diviendo/divisor)
    }, 3000);
}catch(error){
    reject(error)}
})
}
async function programa(a,b) {
    try{
        const resolve = await dividirNumeros(a,b)
    }catch(error){
        console.log ('sorry for the inconvenience, an error occurred ' + error)
    }
}
programa(4,0);