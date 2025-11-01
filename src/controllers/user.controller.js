import User from "../models/user.models.js"


const RegisterUser = async (req, res) => {
    try {
        
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Something is missing" });
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        

        const user = await User.create({
            name,
            email,
            password,
            isVerified: false,
        });
console.log("hello",user)
        const createdUser = await User.findById(user._id).select("-password");
        if (!createdUser) {
            return res.status(500).json({ message: "Something went wrong creating the user" });
        }

        return res.status(200).json({ success: true, message: "User registered successfully", user: createdUser });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while registering" });
    }
};

export { RegisterUser };
