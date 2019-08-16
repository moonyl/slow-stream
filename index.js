const { Transform } = require("stream");

module.exports = class SlowStream extends Transform {
  constructor(interval) {
    let count = 0;
    super({
      transform(chunk, encoding, callback) {
        setTimeout(() => {
          this.push(chunk);
          count++;
          console.log("write: ", chunk.length, ", index: ", count);
          callback();
        }, interval);
      }
    });
  }
};
