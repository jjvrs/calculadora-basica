







const sumar = ()=>{

const n1 = parseInt( document.querySelector('#n1').value);
const n2 = parseInt( document.querySelector('#n2').value);
if ( n1 < 0 && n2 < 0 ) {
 console.log(`estos numeros ${n1} y ${n2}no son permitidos`);   
}else{

    const res = n1+n2;
console.log("el resultado de la suma es =",res);
}




}

