<template>

    <header class="header">
        <img src="@/assets/logo.jpeg" alt="logo" class="logo">

        <img src="@/assets/profile.png" alt="profile-img" class="profile-img">
        
    </header>
 
        <h1 class="title">Cincy EV</h1>
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
                     <input type="radio" name="searchType" value="book" v-model="searchType" checked />
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

       
        <div class="books">
        <h2>Your Bets by Book</h2>

            <div class="book-item">
            <!-- <button class="btn" > -->
            <img src="@/assets/bet365.jpeg" alt="365" class="book-logo"/>
            <!-- </button> -->
            <h3>Bet 365</h3>
            <ul> 
            </ul>
            </div>


            <div class="book-item">
                <!-- <button class="btn"> -->
                <img src="@/assets/fanduel.jpeg" alt="fanduel" class="book-logo"/>
                <!-- </button> -->
            <h3>FanDuel</h3>
            <ul>

            </ul>
            </div>

            <div class="book-item">
                <!-- <button class="btn"> -->
                <img src="@/assets/draftkings.png" alt="draft kings" class="book-logo"/>
                <!-- </button> -->
            <h3>DraftKings</h3>
            <ul>

            </ul>
            </div>

            <div class="book-item">
                <!-- <button class="btn"> -->
                <img src="@/assets/fanatics.jpeg" alt="fanatics" class="book-logo"/>
                <!-- </button> -->
            <h3>Fanatics</h3>
            <ul>

            </ul>
            </div>

            <div class="book-item">
                <!-- <button class="btn"> -->
                <img src="@/assets/caesars.png" alt="caesars" class="book-logo"/>
                <!-- </button> -->
            <h3>Caesars</h3>
            <ul>

            </ul>
            </div>

            <div class="book-item">
                <!-- <button class="btn"> -->
                <img src="@/assets/espnbet.png" alt="espnbet" class="book-logo"/>
                <!-- </button> -->
            <h3>ESPNBet</h3>
            <ul>

            </ul>
            </div>

        </div>


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
    width: 100%;
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

.books {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding-top: 6%;
    margin: 0;
}

.books h3 {
    margin-top: 15px;
    font-size: 1.2em;
    color: white;
}

.books ul {
    list-style-type: none; 
    padding: 0;
    margin: 0 0 15px 20px; 
}

.title {
    color: white;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
}

.logo{
    height: 5vh;
    width: auto;
}

.book-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
}

.book-logo {
    width: 60px;
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
    justify-content: center;
    align-items: center;
}

.search-btn {
  background-color: #4c94f6;
  color: white;
  font-family: monospace;
  border: none;
  padding: 5%;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius: 10px;
  cursor: pointer;
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

.head-2{
    padding-right: 20%;
}

.footer{
    display: flex;
    flex-direction: row;
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
        searchMethod(event){
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