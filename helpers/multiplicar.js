const fs = require('fs');

const crearArchivo = async ( base = 5) => {
    try {

      let salida = '';
      for (let index = 1; index <= 10; index++) {
        
        salida +=`${ base } x ${ index } = ${ base * index}\n`;
        
      }
  
      console.log(salida);
  
      fs.writeFile( `*/salida/tabla-${base}.txt`, salida, function(err, result) {
        if(err) console.log('error', err);
      })
      return`tabla-${base}.txt creado`;

    }catch (err){
      throw err;
    }

    
    
  
}

module.exports = {
  crearArchivo
}