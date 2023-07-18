const fs = require("fs");
const request = require("request");
const process = require("process");

const commands = {
  pwd: function () {
    const actualDirectory = process.cwd();
    process.stdout.write(`${actualDirectory}`);
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  date: function () {
    const actualDate = new Date();
    process.stdout.write(`${actualDate}`);
  },
  echo: function (arguments) {
    const message = arguments.join(" ");
    process.stdout.write(`${message}\n`);
  },

  cat: function (argumento) {
    argumento.forEach((nombreArchivo) => {
      fs.readFile(nombreArchivo, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        process.stdout.write(`${data}\n`);
        // process.stdout.write("\n");
        process.stdout.write("prompt > ");
      });
    });
  },

  head: function (argumento) {
    const maxLines = 5;

    argumento.forEach((nombreArchivo) => {
      fs.readFile(nombreArchivo, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        const text = data;
        const textLine = text.split("\n").slice(0, maxLines).join("\n");
        process.stdout.write(`${textLine}\n`);
        // process.stdout.write("\n");
        process.stdout.write("prompt > ");
      });
    });
  },
  tail: function (argumento) {
    const maxLines = 5;

    argumento.forEach((nombreArchivo) => {
      fs.readFile(nombreArchivo, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        const lines = data;
        const line = lines.split("\n").slice(-maxLines).join("\n");
        process.stdout.write(`${line}\n`);
        // process.stdout.write("\n");
        process.stdout.write("prompt > ");
      });
    });
  },
  sort: function (argumento) {
    argumento.forEach((nombreArchivo) => {
      fs.readFile(nombreArchivo, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        const lines = data.trim().split("\n");
        const sortedLines = lines.sort();
        const joined = sortedLines.join("\n");
        process.stdout.write(`${joined}\n`);
        // process.stdout.write("\n");
        process.stdout.write("prompt > ");
      });
    });
  },
  wc: function (argumento) {
    argumento.forEach((nombreArchivo) => {
      fs.readFile(nombreArchivo, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
        const lines = data.split("\n");
        process.stdout.write(`${lines.length}\n`);
        // process.stdout.write("\n");
        process.stdout.write("prompt > ");
      });
    });
  },

  uniq: function () {},

  curl: function (url) {
    request(url, function (err, res, body) {
      process.stdout.write(`${body}`);
    });
  },
};

module.exports = commands;
