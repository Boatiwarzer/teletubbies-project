<template>
  <div class="profile">
    <div v-for="profile in profiles" :key="profile.id" class="profilecolor2">
      <div class="boxs">
        <div>
          <img class="bg-contain bg-center w-96 h-96 scale-70 rounded-full" :src="profile.Img" alt="..."/>
        </div>
        <div>
        Name: {{profile.nickname}}
      </div>
      <div>
        Content: {{profile.content}}
      </div>
        Birthday: {{profile.birthday}}
      </div>
    </div>
      
  </div>
</template>

<script>
import { useProfilesStore } from '../stores/profile3Teletubbie';

export default {
    data() {
      return {
        profiles: [],
      };
    },
  async mounted(){
    await useProfilesStore().fetchData();
    this.profiles = useProfilesStore().getProfiles;
  },

  
}
</script>
<style>
.profilecolor2{
    @apply text-teal-800 text-xl inline-block m-2 p-2 max-w-md 
     bg-amber-200 rounded-lg border-2 border-fuchsia-100 shadow-md
      hover:bg-amber-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700;
}
.boxs{
    @apply m-1 p-1 ;
}
.profile{
    @apply  m-8 p-4 space-x-6 h-full w-full;
    animation: fadeIn 2s;
     
}
</style>

