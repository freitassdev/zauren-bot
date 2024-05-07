import { Schema } from "mongoose";

export interface IUser {
    uId: string;
}

const userSchema = new Schema<IUser>({
    uId: { type: String, required: true, unique: true },
});

export default userSchema;