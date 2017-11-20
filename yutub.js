const yutubUrl = 'http://your-yutub-host:6060/';

function getCurrentVideoUrl() {
  let r = /\?v=([^\&]+)/.exec(location.search);

  if (r) {
    return r[1];
  }

  return null;
}

setTimeout(function keepRun() {
  setTimeout(keepRun, 1000);

  var header = document.querySelector('[id="container"] h1');
  if (!header) { return; }

  var link = header.querySelector('a');

  if (link == null) {
    link = document.createElement('a');
    header.appendChild(link);
  }

  var video = getCurrentVideoUrl();

  if (link.getAttribute('video') != video) {
    link.style.backgroundColor = 'darkgray';
    link.style.color = 'white';
    link.style.fontSize = '10pt';
    link.style.padding = '5px';
    link.style.fontFamily = "Roboto, Arial, sans-serif";
    link.style.textDecoration = "none";
    link.style.fontWeight = "500";
    link.style.marginLeft = "5px";


    link.innerText = 'indir';
    link.target = '_new';
    link.href = yutubUrl + video + '/dl';
    link.setAttribute('video', video);
  }
}, 1000);