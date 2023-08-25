function ordenarArreglobBurbuja(arr) {
    const n= arr.length;
    let temp;
    for (let i=0;i<n-1;i++){
        console.log(i)
        
        for(let j=0;j<n-1-i;j++){
            
            console.log("j=",j)
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp;

                
            }
            
        }
        
        
    }
    
    return arr;
}

const numeros=[64,34,25,12,22,11,90,33,45,20]

console.log(numeros.length)
console.log(ordenarArreglobBurbuja(numeros))



function mySort(arraicito){
    const n=arraicito.length;
    let temp;

    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(arraicito[j]>arraicito[j+1]){
                temp=arraicito[j];
                arraicito[j]=arraicito[j+1];
                arraicito[j+1]=temp
            }
        }
    }
    return arraicito
}

console.log("Mysort",mySort(numeros))
console.log("Sort",numeros.sort((a, b) => a - b))