# logslol
log stuff that i use often with my projects, so i made it a package instead. i dont have a better name for it.

## Description
logslol is just a simple cache based off a name for colours and also saves logs to a text file.

## Example usages

### Simple
```js
const logslol = require("logslol");
const log = new logslol();

log.write("Hey", "This is cool...");
log.write("Nice", "This should be a new colour! :eyes:");
log.write("Hey", "The colour should be same as the other 'Hey'");
```
Output: <br>
<img src="https://zachary.fun/i/9rXXw.png" width=400/>

### Options
```js
const logslol = require("logslol");
const log = new logslol({
    colors: ["cyan", "magenta"], // Will replace the default colour list (NOTE: it will loop over the list when it runs out)
    pad: 15, // The length of the name (Default: 6)
    filePrefix: "haha" // The file name prefix followed by the startup date and time, would save as "haha-DD-MM-YYYY-HH-MM-SS.txt" (Default: "loglol")
});

log.write("Example", "Thats a long padding!");
log.write("Haha", "https://www.youtube.com/watch?v=M5V_IXMewl4");
```
Output: <br>
<img src="https://zachary.fun/i/pwhWP.png" width=400/>


## Credit
- [Chalk](https://github.com/chalk/chalk) for pretty much everything with this package \<3
### GitHub Supporters
- 🌟 [elybeatmaker](https://github.com/elybeatmaker)

## Contribuiting
Go for it! More features the better!