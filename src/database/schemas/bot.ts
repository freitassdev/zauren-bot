import { Schema, SchemaDefinitionProperty } from "mongoose";

export interface IBot {
  botId: string;
  blacklistUsers: string[];
}

const botSchema = new Schema<IBot>({
  botId: { type: String, required: true, unique: true },
  blacklistUsers: { type: [String], required: true, default: [] },
});

export default botSchema;