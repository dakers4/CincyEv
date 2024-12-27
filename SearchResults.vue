<header>


</header>

<body>
    
</body>



<style>

</style>



<script>
import service from '../services/rapidapiservice'
export default {
    name: 'HomePage',
    created(){
        service.getOdds()
        .then((response)=>{
            console.log(response)
        })
    }
};
</script>
