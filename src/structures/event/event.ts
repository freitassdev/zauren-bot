import Bot from "src";

export default class BotEvent {
    public bot: Bot;
    public name: string = "";
    constructor(bot: Bot) {
        this.bot = bot;
    }
    public async run(...args: any[]): Promise<void> {
        throw new Error(`The run method has not been implemented by ${this.name}`);
    }
}