export interface Ratings {

    [name:string]:Number
}

export interface Microbus {

    id:Number
    driverName:string
    route:string
    farePerSeat:number
    seatsAvailable:number
    ratings:Ratings[]
}