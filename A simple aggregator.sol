// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    mapping(uint256 => AggregatorV3Interface) internal priceFeeds;

    /**
     * Network: Sepolia
     * Aggregator: BTC/USD
     * Address: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
     */
    constructor() {
        priceFeeds[0] = AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43); // BTC/USD
        priceFeeds[1] = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306); // ETH/USD
        priceFeeds[2] = AggregatorV3Interface(0x14866185B1962B63C3Ea9E03Bc1da838bab34C19); // DAI/USD
        priceFeeds[3] = AggregatorV3Interface(0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E); // USDC/USD
    }

    /**
     * Returns the latest price.
     */
    function getLatestPrice(uint8 i) public view returns (int256, uint8) {
        if (address(priceFeeds[i]) == address(0)) revert("No price feed availble.");
        (, int price, , , ) = priceFeeds[i].latestRoundData();
        return (price, priceFeeds[i].decimals());
        // Divide by `10 ** decimals()`;
    }
}
