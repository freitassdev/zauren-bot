import { ChatInputCommandInteraction, InteractionEditReplyOptions } from "discord.js";
import BotEvent from "../../structures/event/event";
import Logger from "../../utils/logger";
import Bot from "src";

export default class InteractionCreateEvent extends BotEvent {
    constructor(bot: Bot) {
        super(bot);
        this.name = "interactionCreate";
    }
    public async run(interaction: ChatInputCommandInteraction): Promise<void> {
        Logger.log("[interaction] created interaction: ", interaction);
        await interaction.deferReply().catch((e) => {
            Logger.error(`[interaction] error while deferring reply: ${e}`);
        });

        // if (interaction?.user?.bot !== null) return;
        if (!interaction.isCommand()) return;
        if (!interaction.member) return;
        if (!interaction.guild) {
            await interaction.editReply({ content: `Me desculpe **${interaction.member.user.username}**! Mas não é possivel usar Comandos na DM, tente isso em um Servidor.`, ephemeral: true } as InteractionEditReplyOptions);
            return;
        }

        // const userdb = await this.bot.db.user.findOne({ id: interaction.member.user.id });
        // const guilddb = await this.bot.db.guild.findOne({ id: interaction.guild.id });
        // if (!userdb) {
        //     await this.bot.db.user.create({ uId: interaction.member.user.id });
        // }

        // if (!guilddb) {
        //     await this.bot.db.guild.create({ gId: interaction.guild.id });
        // }
        const Command = this.bot.slashCommands.get(interaction.commandName);
        if (Command) {
            Command.run(this.bot, interaction)
        }
        return Promise.resolve();
    }
}