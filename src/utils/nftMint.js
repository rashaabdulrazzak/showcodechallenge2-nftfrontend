import BN from "bn.js";
const gas = new BN("300000000000000");
const attachedDeposit = new BN("100000000000000000000000");

export function nft_mint(name) {
  return window.contract.nft_mint(
    {
      token_id: `${name}-nft-challenge`,
      metadata: {
        title: "Showcode Challenge",
        description: "NFT Mint",
        media:
          "https://bafybeia5nmrdujer6fb3gnju7lm5b5biby33hpmmogb6sc5y3of4u6sdlu.ipfs.nftstorage.link/",
      },
      receiver_id: name,
    },
    gas,
    attachedDeposit
  );
}
export function nft_tokens_for_owner(name) {
  return window.contract.nft_tokens_for_owner({ account_id: name });
}
