import BotEvent from "../../structures/event/event";
import Logger from "../../utils/logger";
import Bot from "src";
export default class ReadyEvent extends BotEvent {
    constructor(bot: Bot) {
        super(bot);
        this.name = "ready";
    }
    async registerCommands() {
        await this.bot.client.application?.fetch();
        this.bot.slashCommands.forEach(async (cmd) => {
            await this.bot.client.application?.commands.create({
                name: cmd.name,
                description: cmd.description,
                options: cmd.options,
                type: 1,
            }).then((response) => Logger.log(`[command] ${cmd.name} registered. id: ${response.id}`));
            
        });

    }

    public run(...args: any[]): Promise<void> {
        Logger.log("[ready] bot loaded at " + args[0].user.username + "#" + args[0].user.discriminator);
        this.registerCommands();
        return Promise.resolve();
    }

}