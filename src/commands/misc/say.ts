import { ChatInputCommandInteraction, ApplicationCommandOptionType } from "discord.js";
import Bot from "../../index";
import Command from "../../structures/command/command";

class SayCommand extends Command {
    constructor() {
        super();
        this.name = "falar";
        this.description = "Faça o Bot falar! (Teste)";
        this.aliases = ["say", "fale"];
        this.options = [{
            name: "fale",
            description: "O que o bot deve falar?",
            type: ApplicationCommandOptionType.String,
            required: true,
        }];
    }
    async run(bot: Bot, inter: ChatInputCommandInteraction) {
        let content: string = inter.options.getString("fale");
        await inter.editReply(content);
    }
}

export default SayCommand;