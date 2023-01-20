const apiKey = '1bb2c66fe49f4cc8aae2c07724edd0bd';
const topic = [];
export const getInputValue = (newsTopic) => {
  topic.push(newsTopic);
};
const arrDateItem = [];
for (let i = 0; i < 7; i += 1) {
  const getDate = new Date(new Date().getTime() - (i * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
  arrDateItem.push(getDate);
}
const gettingNews = async () => {
  const topicItem = topic.pop();
  const url = `https://nomoreparties.co/news/v2/everything?q=${topicItem}&from=${arrDateItem[6]}&to=${arrDateItem[0]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
  const arrUrlItem = [];
  for (let i = 6; i >= 0; i -= 1) {
    const urlDay = `https://nomoreparties.co/news/v2/everything?q=${topicItem}&from=${arrDateItem[i]}&to=${arrDateItem[i]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
    arrUrlItem.push(urlDay);
  }
  const arrDaysItem = [];
  const requests = arrUrlItem.map((url) => fetch(url));
  Promise.all(requests)
    .then((responses) => {
      const dataResults = responses.map((response) => response.json());
      return Promise.all(dataResults);
    })
    .then((data) => {
      data.forEach((el) => {
        const dataNewsDay = el.articles;
        arrDaysItem.push(dataNewsDay);
        localStorage.setItem('analyticsDayArr', JSON.stringify(arrDaysItem));
      });
    });
  const response = await fetch(url);
  const data = await response.json();
  const { articles } = data;
  const newsItem = {
    arrTitle: [],
    arrDescription: [],
    arrImg: [],
    arrUrl: [],
    arrPublishedAt: [],
    arrAuthor: [],
    arrPublishedDate: [],
  };

  articles.forEach((el) => {
    newsItem.arrTitle.push(el.title);
    newsItem.arrDescription.push(el.description);
    newsItem.arrImg.push(el.urlToImage);
    newsItem.arrUrl.push(el.url);
    newsItem.arrPublishedAt.push(el.publishedAt);
    newsItem.arrAuthor.push(el.source.name);
  });

  const dataObj = JSON.stringify(newsItem);
  localStorage.setItem('newsItem', dataObj);
  const newsRes = JSON.stringify(articles);
  localStorage.setItem('newsData', newsRes);
  const dataTopic = JSON.stringify(topicItem);
  localStorage.setItem('topic', dataTopic);
  const totalRes = JSON.stringify(data);
  localStorage.setItem('totalResults', totalRes);
  return articles;
};

const gettingCommit = async () => {
  const reposUrl = 'https://api.github.com/repos/M-skyi/Test_Valencia_JS/commits?&&per_page=20';
  const response = await fetch(reposUrl);
  const data = await response.json();

  return data;
};
const gettingCommits = gettingCommit();

export {
  gettingCommits,
  gettingNews,
};
