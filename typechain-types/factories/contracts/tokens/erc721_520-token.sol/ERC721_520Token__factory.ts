/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721_520Token,
  ERC721_520TokenInterface,
} from "../../../../contracts/tokens/erc721_520-token.sol/ERC721_520Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenIdA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenIdB",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_a",
        type: "address",
      },
      {
        internalType: "address",
        name: "_b",
        type: "address",
      },
    ],
    name: "check",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_a",
        type: "address",
      },
    ],
    name: "getPairInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "partner",
            type: "address",
          },
          {
            internalType: "enum ERC721_520.Sex",
            name: "sex",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct ERC721_520.AddressInfo",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "partner",
            type: "address",
          },
          {
            internalType: "enum ERC721_520.Sex",
            name: "sex",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct ERC721_520.AddressInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060085534801561001557600080fd5b50600060208190527f67be87c3ff9960ca1e9cfac5cab2ff4747269cf9ed20c9b7306235ac35a491c5805460ff1990811660019081179092556380ac58cd60e01b9092527ff7815fccbf112960a73756e185887fedcb9fc64ca0a16cc5923b7960ed7808008054909216179055611452806100916000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063b88d4fde11610066578063b88d4fde14610240578063c87b56dd14610253578063d4ff73f714610274578063e985e9c51461029557600080fd5b806370a08231146101ff57806395d89b4114610212578063a22cb4651461021a578063b3154db01461022d57600080fd5b806318160ddd116100d357806318160ddd146101b457806323b872dd146101c657806342842e0e146101d95780636352211e146101ec57600080fd5b806301ffc9a71461010557806306fdde031461015f578063081812fc14610174578063095ea7b31461019f575b600080fd5b61014a6101133660046110ce565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b6101676102d1565b604051610156919061113f565b610187610182366004611152565b610363565b6040516001600160a01b039091168152602001610156565b6101b26101ad366004611187565b6103e5565b005b6008545b604051908152602001610156565b6101b26101d43660046111b1565b6105cd565b6101b26101e73660046111b1565b610788565b6101876101fa366004611152565b6107a8565b6101b861020d3660046111ed565b610800565b610167610864565b6101b2610228366004611208565b610873565b61014a61023b366004611244565b6108df565b6101b261024e366004611277565b610ad9565b610167610261366004611152565b5060408051602081019091526000815290565b6102876102823660046111ed565b610b22565b604051610156929190611372565b61014a6102a3366004611244565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6060600680546102e09061138e565b80601f016020809104026020016040519081016040528092919081815260200182805461030c9061138e565b80156103595780601f1061032e57610100808354040283529160200191610359565b820191906000526020600020905b81548152906001019060200180831161033c57829003601f168201915b5050505050905090565b6000818152600160209081526040808320548151808301909252600682526518181998181960d11b9282019290925283916001600160a01b03166103c35760405162461bcd60e51b81526004016103ba919061113f565b60405180910390fd5b506000838152600260205260409020546001600160a01b031691505b50919050565b60008181526001602052604090205481906001600160a01b03163381148061043057506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b6040518060400160405280600681526020017f3030333030330000000000000000000000000000000000000000000000000000815250906104845760405162461bcd60e51b81526004016103ba919061113f565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166104de5760405162461bcd60e51b81526004016103ba919061113f565b50600084815260016020908152604091829020548251808401909352600683527f3030333030380000000000000000000000000000000000000000000000000000918301919091526001600160a01b03908116919087168214156105555760405162461bcd60e51b81526004016103ba919061113f565b5060008581526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038a811691821790925591518893918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050505050565b60008181526001602052604090205481906001600160a01b03163381148061060b57506000828152600260205260409020546001600160a01b031633145b8061063957506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b815250906106765760405162461bcd60e51b81526004016103ba919061113f565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166106d05760405162461bcd60e51b81526004016103ba919061113f565b50600084815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b0390811691908816821461072f5760405162461bcd60e51b81526004016103ba919061113f565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b0387166107745760405162461bcd60e51b81526004016103ba919061113f565b5061077f8686610d3c565b50505050505050565b6107a383838360405180602001604052806000815250610d84565b505050565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091526001600160a01b031690816103df5760405162461bcd60e51b81526004016103ba919061113f565b60408051808201909152600681526530303330303160d01b60208201526000906001600160a01b0383166108475760405162461bcd60e51b81526004016103ba919061113f565b50506001600160a01b031660009081526003602052604090205490565b6060600780546102e09061138e565b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b03828116600090815260056020908152604080832081516080810190925280549485168252929384939192830190600160a01b900460ff16600281111561092f5761092f611312565b600281111561094057610940611312565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b815250906109ba5760405162461bcd60e51b81526004016103ba919061113f565b506001600160a01b038381166000908152600560209081526040808320815160808101909252805494851682529293909291830190600160a01b900460ff166002811115610a0a57610a0a611312565b6002811115610a1b57610a1b611312565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b81525090610a955760405162461bcd60e51b81526004016103ba919061113f565b50836001600160a01b031682600001516001600160a01b0316148015610ad05750846001600160a01b031681600001516001600160a01b0316145b95945050505050565b610b1b85858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d8492505050565b5050505050565b610b4e604080516080810190915260008082526020820190815260200160008152602001600081525090565b610b7a604080516080810190915260008082526020820190815260200160008152602001600081525090565b6001600160a01b038381166000908152600560209081526040808320815160808101909252805494851682529293909291830190600160a01b900460ff166002811115610bc957610bc9611312565b6002811115610bda57610bda611312565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b81525090610c545760405162461bcd60e51b81526004016103ba919061113f565b5080516001600160a01b039081166000908152600560209081526040808320815160808101909252805494851682529293909291830190600160a01b900460ff166002811115610ca657610ca6611312565b6002811115610cb757610cb7611312565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b81525090610d315760405162461bcd60e51b81526004016103ba919061113f565b509094909350915050565b60405162461bcd60e51b815260206004820152600e60248201527f63616e6f74207472616e7366657200000000000000000000000000000000000060448201526064016103ba565b60008281526001602052604090205482906001600160a01b031633811480610dc257506000828152600260205260409020546001600160a01b031633145b80610df057506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b81525090610e2d5760405162461bcd60e51b81526004016103ba919061113f565b50600084815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528591906001600160a01b0316610e875760405162461bcd60e51b81526004016103ba919061113f565b50600085815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b03908116919089168214610ee65760405162461bcd60e51b81526004016103ba919061113f565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b038816610f2b5760405162461bcd60e51b81526004016103ba919061113f565b50610f368787610d3c565b610f48876001600160a01b0316611061565b1561105757604051630a85bd0160e11b81526000906001600160a01b0389169063150b7a0290610f829033908d908c908c906004016113c3565b602060405180830381600087803b158015610f9c57600080fd5b505af1158015610fb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd491906113ff565b60408051808201909152600681527f303033303035000000000000000000000000000000000000000000000000000060208201529091507fffffffff000000000000000000000000000000000000000000000000000000008216630a85bd0160e11b146110545760405162461bcd60e51b81526004016103ba919061113f565b50505b5050505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081158015906110955750808214155b949350505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146110cb57600080fd5b50565b6000602082840312156110e057600080fd5b81356110eb8161109d565b9392505050565b6000815180845260005b81811015611118576020818501810151868301820152016110fc565b8181111561112a576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006110eb60208301846110f2565b60006020828403121561116457600080fd5b5035919050565b80356001600160a01b038116811461118257600080fd5b919050565b6000806040838503121561119a57600080fd5b6111a38361116b565b946020939093013593505050565b6000806000606084860312156111c657600080fd5b6111cf8461116b565b92506111dd6020850161116b565b9150604084013590509250925092565b6000602082840312156111ff57600080fd5b6110eb8261116b565b6000806040838503121561121b57600080fd5b6112248361116b565b91506020830135801515811461123957600080fd5b809150509250929050565b6000806040838503121561125757600080fd5b6112608361116b565b915061126e6020840161116b565b90509250929050565b60008060008060006080868803121561128f57600080fd5b6112988661116b565b94506112a66020870161116b565b935060408601359250606086013567ffffffffffffffff808211156112ca57600080fd5b818801915088601f8301126112de57600080fd5b8135818111156112ed57600080fd5b8960208285010111156112ff57600080fd5b9699959850939650602001949392505050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03815116825260208101516003811061135857634e487b7160e01b600052602160045260246000fd5b602083015260408181015190830152606090810151910152565b61010081016113818285611328565b6110eb6080830184611328565b600181811c908216806113a257607f821691505b602082108114156103df57634e487b7160e01b600052602260045260246000fd5b60006001600160a01b038087168352808616602084015250836040830152608060608301526113f560808301846110f2565b9695505050505050565b60006020828403121561141157600080fd5b81516110eb8161109d56fea2646970667358221220d8421036f0092e764bc93e1cf6adf5fe789613d023621f6f76a0197e2e844c2664736f6c63430008090033";

type ERC721_520TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721_520TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721_520Token__factory extends ContractFactory {
  constructor(...args: ERC721_520TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721_520Token> {
    return super.deploy(overrides || {}) as Promise<ERC721_520Token>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721_520Token {
    return super.attach(address) as ERC721_520Token;
  }
  override connect(signer: Signer): ERC721_520Token__factory {
    return super.connect(signer) as ERC721_520Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721_520TokenInterface {
    return new utils.Interface(_abi) as ERC721_520TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721_520Token {
    return new Contract(address, _abi, signerOrProvider) as ERC721_520Token;
  }
}
