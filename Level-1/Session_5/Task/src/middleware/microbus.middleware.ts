import { Request, NextFunction , Response } from 'express'

export function validation(req:Request, res:Response, next:NextFunction):void{

    const  {driverName, route, farePerSeat, seatsAvailable} = req.body.bus
    let isUpdate = req.method === "PUT"

    if(!isUpdate){

        if(driverName === undefined){
            
            res.status(404).send("driverName is not exist")
            return
        }
        if(route === undefined){
            
            res.status(404).send("route is not exist")
            return
        }
        if(farePerSeat === undefined){
            
            res.status(404).send("fare Per Seat is not available")
            return 
        }
        if(seatsAvailable === undefined){
            
            res.status(404).send("number of seats available are missed")
            return
        }
    }

    if(farePerSeat !== undefined && (typeof farePerSeat !== "number" || farePerSeat < 0)){
        res.status(400).send("fare per seat must be a positive number")
        return
    }
    if(driverName !== undefined && typeof farePerSeat !== "string" ){
        res.status(400).send("driverName must be a string")
        return
    }
    if(route !== undefined && typeof route !== "string" ){
        res.status(400).send("route must be a string")
        return
    }
    if(farePerSeat !== undefined && (typeof farePerSeat !== "number" || farePerSeat < 0)){
        res.status(400).send("fare per seat must be a positive number")
        return
    }

    next()
}