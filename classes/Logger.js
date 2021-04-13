import fs from "fs";

/* We need only one instance of Logger class so it is a singleton */

class Logger {
  constructor() {
    if (Logger.instance == null) {
      this.logs = []; // properti
      Logger.instance = this;
    }
    return Logger.instance;
  }

  writeLog(message) {
    fs.writeFile("log.txt", message, function (err) {
      if (err) return console.log(err);
      console.log(`${message} > log.txt`);
    });
  }
}

const logger = new Logger();
Object.freeze(logger);
export default logger;
