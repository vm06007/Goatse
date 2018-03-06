var KetherHomepage = artifacts.require("./KetherHomepage.sol");

const deployed = {
  'rinkeby': {
    ownerAddress: "0x641ad78baca220c5bd28b51ce8e0f495e85fe689",
    contractAddress: "0x92dfc6cfe5e6acdd19b278ca82e2acbff1cba2db",
  },
  'mainnet': {
    ownerAddress: "0x641ad78baca220c5bd28b51ce8e0f495e85fe689",
    contractAddress: "0x92dfc6cfe5e6acdd19b278ca82e2acbff1cba2db",
  },
};

module.exports = function(callback) {
  const cfg = deployed.rinkeby;
  KetherHomepage
    .at(cfg.contractAddress)
    .then(function(contract) {
      return contract.withdraw({from: cfg.ownerAddress, gas: 84968 })
    })
    .then((err, res) => { console.log("success: ", err, res) })
    .catch(callback)
};
