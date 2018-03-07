var KetherHomepage = artifacts.require("./KetherHomepage.sol");

const deployed = {
  'rinkeby': {
    ownerAddress: "0x8D18694cEc03001f43280D864FFC8E5172dDC940",
    contractAddress: "0x2b3ba31dea402328c972196d4442275aa4dcad0e",
  },
  'mainnet': {
    ownerAddress: "0x8D18694cEc03001f43280D864FFC8E5172dDC940",
    contractAddress: "0x2b3ba31dea402328c972196d4442275aa4dcad0e",
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
