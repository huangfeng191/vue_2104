<script>
import Layout1 from "./layout1";
export default {
   data(){
      return {}
   },
   components:{
      Layout1
   }
}
</script>
<template>
  <div>
    <Layout1>
       <slot />
    </Layout1>

  </div>
</template>
