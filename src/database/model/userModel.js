import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    midName: String,
    civilStatus: String,
    role: String,
    birthDate: String,
    employeeId: String,
    contactNo: String,
    email: String
});
// console.log(require('mongoose-bcrypt'));
// UserSchema.plugin(timestamp);
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;


