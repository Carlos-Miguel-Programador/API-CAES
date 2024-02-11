fetch('http://localhost:3010/caes', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nome: "rot faile".toLocaleUpperCase(),
        imagem: "N/A"
    })
})
.then(r=>{
    return r.json()
})
.then(d=>{
    console.log(d);
})