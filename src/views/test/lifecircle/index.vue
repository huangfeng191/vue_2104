<template>
   <div>
      OhOOOOOO: ache {{regard}}
   </div>
</template>
<script>
export default {
   data(){
      return {
            "regard":"I 'm shining!!!!"
      }
   },
   beforeCreate:function(){
      console.log(1);
      debugger;
   },
    created:function(){
      console.log(2);
      debugger;
   },
   beforeMount:function(){
      console.log(3);
      debugger;
   },
   mounted:function(){
      console.log(4);
      debugger;
      setTimeout(() => {
         console.log("I'm destroying");
         //  销毁的时 vue 对象，而不是 已经渲染的数据
         this.$destroy();
      }, 1000);
   },
   beforeDestroy:function(){
      console.log(-1);
      debugger;
   },
   destroyed:function(){
      console.log("-0");
      debugger;
   }
   
}
</script>