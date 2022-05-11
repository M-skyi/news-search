
    let apiKey = "2213f1e36fb8400bb4eef4e632efffe3";

    let currentDay = new Date();

    let topic = [];

    export let getInputValue = (newsTopic) => {
        topic.push(newsTopic);
    } 
    
   //  let arrTitle = [];
    


      

    
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
      arrAuthor: []
   }

      newsData.forEach(el=> {
         newsItem.arrTitle.push(el.title);
         newsItem.arrDescription.push(el.description);
         newsItem.arrImg.push(el.urlToImage);
         newsItem.arrUrl.push(el.url);
         newsItem.arrPublishedAt.push(el.publishedAt);
         newsItem.arrAuthor.push(el.author);
     });  

   let state = {
      newsData:newsData,
      newsItems:newsItem
   }
   
     return state
}








        

        
    

export default gettingNews;