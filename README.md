# Algo-Redirect Extension

Redirects URLs from algoexplorer.io and algoscan.app to allo.info.

## Permissions

**This extension can only interact with algoexplorer.io and algoscan.app.** It cannot read your data or interact with any other domains in any way.

It requires permissions to inject code and redirect for the aforementioned domains.

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

https://algoexplorer.io/application/1177117711

https://algoexplorer.io/asset/796425061

https://algoexplorer.io/block/32000000

## Algoscan redirect test links

https://algoscan.app/tx/FHUBCP5JDDWPNU2YQFXXX3CCSLEPBM3S2XBSBPCQC3NCVFGO37ZA

https://algoscan.app/tx/group/3PZVL8pHLjKdRVAmnNfuTP9sKTjP371u33cffp1CSsE=

https://algoscan.app/address/JPEGRZ6G4IBZCOC7UV6QZWJ6TENNKRIPENUJTLG5K7PKIKMVTJHUGERARE

https://algoscan.app/block/32000000

https://algoscan.app/asset/796425061

https://algoscan.app/app/1177117711

## Method

For algoscan, this uses [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest). Defined in `rules_algoscan.json`.

The same method is programmed for AlgoExplorer (`rules_algoexplorer.json`), however the service worker deployed to algoexplorer.io interferes with this redirection method, so a secondary redirection method is injected to algoexplorer.io pages (`algoexplorer.js`).

