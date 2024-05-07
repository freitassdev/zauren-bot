import { model, connect, ConnectOptions } from 'mongoose';
import Logger from '../utils/logger';
import dotenv from 'dotenv';
dotenv.config();

import userSchema from "./schemas/user";
import guildSchema from "./schemas/guild";
import botSchema from "./schemas/bot";
import { IUser } from './schemas/user';
import { IGuild } from './schemas/guild';
import { IBot } from './schemas/bot';

const Guild = model<IGuild>('Guild', guildSchema);
const User = model<IUser>('User', userSchema);
const Bot = model<IBot>('Bot', botSchema);

try {
    const options: ConnectOptions = {}
    await connect(process.env.MONGO_URI ?? "", options);
    Logger.log("[database] connection sucessful.");
} catch (e) {
    Logger.error("[database] cannot connect to mongodb server.");
    console.error(e);
}	

export {
    Guild,
    User,
    Bot
}