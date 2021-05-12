<template >
   <div>
      <b-button variant="danger" @click="setUser" class="mt-3 mx-4">setUser1 </b-button>
   </div>
</template>
<script>
export default{
   data(){
      return {}
   },
   methods:{
      setUser(){
         debugger;
         // this.$store.state.common
         // By default, actions and mutations are still registered under the global namespace - this allows multiple modules to react to the same action/mutation type
         this.$store.dispatch("setName","fengfeng")
      }
   }
}

</script>