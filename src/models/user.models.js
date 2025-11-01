import mongoose from "mongoose"
import bcrypt from 'bcrypt'
const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    refresstoken: {
        type: String
    }

},
    { timestamps: true }
)

userschema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// that a function task password and compare to the this,password 
userschema.methods.isPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}



const User = mongoose.model('User', userschema)
export default User
