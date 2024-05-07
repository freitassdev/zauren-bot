import { ChatInputCommandInteraction } from "discord.js";
import Bot from "../../index";
import Command from "../../structures/command/command";

export default class PingCommand extends Command {
    constructor(bot: Bot, interaction: ChatInputCommandInteraction) {
        super(bot, interaction);
        this.name = "ping";
        this.description = "Ping the bot";
        this.aliases = ["pong"];
    }
    async run() {
        this.interaction.reply({
            content: "Pong!",
            ephemeral: true
        });
    }
}