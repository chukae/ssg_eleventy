const axios = require("axios");

require("dotenv").config();


module.exports = async function(){
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?apiKey=${process.env.API_KEY}&country=us`);
        console.log(response);

        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}