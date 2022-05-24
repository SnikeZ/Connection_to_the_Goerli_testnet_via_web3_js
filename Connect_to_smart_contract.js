
const keys = require("./keys.json")
const ALCHEMY_API_KEY = keys.ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = keys.GOERLI_PRIVATE_KEY;
const Web3 = require("web3")
const IERC20 = require('./IERC20.json')

const init = async () => {
    web3 = new Web3(`https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`);
    console.log(web3.eth.getBlockNumber())

    const Token = new web3.eth.Contract(IERC20.abi, "0xbe3dbc8881f15def1cca48d537a159a2da5d7e7a")
    const result = await Token.methods.symbol().call()
    console.log(result)
}
init()