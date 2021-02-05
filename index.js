const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
var startDate = new Date();

var logslol = class logslol {
  constructor(opts) {
    opts = (typeof opts === "object" && opts !== null) ? opts : {};

    // optionslol
    this.colorList = ["blue", "cyan", "magenta", "blue", "green", "redBright", "yellow"];
    this.namePad = opts.pad || 6;
    this.filePrefix = (opts.filePrefix !== null) ? opts.filePrefix || "loglol" : null;

    // otherlol
    this.colorLast;
    this.colorCache = {};

    if (this.filePrefix !== null) {
        if (!fs.existsSync(path.join(path.dirname(require.main.filename), "/logs"))) {
            fs.mkdirSync(path.join(path.dirname(require.main.filename), "/logs"));
        }
        this.fileStream = fs.createWriteStream(path.join(path.dirname(require.main.filename), `\/logs\/${this.filePrefix}-${startDate.getDate()}-${startDate.getMonth() + 1}-${startDate.getFullYear()}-${startDate.getHours()}-${startDate.getMinutes()}-${startDate.getSeconds()}.txt`), { flags: "ax" });
    }
  }

  write(title, message, forceColor) {
    let color = chalk[forceColor] || this.colorTitle(title);
    console.log(color(`${title.padEnd(this.namePad)} >`), message);
    let date = new Date();
    this.fileStream.write(`[${date.getDate()}\/${date.getMonth() + 1}\/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${title.padEnd(this.namePad)} > ${message}\n`);
  }

  // idklol
  colorTitle(title) {
    if (this.colorCache.hasOwnProperty(title)) return chalk[this.colorCache[title]];
    else return chalk[this.colorCache[title] = this.getRandomColor()];
  }
  
  getRandomColor(ignoreLast) {
    ignoreLast = ignoreLast || false;
    let randomColor = Math.floor(Math.random() * Math.floor(this.colorList.length));
    if (ignoreLast) return this.colorList[randomColor];
    else if (this.colorList[randomColor] == this.colorLast) return this.getRandomColor();
    else return this.colorLast = this.colorList[randomColor];
  }
}

module.exports = logslol;