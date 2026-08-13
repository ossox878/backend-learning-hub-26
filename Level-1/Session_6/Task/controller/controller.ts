import { Response, Request } from "express";
import { User, users } from "../models/data";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const age: number = 60 * 60

const createCookie = (id: number, role: string): string => {

    return jwt.sign({ id, role }, process.env.JWT_SECRET as string, { expiresIn: age })
}

export const signIn = async (req: Request, res: Response): Promise<void> => {

    try {
        const { username, email, password } = req.body

        const userExist = users.find((user) => user.email === email)
        if (userExist) {

            res.status(400).send("user with this email is exist")
            return
        }

        const encryptedPassword = await bcrypt.hash(String(password), 10)

        const newUser: User = {

            id: users.length + 1,
            username,
            email,
            password: encryptedPassword,
            role: "user"
        }

        users.push(newUser)

        res.status(201).json({

            status: 201,
            data: users,
            message: `user ${username} created successfully`
        })
    }
    catch (err) {
        res.status(500).send("server error")
        console.error(err)
        return
    }
}

export const signUp = async (req: Request, res: Response)=> {

    try {

        const { username, password, email } = req.body
        const isUserExist = users.find((user) => user.email === email)

        if (!isUserExist) {

            res.status(400).send("user with this email is not found")
            return
        }

        const isPasswordRight = await bcrypt.compare(password, isUserExist.password)
        if(!isPasswordRight){

            return res.status(404).send("password is not correct")
        }

        const token = createCookie(isUserExist.id, isUserExist.role)
        res.cookie('token',token,{httpOnly: true, maxAge: age*1000})

        res.status(200).json({

            status: 200,
            data: isUserExist,
            message: "signed up successfully"
        })

    }
    catch (err) {

        console.error(err)
    }
}

export const signOut = (req: Request, res: Response)=> {
  res.clearCookie("token")

  res.status(200).json({
    status: 200,
    msg: "Logged out successfully",
  })
}

export const getProfile = (req: Request, res: Response) => {
  return res.status(200).send("user is authenticated!");
};

export const getAdminProfile = (req: Request, res: Response) => {
  return res.status(200).send(" menawwar ya qa2ed ya qodwa ya astora ya fannan!");
};