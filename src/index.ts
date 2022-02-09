import  {App} from "./app"

// funcao principal
async function main(){

    //instanciar a classe App
    const app = new App(3000)

    await app.listen()
}

main();