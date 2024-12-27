import axios from 'axios'

// const config = {
//     'x-rapidapi-host' : 'odds-api1.p.rapidapi.com',
//     'x-rapidapi-key' : import.meta.env.VITE_API_KEY

// }

// const http = axios.create ({
//     baseURL : import.meta.env.VITE_API_URL
// })

// export default {
//     getOdds (){
//         return http.request('',config)
//     }
// }

const options = {
    method: 'GET',
    url: import.meta.env.VITE_API_URL,
    params: {
      eventId: 'id100001750850201',
      bookmakers: 'bet365,pinnacle,draftkings,betsson,ladbrokes',
      oddsFormat: 'decimal',
      raw: 'false'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'odds-api1.p.rapidapi.com'
    }
  };
  
  
  export default {
      getOdds(){
          return axios.request(options);
      }
  }