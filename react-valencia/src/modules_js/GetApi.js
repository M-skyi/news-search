
import{} from '../header_modules/HeaderMainSearch'


let apiKey = "53dda3d904814c45bfe91ca26f3c68ff";

let currentDay = new Date()

let topic = "tesla"





const url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${currentDay}&to=${currentDay}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

let gettingNews = async (e) => {

    e.preventDefault()
   
    const response = await fetch(url)
      
    const data = await response.json()

    return data.articles
}

let arr = [];

let tes = gettingNews().then((news) => news.map(el => {
        arr.push(el.title)
    }));

    console.log(arr)




export default gettingNews;