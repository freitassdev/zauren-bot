import { Client } from "discord.js";

export default class BotEvent {
    public client: Client<true>;
    public name: string = "";
    constructor(client: Client<true>) {
        this.client = client;
    }
    public async run(...args: any[]): Promise<void> {
        throw new Error(`The run method has not been implemented by ${this.name}`);
    }
}