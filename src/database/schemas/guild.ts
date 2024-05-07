import { Schema } from "mongoose";

export interface IGuild {
    gId: string;
}

const guildSchema = new Schema<IGuild>({
    gId: { type: String, required: true, unique: true },
});

export default guildSchema;