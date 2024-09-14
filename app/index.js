// Hello, World!!

const mensagem = "Hello, world!"

{
    const mensagem = "Hello, Emily!"
    console.log(mensagem)
}

console.log(mensagem)

// Arrays

 let meta = ["Hello,","World!"]

 console.log(meta[0] + " " + meta[1])

// Objeto

let metas = {
    value: "Hello, World!",
    checked: false,
    isChecked: (info) =>{
        console.log(info)
    }
}

metas.isChecked(metas.value)

// Function // Arrow Function

const criarMetas = () =>{}