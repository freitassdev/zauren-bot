import { ChatInputCommandInteraction } from "discord.js";
import Bot from "src";

export default class Command {
    public name: string = "";
    public description: string = "";
    public aliases: string[] = [];
    public options: any[] = [];
    
    
    public async run(bot: Bot, interaction: ChatInputCommandInteraction): Promise<void> {
        throw new Error(`The run method has not been implemented by ${this.name}`);
    }
}