import User from "../models/user.models"



const RegisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Something is missing" })
        }

        const userExist =await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "User already exists" })
        }



        const user = await User.create({
            name,
            email,
            password,
            isVerified: false,
        })
        const createduser = await User.findById(user._id).select(
            "-password -refresstoken"
        )
        if (!createduser) {
            throw new apierror(500, "something went wrong while registering the user")
        }

        return res.status(200).json({ success: true, message: "User register successfully", user })


    } catch (error) {
        res.status(500).json({ message: "Somthing wrong while registering" })
    }
}