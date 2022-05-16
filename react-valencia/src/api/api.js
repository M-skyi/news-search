
   import{changeDate} from "../app/main"
   
   
   
   
   let apiKey = "2213f1e36fb8400bb4eef4e632efffe3";

    let currentDay = new Date();

    let topic = [];

    export let getInputValue = (newsTopic) => {
        topic.push(newsTopic);
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

     localStorage.setItem('newsDataLength', newsData.length)

   
     return newsData
}



let gettingCommits = async (e) => { 

      let reposUrl = `https://api.github.com/repos/M-skyi/Test_Valencia_JS/commits?&&per_page=20`;

      const response = await fetch(reposUrl)
      
      const data = await response.json()

      let commitsItem = {
         arrDate: [],
         arrImgUrl: [],
         arrName: [],
         arrEmail: [],
         arrMessage: [],
         arrItemUrl: [],
         arrChangesDate: []
      }

      data.forEach( el => {

         commitsItem.arrDate.push(el.commit.author.date);
         commitsItem.arrImgUrl.push(el.author.avatar_url);
         commitsItem.arrName.push(el.commit.author.name);
         commitsItem.arrEmail.push(el.commit.author.email);
         commitsItem.arrMessage.push(el.commit.message);
         commitsItem.arrItemUrl.push(el.html_url);

      })

      changeDate(commitsItem.arrDate,commitsItem.arrChangesDate)

          let dataCommits = JSON.stringify(commitsItem)
          localStorage.setItem('commitsItem', dataCommits)   
          
      
 }   
           
     gettingCommits()


export {
   gettingNews,
   gettingCommits
};