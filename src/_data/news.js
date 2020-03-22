const axios = require("axios");
const countries = require("./countries.json");

require("dotenv").config();

async function getNews(country){
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?apiKey=${process.env.NEWS_API_KEY}&country=${country}`);
        console.log(response);

        return {
            "country":country,
            "articles":response.data.articles
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = async function(){
    var newsPromises = countries.map(getNews);
    return Promise.all(newsPromises).then(newsObjects=>{
        console.log('newsObjects:', newsObjects);
        return [].concat.apply([],newsObjects);
    });
    
    // try {
    //     const response = await axios.get(`http://newsapi.org/v2/top-headlines?apiKey=${process.env.NEWS_API_KEY}&country=us`);
    //     console.log(response);

    //     return response.data;
        
    // } catch (error) {
    //     console.log(error);
    // }
};