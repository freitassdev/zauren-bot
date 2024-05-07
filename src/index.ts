import { Collection, Client, GatewayIntentBits, Partials, Base } from 'discord.js';

export default class Bot extends Base {
  public slashCommands: Collection<string, any> = new Collection();
  public events: Collection<string, any> = new Collection();
  public db: Collection<string, any> = new Collection();
  constructor(client: Client<true>) {
    super(client);
    this.slashCommands = new Collection();
    this.events = new Collection();
    this.db = new Collection();
  }

  async run() {
    this.db.set('client', this.client);
    
  }
}