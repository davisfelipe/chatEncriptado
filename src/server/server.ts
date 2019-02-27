import express = require('express')

export default class Server{
    public app : express.Application

    constructor(private port:number){
        this.app=express()
    }
    start(callback?: Function){
        this.app.listen(this.port,callback)
        this.app.use(express.static('public'))
    }
    static init(port : number) :Server{
        return new Server(port)
    }
}