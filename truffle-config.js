const HDWalletProvider = require('@truffle/hdwallet-provider');

let devUrl = 'http://127.0.0.1:7545/';
let mnemonic = 'gloom argue blue shadow shock note stick slow hope cloth equal gesture';   
let testAccounts = [
"0x68718e514720db5559a0b76c9a77ae51d8cd2cfbceab408b5d9e0f6c1bef559b",
"0x54afac4af31da9b996ff8bb7460778c5e86535ba780ba9dfeb450acb9c2f9f68",
"0xd12ef96331402a7cddc1bfc401bae456e4ec1dc04ca4f7f741b31efe41ee5992",
"0x37cbd5d7ce9ab0b3cadf1a2f6a36e572d79b57a12ea801e340aba113781a8cc1",
"0x688baebecd530b04003ce01d6f51f3e08ab38669db3d9efd15a9ba317455c525",
"0x3a8bd2a48df65e7da29c6334dfff36d24024137a46850c0f1619457cc4ac9db4",
"0x97571c01749c09ec4a9402104f1b2013db742391579affaf88e79d2c31501241",
"0x81dee681a7909260aa3b0a12c6e92bb65d02a89ff8c26fdc0e86cc8e3da9f972",
"0x0bae3c442a299ae90b63a317cd808478e32975f0a7399f14a4e108d720039b68",
"0xd37f9a01819da1d6bd7cd4d12610d40dbb64cd7f60d1cc3a62e3a510a1b85355"
];  

module.exports = {
  networks: {
    development: {
      url: devUrl,  // Required for DappStarter config generation
      provider: () => new HDWalletProvider(
                                      testAccounts,
                                      devUrl,           // provider url
                                      0,                // address index
                                      10,               // number of addresses
                                      true,             // share nonce
                                      `m/44'/60'/0'/0/` // wallet HD path
                                    ),
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: '^0.5.11'
    }
  }
};
