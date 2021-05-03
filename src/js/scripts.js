const layoutNodes = {
  searchForm: document.querySelector('.search-form'),
  input: document.querySelector('.input'),
  loadMore: document.querySelector('.load-more'),
  table: document.querySelector('.news-cards'),
  sourceList: document.querySelector('.source')
};

const layoutEvents = {
  searchFormSubmit: layoutNodes.searchForm.addEventListener('submit', retrieveNews),
  loadMoreClick: layoutNodes.loadMore.addEventListener('click', loadItems),
  loadMoreSubmit: layoutNodes.loadMore.addEventListener('submit', loadItems)
};


let cards = [],
  sourcesArray = [];

retrieveSources();

function loadItems() {
  const tr = document.createElement('tr');
  if (cards.length) {
    for (let i = 0; i < 5; i++) {
      const br = document.createElement('br'),
        th = document.createElement('th'),
        a = document.createElement('a'),
        img = document.createElement('img'),
        item = cards.shift();

      a.setAttribute('href', item.url);
      a.setAttribute('target', '_blank');
      a.textContent = item.title;

      img.setAttribute('src', item.img);
      img.setAttribute('alt', 'Image is not available');
      img.setAttribute('align', 'bottom');

      th.appendChild(a);
      th.appendChild(br);
      th.appendChild(img);
      tr.appendChild(th);

      layoutNodes.table.appendChild(tr);
    }
  } else {
    const h3 = document.createElement('h3');
    const th = document.createElement('th');

    h3.textContent = 'There are no articles matching your request';
    th.appendChild(h3);
    tr.appendChild(th);

    layoutNodes.table.appendChild(tr);
  }
}

function loadSources () {
  const sourcesCount = sourcesArray.length;
  for (let i = 0; i < sourcesCount; i++) {
    const option = document.createElement('option');
    const source = sourcesArray[i];
    const name = source.name;
    const id = source.id;

    option.setAttribute('value', id);
    option.textContent = name;
    layoutNodes.sourceList.appendChild(option);
  }
}

function retrieveSources () {
  const sourcesURL = `${process.env.API_CONFIG}sources?apiKey=${process.env.API_KEY}&language=en`

  fetch(sourcesURL).then(res => {
    return res.json();
  }).then(data => {
    data.sources.forEach(source => {
      sourcesArray.push({
        id: source.id,
        name: source.name
      })
    })
    loadSources()
  })
}

function retrieveNews (e) {
  e.preventDefault();
  const {table, input, sourceList} = layoutNodes;
  table.innerHTML = '';
  cards = [];
  const topic = input.value,
    sourceParam = sourceList.value ? `&sources=${sourceList.value}` : '',
    newsUrl = `${process.env.API_CONFIG}top-headlines?q=${topic}&apiKey=${process.env.API_KEY}&pageSize=40${sourceParam}`;
  fetch(newsUrl).then(res => {
    return res.json()
  }).then(data => {
    const urlNotFounded = 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg';
    data.articles.forEach(article => {
      let {urlToImage, url, title} = article,
        titleArticle = title.substr(0, 50) + '...';
      urlToImage = urlToImage ?? urlNotFounded;
      cards.push({
        title: titleArticle,
        img: urlToImage,
        url: url
      })
    });
    loadItems()
  })
}
