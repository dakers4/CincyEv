<template>

    <header class="header">
        <img src="@/assets/logo.jpeg" alt="logo" class="logo">
        <h1 class="title">Cincy EV</h1>
        <img src="@/assets/profile.png" alt="profile-img" class="profile-img">
        
    </header>

         <div class="search">
         <form class="search-bar">

             <h2 class="form-title">Search Bets</h2>
             <input name="title-input" class="title-input" type="text" placeholder= "Enter search terms" v-model="searchString"/>

            <div id="radio-buttons">
                <div id="radio-all">
                     <input type="radio" name="searchType" value="all" v-model="searchType" checked />
                    <label for="all"> All </label>
                </div>
                <div id="radio-book">
                     <input type="radio" name="searchType" value="book" v-model="searchType" />
                    <label for="book"> Book </label>
                </div>

                <div id="radio-sport">
                    <input type="radio" name="searchType" value="sport" v-model="searchType"/>
                    <label for="sport"> Sport </label>
                </div>

                <div id = "radio-player">
                    <input type="radio" name="searchType" value="player" v-model="searchType"/>
                    <label for="player"> Player </label>
                </div>
            </div>    
            <button class="search-btn" v-on:click="searchMethod">GO</button>
         </form>
        </div>

      
        <table>
           
        <div class="books">

        <h2 class="home-header">EV Bets by Book
            <select> 
            <option value="ev">% EV High to low</option>
            <option value="unit-size">Unit Size</option>
            <option value="book">Book</option>
            </select>
        </h2>
        
            <thead>
                <tr>
                    <th>Book</th>
                    <th>% EV</th>
                    <th>Unit Rec</th>
                </tr>
            </thead>

            <tbody>
                <tr class="book-item">
                <td>
                    <img src="@/assets/bet365.jpeg" alt="365" class="book-logo"/>
                    <h4>365</h4>
                </td>
                <td class="percEV">12 %</td>
                <td class="unitRec">1.5 units</td>
                </tr>

                <tr class="book-item" >
                <td>
                    <img src="@/assets/fanduel.jpeg" alt="fanduel" class="book-logo"/>
                    <h4>FanDuel</h4>
                </td>
                <td class="percEV">12 %</td>
                <td class="unitRec">1.5 units</td>
                </tr>
                
                <tr class="book-item">
                <td>
                    <img src="@/assets/draftkings.png" alt="draft kings" class="book-logo"/>
                    <h4>DraftKings</h4>
                </td>
                <td class="percEV">12 %</td>
                <td class="unitRec">1.5 units</td>
                </tr>

                <tr class="book-item">
                <td>
                    <img src="@/assets/fanatics.jpeg" alt="fanatics" class="book-logo"/>
                    <h4>Fanatics</h4>
                </td>
                <td class="percEV">12 %</td>
                <td class="unitRec">1.5 units</td>
                </tr>

                <tr class="book-item">
                <td>
                    <img src="@/assets/caesars.png" alt="caesars" class="book-logo"/>
                    <h4>Caesars</h4>
                </td>
                <td class="percEV">12 %</td>
                <td class="unitRec">1.5 units</td>
                </tr>

                <tr class="book-item">
                <td>
                    <img src="@/assets/espnbet.png" alt="espnbet" class="book-logo"/>
                    <h4>ESPNBet</h4>
                </td>
                <td class="percEV">12 %</td>
                <td class="unitRec">1.5 units</td>
                </tr>
            
        </tbody>
        </div>
    </table>


    <footer> 
        <p class="head-1">About Us</p>
        <p class="head-2">EV Betting Guide</p>
    </footer>

</template>


<style scoped>
.body{
    justify-content: flex-start;
    align-content: flex-start;
}

.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    padding-top: 0;
    padding-left: 0;
    background-color: rgb(9, 9, 99);
    color: white;
    justify-content: space-between;
    align-items: center;
}

/* .books {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding-top: 6%;
    margin: 0;
} */

.books h3 {
    margin-top: 15px;
    font-size: 1.2em;
    color: white;
}


.form-title{
    color: white;
    padding-top: 10px;
}

.title {
    color: white;
    justify-content: center;
    align-items: center;
    padding-right: 40%;
    font-size: 1.5em;
}

.logo{
    height: 5vh;
    width: auto;
    padding-right: 0%;
}

/* .book-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
} */

.percentages{
    display: flex;
    flex-direction: column;
}

.book-logo {
    width: 20px;
    height: auto;
    margin-right: 10px; 
}

h3 {
    padding-left: 10px;
}

#radio-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 1%;
  padding-bottom: 1%;
}

#radio-book, #radio-sport, #radio-player{
    padding-right: 10px;
    padding-bottom: 10px;
}

.search{
    padding-top: 1vh ;
    justify-content: center;
    align-items: center;
}

.search-btn {
  background-color: #4c94f6;
  color: white;
  font-family: monospace;
  border: none;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius: 10px;
  cursor: pointer;
}  

.home-header {
    color: white;
    justify-content: space-around;
    text-decoration: underline;
}

.profile-img {
    height: 3vh;
    width: auto;
    border-radius: 100%; 
    position: absolute;
    top: 12px;
    right: 20px;
    cursor: pointer;
}

.footer{

    height: 5vh;
    display: flex;
    flex-direction: row;
    padding-right: 20%;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10%;
}

</style>


<script>

import service from '../services/rapidapiservice'


export default {
    name: 'HomePage',
    data (){
        return {
                searchType:'',
                searchString: '',
                results: [] 

         }
    },
    created(){
        service.getOdds()
        .then((response)=>{
            console.log(response)
        })
    }, 
    methods: {
        searchMethod(){
            this.$router.push('/results');
            console.log(this.searchType + " " + this.searchString);

            service.getOdds(this.searchType, this.searchString)
            .then((response) => {
                    this.results = response.data; 
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                });
           
        }
    }
};
</script>