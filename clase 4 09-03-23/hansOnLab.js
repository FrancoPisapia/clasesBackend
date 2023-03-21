const sumar = (numero1,numero2) =>
{
    return new Promise ((resolve,reject)=>
    {

        if (numero1 === 0 || numero2 === 0)
        {
            reject('Operacion innecesaria')
        } else if (numero1+numero2 <0)
        {
            reject('La promersa solo puede dar valores positivos')
        } else 
        {
            resolve(numero1+numero2)
        }
        
    })
}


const restar = (minuendo,sustraendo) =>
{
    return new Promise ((resolve,reject)=>
    {

        if (minuendo === 0 || sustraendo=== 0)
        {
            reject('Operacion innvalida')
        } else if (minuendo-sustraendo <0)
        {
            reject('La promersa solo puede dar valores positivos')
        } else 
        {
            resolve(minuendo-sustraendo)
        }
        
    })
}

const multiplicar = (numero1,numero2) =>
{
    return new Promise ((resolve,reject)=>
    {

        if (numero1 ==0 || numero2 == 0)
        {
            reject('Ninguno de los valores puede ser 0')
        } else if (numero1*numero2 <0)
        {
            reject('La calculadora solo puede devolver valores positivos')
        } else 
        {
            resolve(numero1*numero2)
        }
        
    })
}


const dividir = (dividendo,divisor) =>
{
    return new Promise ((resolve,reject)=>
    {

        if (divisor=== 0)
        {
            reject('No se pueden hacer divisiones entre 0')
        } else  
        {
            resolve(dividendo/divisor)
        } 
        
    })
}




const calculos = async(a,b,operacion) =>
{
    try 
    {
        let resultado = await operacion(a,b,operacion)
        console.log(resultado)
    }
    catch(error)
    {
        console.log(error)
    }
}

calculos(10,0,dividir)