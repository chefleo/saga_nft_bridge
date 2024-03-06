// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract SCDG is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 private _nextTokenId;

    constructor()
        ERC721("Saga Cats Dogs Food", "SCDG")
        Ownable(msg.sender)
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmYAcQ5h6qdKmCVg2a1eYBkCQA2W3FbDmVrL7ULB6u8qoJ/";
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, "");
        _nextTokenId++;
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return (string(abi.encodePacked(
            _baseURI(),
            Strings.toString(tokenId),
            ".json"
        )));
    }

    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
