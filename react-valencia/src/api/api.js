
    let apiKey = "398b8b05cfd74c32a83a9f12f6118f07";

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

        let arrTitle = [];
        let arrDescription = [];
        let arrImg = [];
        let arrUrl = [];
        let arrPublishedAt = [];
        let arrAuthor = [];
        

     newsData.forEach(el=> {
        arrTitle.push(el.title);
        arrDescription.push(el.description);
        arrImg.push(el.urlToImage);
        arrUrl.push(el.url);
        arrPublishedAt.push(el.publishedAt);
        arrAuthor.push(el.author);
     });  
     
     console.log(arrTitle )

     return newsData
}





        

        
    

export default gettingNews;