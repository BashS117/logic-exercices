const options={
    method: 'GET',
    headers: {
		'x-rapidapi-key': '17644ceef5msh78f8051e8db171fp1f4b52jsncc102fc74cff',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
}

fetch('https://open-weather13.p.rapidapi.com/city/landon/EN', options)
.then(res=>res.json())
.then(response=>{
    console.log(response)
})

