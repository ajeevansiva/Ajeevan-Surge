import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: { type: 'string', required: 'true' },
    email: { type: 'string', required: 'true' },
    password: { type: 'string', required: 'true' },
}, {
    collection: 'users'
})

export default mongoose.model('UserData', User)