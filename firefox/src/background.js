function getDestinationURL(url) {
  const regex = /^https?:\/\/(algoexplorer\.io|algoscan\.app)\/(tx|app|address|asset|application|block)\/([-A-Za-z0-9+=%/]+)$/g
  const match = regex.exec(url);

  if (match) {
    let [_, hostname, type, rest] = match;
    switch(type) {
      case 'app':
        type = 'application';
        break;
      case 'address':
        type = 'account';
    }
    return `https://allo.info/${type}/${rest}`;
  }

  console.log("Algo-Redirect: no match for", url);
}

function redirect(requestDetails) {
  const { url } = requestDetails;
  const redirectUrl = getDestinationURL(url);
  console.log(`Redirecting: ${url} to ${redirectUrl}`);
  if (redirectUrl) {
    return { redirectUrl };
  }
}

const urls = [
  "https://algoscan.app/*",
  "https://algoexplorer.io/*",
];

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls, types: ["main_frame"] },
  ["blocking"],
);
