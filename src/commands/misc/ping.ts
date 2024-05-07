import { ChatInputCommandInteraction } from "discord.js";
import Bot from "../../index";
import Command from "../../structures/command/command";

export default class PingCommand extends Command {
    constructor() {
        super()
        this.name = "ping";
        this.description = "Ping the bot";
        this.aliases = ["pong"];
    }
    async run(bot: Bot, interaction: ChatInputCommandInteraction) {
        interaction.editReply({
            content: "Pong!",
        });
    }
}