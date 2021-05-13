<template>
  <div>
      <b-button variant="danger" @click="get" class="mt-3 mx-4">get </b-button>
   </div>
</template>
<script>



export default{
   data(){
      return {

      }
   },
   methods:{
      get(){ 
         
            this.$http.post('/userInfo/getUserInfoDetail?id=aa8ffeb9bef34772adff5394176e0d1f')
            .then(function (response) {
               // handle success
               console.log(response);
            })
            .catch(function (error) {
               // handle error
               console.log(error);
            })
            .then(function () {
               // always executed
            });
      }
   }
}

</script>