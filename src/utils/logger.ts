import c from 'colors';

export default class Logger {
    public static log(message: string, ...args: any[]) {
        console.log(c.green(message));
    }
    public static error(message: string, ...args: any[]) {
        console.error(c.red(message));
    }
    public static warn(message: string, ...args: any[]) {
        console.warn(c.yellow(message));
    }
}