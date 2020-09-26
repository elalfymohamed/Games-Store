const gutil = require("gulp-util");
const { NODE_ENV } = require("../utils/env");

const starterMsg = (done) => {
  gutil.log(gutil.colors.bgBlue(`🌟 starting in ${NODE_ENV} mode.`));
  done();
};

module.exports = {
  starterMsg,
};
