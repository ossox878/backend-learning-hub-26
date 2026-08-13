import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export const middleware = (req: Request, res: Response, next: NextFunction)=> {

    const token = req.cookies?.token

    if(!token){

        return res.status(400).send("unauthorized")
    }

    try{

        const decode = jwt.verify(token,process.env.JWT_SECRET as string) as {id: number, role: string}

        if(decode.role !== "admin"){

            return res.status(401).send("unauthorized")
        }
        next()
    }catch(err){

        res.status(400).send("invalid token")
    }
}