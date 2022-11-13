
<template>
    <component :is="layout">
      <RouterView />
    </component>
  </template>
  
  
   <script>
   import Main from "@/layouts/Main.vue";
   import Default from "@/layouts/Default.vue";
   export default{
      components:
      {
        Main,
        Default
      },
      computed:{
        layout()
        {
          console.log(this.$route.meta);
          return this.$route.meta.layout || Default;
        },
      },
   };
  </script>