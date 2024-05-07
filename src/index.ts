import { Collection, Client, Base } from 'discord.js';
import { Guild, User, Bot as BotDatabase } from './database';
import c from 'colors';
import fs from 'node:fs';
import { promisify } from 'node:util';
import Logger from './utils/logger';

export default class Bot extends Base {
  public slashCommands: Collection<string, any> = new Collection();
  public events: Collection<string, any> = new Collection();
  public db: {
    guild: typeof Guild;
    user: typeof User;
    bot: typeof BotDatabase;
  } = {
      guild: Guild,
      user: User,
      bot: BotDatabase,
    };
  constructor(client: Client<true>) {
    super(client);
    this.slashCommands = new Collection();
    this.events = new Collection();
  }

  async loadEvents() {
    const path = "src/events"
    var modules = fs.readdirSync(path);
    modules.forEach(module => {
      var events = fs.readdirSync(`${path}/${module}`);
      events.forEach(async command => {
        const BotEvent = await import(`./events/${module}/${command}`);
        const evnt = new BotEvent.default(this);
        this.client.on(evnt.name, (...args) => evnt.run(...args));
        this.events.set(evnt.name, evnt);
        Logger.log(`[event] ${evnt.name} loaded.`);
      });
    })
  }

  async loadCommands() {
    const path = "src/commands";
    var modules = fs.readdirSync(path);
    await Promise.all(
      modules.map(async (module) => {
        var commands = fs.readdirSync(`${path}/${module}`);
        await Promise.all(
          commands.map(async (command) => {
            const ImportedCommand = await import(`./commands/${module}/${command}`);
            const cmd = new ImportedCommand.default(this.client);
            this.slashCommands.set(cmd.name, cmd);
          })
        );
      })
    );
  }

  

  async run() {
    this.db.guild = Guild;
    this.db.user = User;
    this.db.bot = BotDatabase;

    this.loadEvents();
    await this.loadCommands();
    this.client.login(process.env.TOKEN);

  }
}