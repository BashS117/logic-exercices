function findDuplicates(arr){
    const duplicates=[];
    const seenNumbers={};

    for(const num of arr){
        if(seenNumbers[num]){
            if(!duplicates.includes(num)){
                duplicates.push(num);
            }

        }else{
            seenNumbers[num]=true;
        }
    }
    return duplicates;
}

console.log(findDuplicates([1,2,2,1,4,4,5,6,7,8,8]));