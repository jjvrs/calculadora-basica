







const sumar = ()=>{

const n1 = parseInt( document.querySelector('#n1').value);
const n2 = parseInt( document.querySelector('#n2').value);

    const sumar = (n1 + n2);
    alert(`el resultado de la suma es = ${sumar}`);
console.log("el resultado de la suma es =",sumar);
}



const restar = ()=>{

    const n1 = parseInt( document.querySelector('#n1').value);
    const n2 = parseInt( document.querySelector('#n2').value);
    
    
        const res = (n1 - n2);
        alert(`el resultado de la restar es = ${res}`);
    console.log("el resultado de la restar es =",res);
    }


const multi = ()=>{

    const n1 = parseInt( document.querySelector('#n1').value);
    const n2 = parseInt( document.querySelector('#n2').value);
        
        const res = (n1 * n2);
        alert(`el resultado de la multiplicacion es = ${res}`);
    console.log("el resultado de la multiplicacion es =",res);
    }

const dividir = ()=>{

    const n1 = parseInt( document.querySelector('#n1').value);
    const n2 = parseInt( document.querySelector('#n2').value);
            
        const res = (n1 / n2);
        alert(`el resultado de la division es = ${res}`);
    console.log("el resultado de la division es =",res);
    }