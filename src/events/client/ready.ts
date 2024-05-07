import { Client } from "discord.js";
import BotEvent from "../../structures/event/Event";

export default class ReadyEvent extends BotEvent {
    constructor(client: Client<true>) {
        super(client);
        this.name = "ready";
    }
    public run(...args: any[]): Promise<void> {
        console.log("READY - Bot loaded at", args[0].user.username + "#" + args[0].user.discriminator);
        return Promise.resolve();
    }
}