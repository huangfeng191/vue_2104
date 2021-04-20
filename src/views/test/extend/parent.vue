<script>

export default{
   data(){
      return {
        title:"I'm a parent title "
      }
   },
   beforeCreate(){
      console.log("I'm come from parent ")
        console.log(this.title);
   }
}

</script>
<template>
   <div>
      {{title}}
   </div>
</template>