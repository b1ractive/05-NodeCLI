// Un prompt como output
process.stdout.write("prompt > ");
const commands = require("./commands");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  const input = data.toString().trim();
  const [cmd, ...arguments] = input.split(" ");
  commands[cmd](arguments);

  // if (cmd === "date") commands.date();
  // if (cmd === "pwd") commands.pwd();
  // if (cmd === "ls") commands.ls();
  // if (cmd === "echo") commands.echo(arguments)
  // if (cmd === "cat") commands.cat(arguments);
  // if (cmd === "head") commands.head(arguments);
  // if (cmd === "tail") commands.tail(arguments);
  // if (cmd === "sort") commands.sort(arguments);
  // if (cmd === "wc") commands.wc(arguments);
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write("\nprompt > ");
});
