const app = new Vue({
    el:'.app',
    data: {
        titulo: 'Cuadro Magico',
        numeros: [0],
        tamaño: '',
        integrantes: [
            'Adolfo Esteban Alvarez Pacheco',
            'Esteban Emmanuel Brito Borges',
            'Fernando Angel Adrian Herrera Garnica',
            'Paul Alexander Mena Zapata',
            'Raul Armin Novelo Cruz'
        ],
        logo: 'http://www.itmerida.mx/imagenes/tec.png'
    },
    methods: {
        obtenerCuadro: function(){
            let nuevoArray = new Array(parseInt(this.tamaño));
            let dimension = parseInt(this.tamaño)
            for(let fila = 0; fila< dimension; fila++){
                nuevoArray[fila] = new Array(parseInt(dimension))
                for(let columna = 0; columna < dimension; columna++){
                    nuevoArray[fila][columna] = 0
                }
            }
            let i = 0, j = (dimension/2)-.5, contador = 1, x = dimension * dimension
            nuevoArray[i][j] = 1
            while(contador < x){
                if((i-1)>=0){
                    
                    if((j+1)<(dimension)){
                        if(nuevoArray[i-1][j+1]===0){
                            i-=1
                            j+=1
                            contador +=1
                            nuevoArray[i][j]=contador
                            this.numeros = nuevoArray
                        }else{
                            i+=1
                            contador += 1
                            nuevoArray[i][j] = contador
                            this.numeros = nuevoArray
                        }
                    }else{
                        if(nuevoArray[i-1][0]===0){
                            i -= 1
                            j = 0
                            contador += 1
                            nuevoArray[i][j] = contador
                            this.numeros = nuevoArray
                        }else{
                            i += 1
                            contador += 1
                            nuevoArray[i][j] = contador
                            this.numeros = nuevoArray
                        }
                    }

                } else {
                    if((j+1)<(dimension)){
                        if(nuevoArray[dimension-1][j+1] === 0){
                            i = dimension -1
                            j += 1
                            contador += 1
                            nuevoArray[i][j] = contador
                            this.numeros = nuevoArray
                        }else{
                            i += 1
                            contador += 1
                            nuevoArray[i][j] = contador
                            this.numeros = nuevoArray
                        }
                    }else{
                        i += 1
                        contador += 1
                        nuevoArray[i][j] = contador
                        this.numeros = nuevoArray
                    }
                }
                
            }
            
        }
        
    }

})