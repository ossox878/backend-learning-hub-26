import { Request, response, Response } from 'express'
import {fleet} from "../data/data"
import {Microbus} from "../data/types"



export function getFleets (req:Request, res:Response):void {

    res.status(200).send(fleet)
}
export function getFleetByID (req:Request , res:Response):void {

    const requiredBusIndex = fleet.findIndex((bus) => {return (bus.id ===  Number(req.params.id))})

    if(requiredBusIndex === -1){
        
        res.status(404).send("Am Ashraf doesn't run that one")
        return
    }
    res.status(200).send(fleet[requiredBusIndex])

}
export function addFleet(req:Request, res:Response):void {

    const  {driverName, route, farePerSeat, seatsAvailable} = req.body.bus

    const newBus:Microbus = {id : fleet.length +1,driverName, route, farePerSeat, seatsAvailable, ratings:[]}
    
    fleet.push(newBus)
    res.status(200).send(`new bus is add now there are ${fleet.length} buses in the station!`)
}
export function editFleet(req:Request, res:Response):void {

    const requiredBusIndex = fleet.findIndex((bus) => {return (bus.id ===  Number(req.params.id))})

    if(requiredBusIndex === -1){

        res.status(404).send("bus with this id is not found")
        return
    }

    fleet[requiredBusIndex] = {...fleet[requiredBusIndex],...req.body.bus}
    res.status(200).send(`bus with id ${fleet[requiredBusIndex]?.id} is modified`)
}
export function deleteFleet(req:Request, res:Response):void{

    const requiredBusIndex = fleet.findIndex((bus) => {return (bus.id ===  Number(req.params.id))})

    if(requiredBusIndex === -1){

        res.status(404).send("bus with this id is not found")
        return
    }

    fleet.splice(requiredBusIndex,1)
    res.status(200).send("Bus is deleted")

}
export function maxFare(req:Request, res:Response):void{

    const maxFare:number = Number(req.query.maxFare)
    
    if(maxFare === undefined){

        res.status(400).send("pleas add a masFare")
        return
    }
    if(maxFare < 0){

        res.status(400).send("You can not add a number less than zero")
        return
    }

    let filteredFleets = fleet.filter((bus) => {return bus.farePerSeat <= maxFare})

    res.status(200).json({

        message:`the number of buses is ${filteredFleets.length}`,
        data: filteredFleets
    })

}
export function raterName(req:Request, res:Response):void{

    const requiredBus = fleet.find((bus) => {return (bus.id ===  Number(req.params.id))})
    const raterNameToSearch = req.query.rater
    const raterName = requiredBus?.ratings.find((rater) =>  String(raterNameToSearch) in rater)

    if(requiredBus === undefined){

        res.status(404).send("bus with this id is not found")
        return
    }
    if(raterNameToSearch === undefined){

        res.status(404).send("Please type the rater name to search")
        return
    }
    if(raterName === undefined){

        res.status(404).send("this name is not found")
        return
    }

    res.status(200).send("rater name is exist")
}