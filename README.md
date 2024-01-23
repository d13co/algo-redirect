# Algo-Redirect Extension

Redirects URLs from algoexplorer.io and algoscan.app to allo.info.

## Security, privacy and permissions

**This extension can only interact with algoexplorer.io and algoscan.app.** It cannot read your data or interact with any other domains in any way.

It requires permissions to inject code and redirect for the aforementioned domains.

No user data is collected by this extension.

## No-monetization pledge

The limited permissions required by the extension make it a reasonably safe choice already, but monetization through data collection, ads or selling the extension are always options available to extension developers.

My pledge to the community:

This extension is provided as a public good utility. It will never be monetized by any means, including but not limited to:

- No user data collection
- No ads
- I will not sell it

## Installing

You can install this on Google Chrome and compatible browsers using the [Chrome Web Store](https://chromewebstore.google.com/detail/algo-redirect/camcolodmoedaibhhnmmgfbcfmikhkbm).

Rating the extension will help discoverability.

Alternatively you can [find the compiled extension here](https://github.com/d13co/algo-redirect-chrome/releases).

## Supported networks

Algorand Mainnet. Testnet & betanet may be supported in the future.

## Supported redirects

- Transaction
- Transaction Group
- Address
- Asset
- Application
- Block

## Algoexplorer redirect test links

https://algoexplorer.io/tx/FHUBCP5JDDWPNU2YQFXXX3CCSLEPBM3S2XBSBPCQC3NCVFGO37ZA

https://algoexplorer.io/tx/group/3PZVL8pHLjKdRVAmnNfuTP9sKTjP371u33cffp1CSsE%3D

https://algoexplorer.io/address/JPEGRZ6G4IBZCOC7UV6QZWJ6TENNKRIPENUJTLG5K7PKIKMVTJHUGERARE

https://algoexplorer.io/asset/796425061

https://algoexplorer.io/application/1177117711

https://algoexplorer.io/block/32000000

## Algoscan redirect test links

https://algoscan.app/tx/FHUBCP5JDDWPNU2YQFXXX3CCSLEPBM3S2XBSBPCQC3NCVFGO37ZA

https://algoscan.app/tx/group/3PZVL8pHLjKdRVAmnNfuTP9sKTjP371u33cffp1CSsE=

https://algoscan.app/address/JPEGRZ6G4IBZCOC7UV6QZWJ6TENNKRIPENUJTLG5K7PKIKMVTJHUGERARE

https://algoscan.app/asset/796425061

https://algoscan.app/app/1177117711

https://algoscan.app/block/32000000

## Implementation Details

For algoscan, this uses [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest). Defined in `rules_algoscan.json`.

The same method is programmed for AlgoExplorer (`rules_algoexplorer.json`), however the service worker deployed to algoexplorer.io interferes with this redirection method, so a secondary redirection method is injected to algoexplorer.io pages (`algoexplorer.js`).

## Firefox version

Unfortunately, cross-browser compabitility between Chrome-based browsers and Firefox is almost impossible for v3 manifest extensions, especially given this extension's feature set. A Firefox extension is on the roadmap, but it will be developed separately.

