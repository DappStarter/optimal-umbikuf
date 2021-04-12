require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hunt lonely bottom suspect bitter birth stick proof harvest forum flower gift'; 
let testAccounts = [
"0x579209eaff6c183358d55d4eed37babe6453b992a91ea48b77056fc779e03e3c",
"0xab0c36b77a9e5a72f85769803ceb9aca531c65f883a947dc426b5287b8abba11",
"0xa419173289093edf73178a7bd124baba929c672db47fa9707ba7064742ed4ae4",
"0x04b3c8d280e986c33f321a2d7a296ebd1238e306cc68a50cc6fc6371eaeb47f9",
"0xda8ba55879ac2e3bc1b25142762e0262112232c7fde487b9c5928ce987e51c3d",
"0x3b1445084c5af6bbdb62ba69a1ece94221791b634b87e0c83eaeb00c97420211",
"0x433f9edfe32efd509d6af4dfc5d698c928ca95b5ef4c6e197e36fc84738f121d",
"0x0d3298b5263d9d35dd1d9d6c67437368b033c5a81f1da3c1d668685b690f6171",
"0x5e4c07a3fcf0ddb463f2379579a95d03c9f21174d0aa8420bcc04f92eb3b9528",
"0xadd460a01979a74d3786a1eafc659dee76b2c83d38d72fd74d30d166b3a61ef8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

