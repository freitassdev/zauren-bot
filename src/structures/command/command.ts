import { ChatInputCommandInteraction } from "discord.js";
import Bot from "src";

export default class Command {
    public bot: Bot;
    public name: string = "";
    public description: string = "";
    public aliases: string[] = [];
    public interaction: ChatInputCommandInteraction;
    
    constructor(bot: Bot, interaction: ChatInputCommandInteraction) {
        this.bot = bot;
        this.interaction = interaction;
    }
    public async run(...args: any[]): Promise<void> {
        throw new Error(`The run method has not been implemented by ${this.name}`);
    }
}