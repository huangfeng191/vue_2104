<script>
import Topbar from "../../components/topbar"
import Sidebar from "../../components/sidebar"
export default{
   data(){
      return {}
   },
   components:{
      Topbar,
      Sidebar
   }
}

</script>
<template>
   <div id="layout-wrapper">
    <Topbar />
    <!-- <Sidebar :is-condensed="isMenuCondensed" :type="leftSidebarType" :width="layoutWidth"/> -->
    <Sidebar/>
    <!-- <SidebarDevice :is-condensed="isMenuCondensed" :type="leftSidebarType" :width="layoutWidth"/> -->
    

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
      <!-- End Page-content -->
      <!-- <Footer /> -->
    </div>
    <!-- end main content-->
    
  </div>
</template>