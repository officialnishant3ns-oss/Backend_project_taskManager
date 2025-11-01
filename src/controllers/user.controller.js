import User from "../models/user.models.js"


const RegisterUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Something is missing" });
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists go to login" });
        }


        const user = await User.create({
            name,
            email,
            password,
            isVerified: false,
        });
        console.log(user)
        const createdUser = await User.findById(user._id).select("-password");
        if (!createdUser) {
            return res.status(500).json({ message: "Something went wrong creating the user" });
        }

        return res.status(200).json({ success: true, message: "User registered successfully", user: createdUser });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while registering" });
    }
}

const LoginUser = async (req, res) => {
    try {
     const {email,password} = req.body

      if (!email || !password) {
            return res.status(400).json({ message: "Something is missing" });
        }
     const userexist = await User.findOne({email})
      if (!userexist) {
            return res.status(400).json({ message: "User does not exists pls register first" });
        }

      //password compare 
      //acesss and refrsh token
      //cookie save portion  


    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while login" });
    }
}




export { RegisterUser, LoginUser };
