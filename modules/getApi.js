
let formSearchInput = document.querySelector(".form-search__input-text");

 const todaysDate = new Date().toLocaleDateString('sv-SE');
const fromDate = new Date(new Date().getTime() - (6 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const sixthDayDate = new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const fifthDayDate = new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const fourthDayDate = new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const thirdDayDate = new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const secondDayDate = new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');

   let apiKey = "53dda3d904814c45bfe91ca26f3c68ff";

    
 export async function getApiNews() {

  let topic = formSearchInput.value;

  localStorage.setItem('topicNews', topic);

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fromDate}&to=${todaysDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
   
   let seventhDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fromDate}&to=${fromDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let sixthDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${sixthDayDate}&to=${sixthDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let fifthDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fifthDayDate}&to=${fifthDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let fourthDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fourthDayDate}&to=${fourthDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let thirdDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${thirdDayDate}&to=${thirdDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let secondDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${secondDayDate}&to=${secondDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let firstDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${todaysDate}&to=${todaysDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let dayArr = ['firstDay','secondDay','thirdDay','fourthDay','fifthDay','sixthDay','seventhDay'];
  
   function savedlocalStorage(dayItem) {

      fetch(dayItem).then((res) => {
         return res.json()
      }).then((item) => {
         let data = item.articles;
         
         for (let i = 0; i < dayArr.length; i++) {
         
            if (dayItem === firstDay) {
               localStorage.setItem(`${dayArr[0]}`, JSON.stringify(data)); 
            }else if (dayItem === secondDay) {
               localStorage.setItem(`${dayArr[1]}`, JSON.stringify(data));
            }else if (dayItem === thirdDay) {
               localStorage.setItem(`${dayArr[2]}`, JSON.stringify(data));
            }else if (dayItem === fourthDay) {
               localStorage.setItem(`${dayArr[3]}`, JSON.stringify(data));
            }else if (dayItem === fifthDay) {
               localStorage.setItem(`${dayArr[4]}`, JSON.stringify(data));
            }else if (dayItem === sixthDay) {
               localStorage.setItem(`${dayArr[5]}`, JSON.stringify(data));
            }else if (dayItem === seventhDay) {
               localStorage.setItem(`${dayArr[6]}`, JSON.stringify(data));
            }
         }
       })
       }
 
       savedlocalStorage(firstDay)
       savedlocalStorage(secondDay)
       savedlocalStorage(thirdDay)
       savedlocalStorage(fourthDay)
       savedlocalStorage(fifthDay)
       savedlocalStorage(sixthDay)
       savedlocalStorage(seventhDay)

      const response = await fetch(url)
      
      const data = await response.json()

      localStorage.setItem('url', JSON.stringify(data));

      return data.articles

 }

//   GET GITHUB COMMITS

 let reposUrl = `https://api.github.com/repos/M-skyi/Test_Valencia_JS/commits`;

 export async function getApiGitHub() {

   const response = await fetch(reposUrl)
      
   const data = await response.json()

   return data

 }