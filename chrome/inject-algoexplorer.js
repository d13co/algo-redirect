function getDestinationURL() {
  const { href } = window.location;

  const regexIdentical = /^https?:\/\/algoexplorer.io\/(tx|asset|application|block)\/([-A-Za-z0-9+=%/]+)$/g
  const matchIdentical = regexIdentical.exec(href);

  if (matchIdentical) {
    const [_, type, rest] = matchIdentical;
    return `https://allo.info/${type}/${rest}`;
  }

  const regexAddress = /^https?:\/\/algoexplorer.io\/address\/([A-Z2-7]+)$/;
  const matchAddress = regexAddress.exec(href);

  if (matchAddress) {
    const [_, address] = matchAddress;
    return `https://allo.info/account/${address}`;
  }

  console.log("Algo-Redirect: no match for", href);
}

function redirect() {
  const url = getDestinationURL();
  if (url) {
    window.location = url;
  }
}

redirect();
