const getFeedBox = (feedData) => {
  if (!feedData || !feedData.name) {
    return null
  }

  const iframeSource = [
    'https://www.mixcloud.com/widget/iframe/?feed=',
    encodeURIComponent(feedData.url),
    '&light=1'
  ].join('');


  return `
    <div>
      <h2>${feedData.name}</h2>
      <iframe width="100%" height="120" src="${iframeSource}" frameborder="0"></iframe>
    </div>
  `;
}

const noNull = (data) => data !== null

fetch('https://api.mixcloud.com/sonidobragueta/cloudcasts/')
  .then((res) => {
    return res.json();
  })
  .then(({ data }) => {
    const feedDiv = document.getElementById('feed');
    feedDiv.innerHTML = data.map(getFeedBox).filter(noNull).join('');
  })
  .catch(() => {
    const feedDiv = document.getElementById('feed');
  })
