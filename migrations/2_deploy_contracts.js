const ArgetherToken = artifacts.require("ArgetherToken");

module.exports = function(deployer) {
  deployer.deploy(ArgetherToken);
};
