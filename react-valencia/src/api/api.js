
    let apiKey = "1bb2c66fe49f4cc8aae2c07724edd0bd";

    let currentDay = new Date();

    let topic = [];

    export let getInputValue = (newsTopic) => {
        topic.push(newsTopic);
    } 



    function changeDate(arrayDate,newDateArr) {

      for (let i = 0; i < arrayDate.length; i++) {

         let dateNews = arrayDate[i];
         let changeDate = new Date(dateNews).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);
         let strDateMonth = changeDate.split(" ");
         let currentDate = changeDate.replace(strDateMonth[1], strDateMonth[1] + ",");
         newDateArr.push(currentDate)
      }
     
  }
    


    let gettingNews = async (e) => {

     const url = `https://nomoreparties.co/news/v2/everything?q=${topic.pop()}&from=${currentDay}&to=${currentDay}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

     const response = await fetch(url);
      
     const data = await response.json();

     let newsData = data.articles;

     let newsItem = {
      arrTitle: [],
      arrDescription: [],
      arrImg: [],
      arrUrl: [],
      arrPublishedAt: [],
      arrAuthor: [],
      arrPublishedDate: []
   }

      newsData.forEach(el=> {
         newsItem.arrTitle.push(el.title);
         newsItem.arrDescription.push(el.description);
         newsItem.arrImg.push(el.urlToImage);
         newsItem.arrUrl.push(el.url);
         newsItem.arrPublishedAt.push(el.publishedAt);
         newsItem.arrAuthor.push(el.author);
     });  

     changeDate(newsItem.arrPublishedAt,newsItem.arrPublishedDate)


     let dataObj = JSON.stringify(newsItem)
     localStorage.setItem('newsItem', dataObj)


   let state = {
      newsData:newsData,
      newsItems:newsItem
   }
   
     return state
}

       
    

export default gettingNews;