<script>
import layout from "../../layouts/layout1"
import parent from "./parent"
export default {
   data(){
      return {
         title:"I'm a children title "
      }
   },
   extends:parent,
   components:{
      layout
   },
   beforeCreate(){
      //  调用顺序  父 created -子created , created 调用前
      //  调用顺序  beforeCreate  , data 以及合并 ,created
      console.log("I'm come from child ");
      console.log(this.title);
   }
}
</script>
<template>
   <div>
   <layout>
      11
      {{title}}


   </layout>
   </div>
</template>