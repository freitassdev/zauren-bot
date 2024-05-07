import BotEvent from "../../structures/event/event";
import Logger from "../../utils/logger";
import Bot from "src";
export default class ReadyEvent extends BotEvent {
    constructor(bot: Bot) {
        super(bot);
        this.name = "ready";
    }
    public run(...args: any[]): Promise<void> {
        Logger.log("[ready] bot loaded at " + args[0].user.username + "#" + args[0].user.discriminator);
        return Promise.resolve();
    }
}