const SlowStream = require("../index");
const fs = require("fs");

const delayedStream = new SlowStream(500);
fs.createReadStream("SampleVideo_1280x720_1mb.mp4")
  .pipe(delayedStream)
  .pipe(fs.createWriteStream("result.mp4"));
