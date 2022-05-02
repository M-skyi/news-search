
    let apiKey = "53dda3d904814c45bfe91ca26f3c68ff";

    let currentDay = new Date();

    let topic = [];

    export let getInputValue = (newsTopic) => {
        topic.push(newsTopic);
    } 
    
      function name(params) {
         if (topic === "") {
            alert("o");
          }
          console.log(topic)
      }
  
   
   
    
    let gettingNews = async (e) => {

    

   //  e.preventDefault();

    
   

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
     
     console.log(newsData )

     
}

        

        
    

export default gettingNews;