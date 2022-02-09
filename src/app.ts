import express, { Application } from "express";
import morgan from "morgan"
const app = express()

// routes

import indexRoutes from "./routes/index.routes"
import postsRoutes from "./routes/posts.routes"
//criar e exportar uma classe App 
export class App{

    /*
    iniciar a propriedade(app) de classe como Application importado no express
    */
    private app: Application;


    //construtor para construir o meu app tendo como parametro o valor de da porta que 
    // pode ser um numero ou string

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        

    }

    settings(){
        /* se o numero de porta nao for passado no parametro, o sistema ira recuperar
        a propriedade passada no metodo settings */
        this.app.set("port", this.port || process.env.PORT ||3000)
    }


    middlewares(){
        this.app.use(morgan("dev"));
        this.app.use(express.json())
    }


    routes(){
        this.app.use(indexRoutes);
        this.app.use("/posts", postsRoutes)
    }

    // Metodo listem será asincrono

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Servidor a funcionar na porta", this.app.get("port"))
     }
 

    //  este metodo tambem funciona
    //async listen(){
    //    await this.app.listen(this.port);
    //    console.log("Servidor a funcionar na porta", this.port)
    // }



}