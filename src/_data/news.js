const { default: axios } = require("axios");
require('dotenv').config();


module.exports = async function getUser() {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5ce536a78eb4fe5a3c1972210668c3d');
    return response.data;
  } catch (error) {
    console.error(error);
  }

};