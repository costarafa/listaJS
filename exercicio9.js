function requisicao(){

    return new Promise((resolve, reject) => {
            let cadeiaCaracteres = 'Rafaela';
    
            if (typeof cadeiaCaracteres === 'string' ){
                setTimeout(()=>{
                    resolve(cadeiaCaracteres.toUpperCase());
                },2000)
                return                
            }
            else{
                reject('the request value is not supported');
            }
    });
}
    requisicao()
        .then(result => { console.log(result) })
        .catch(message => { console.log(message) })