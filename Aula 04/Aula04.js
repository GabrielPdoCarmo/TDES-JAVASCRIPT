const {join} = require("path")
//import path from "path"

const imgSrc = join("./images", "/group/teste.png")
console.log(imgSrc)
console.log(join(__dirname, "./images","/group/teste.png"))

const pessoa = {
    nome: "Igor"
}

