module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(8)
    .substring(1);