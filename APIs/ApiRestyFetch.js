const options={
    method:"GET",
    headers:{
        'X-RapidAPI-key': sumOfDoubledElements,
        'X-RapidAPI-Host ': sumOfDoubledElements,
    }
}

fetch("https://kogezxjfuixqqiarnnxo.supabase.co/rest/v1/Questions?select=*", options)
.then(res=>res.json())
.then(response=>{
    console.log(response)
})

//

fetch("https://kogezxjfuixqqiarnnxo.supabase.co/rest/v1/Questions?select=*",options)
.then(res=>res.json())
.then(res=>{
    console.log(response)
})