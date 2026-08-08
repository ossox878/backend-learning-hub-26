import { Ratings,Microbus } from "./types";

export let fleet:Microbus[] = [

    {
    id:1,
    driverName:"Yousef",
    route:"Shbeen - Al-abassia",
    farePerSeat:22,
    seatsAvailable:14,
    ratings:[{Medhat : 3},{omnia : 4}]
    },

    {
    id:2,
    driverName:"osso",
    route:"Shbeen - koliat al zera2a",
    farePerSeat:13,
    seatsAvailable:32,
    ratings:[{Mohesen : 2},{Joe : 4}]
    },

    {
    id:3,
    driverName:"Mansoor",
    route:"Shbeen - 3boor",
    farePerSeat:25,
    seatsAvailable:14,
    ratings:[{Mark : 3},{Alia : 4}]
    },

    {
    id:4,
    driverName:"3ala ganb yasta",
    route:"Shbeen - Mustorud",
    farePerSeat:13,
    seatsAvailable:14,
    ratings:[{TonyStark : 5},{SpiderMan : 4}]
    }
]