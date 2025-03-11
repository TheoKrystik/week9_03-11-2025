fact.textContent = "Loading..."
fetch("https://catfact.ninja/fact").then(Response => Response.json()).then(data => {
    console.log(data)
    console.log(data.fact)
    fact.textContent = data.fact 
})
//get a random cat img
fetch("https://cataas.com/cat?type=medium&json=true").then(Response => Response.json()).then(date => {
    console.log(data.url)
    catimage.src = data.url
})