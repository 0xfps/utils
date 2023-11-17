.call() will return false if you:

1. Call non-payable function with ETH ✔.
2. Call fail on revert ✔.
3. Call to function with no fallback ✔.
4. Send ETH to a contract that has no receive function ✔.
