import { Collection, Client, Base } from 'discord.js';
import { Guild, User, Bot as BotDatabase } from './database';
import c from 'colors';
import fs from 'node:fs';
import { promisify } from 'node:util';

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
        const evnt = new BotEvent.default(this.client);
        this.client.on(evnt.name, (...args) => evnt.run(...args));
      });
    })
  }

  async run() {
    this.db.guild = Guild;
    this.db.user = User;
    this.db.bot = BotDatabase;
    console.log(c.bgGreen("bot.ts - Databases loaded."));
    this.loadEvents();
    this.client.login(process.env.TOKEN);

  }
}