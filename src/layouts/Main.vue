<template>
    <div id="background" class="min-h-screen">
        <!-- <div class="fixed bottom-0 left-0 text-green-400 text-m"><strong>PreDevCamp</strong></div> -->
    <!-- <div class="bg-[url(../assets/images/back.png)]"> -->
    <div >
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/profile" class="button" >Profile</router-link>
        <router-link to="/myhome"  class="button">Myfreinds</router-link>
    </div>
        <!-- <router-Link to="/Profile" 
        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">Profile</router-Link> -->
        
    </div>
        <div>
            <h1 class="h1"><strong><ins>Team Teletubbie</ins></strong></h1>
        </div>
            
        <div>
            <!-- <img src="../assets/images/teletub.jpg" alt="tubbies" width="720" height="450" class="ml-96"> -->
            <p class="test2"><strong>PreDevCamp</strong></p>
        </div>

        <div class="font">
            <strong>This is website about Teletubbie Mambers</strong>
            <p>พวกเรากลุ่มเทเลทับบี้ ชอบทำตัวเหมือนเด็ก เน้นเสียงหัวเราะ ทำตัวสบายและสนุกสนาน ทำงานเป็นกลุ่มได้เป็นอย่างดี</p>
        </div >
        <div class="icons">
            <font-awesome-icon icon="fa-brands fa-vuejs " class="text-lime-500" />
            <font-awesome-icon icon="fa-brands fa-html5" class="text-orange-500" />
            <font-awesome-icon icon="fa-brands fa-js" class="text-yellow-300" />
            <font-awesome-icon icon="fa-solid fa-font-awesome " class="text-sky-500" />
            <font-awesome-icon icon="fa-solid fa-code-branch" />
            <font-awesome-icon icon="fa-brands fa-github" class="text-black"/>
        </div>

    <!-- </div> -->
    </div>
</template>
<script>

export default{
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;400&display=swap');


.h1{
    /* display:block; */
    @apply bg-neutral-900 border-4 border-amber-200;
    font-size: 300%;
    color: #FFFFAB;
    text-align: center;
    font-family: 'Prompt', sans-serif;
    margin-left: 35%;
    margin-right: 35%;
    padding: 1%;
    animation: fadeIn 2s;
    /* width: 50%;  */
    
    
}


.button{
    display: inline-block;
    padding: 3px 10px;
    font-size: 100%;
    font-family: 'Prompt', sans-serif;
    color: #FFFFAB;
    text-align: center;
    padding: 2%;
    margin-left: auto;
    animation: fadeIn 3s;
}
.button:hover {background-color: #00838C}

.button:active {
  background-color: #00838C;
  box-shadow: 0 5px #FFFFAB;
  transform: translateY(2px);
  margin-left: auto;
}

.font{
    /* @apply backdrop-blur-sm bg-gray-800/40 
    rounded-lg animate-fadeIn; */
    font-family: 'Prompt', sans-serif;
    display: inline-block;
    justify-content: center;
    align-items: center;
    position: relative;
    /* visibility: hidden; */
    font-size: 210%;
    color: #FFFFAB;
    border:2px solid black;
    padding-block: 20px;
    padding-left: 15px;
    padding-right: 5px;
    margin-top: 50px;
    margin-bottom: auto;
    margin-left: 25%;
    background-color: #003F5F;
    width: 50%; 
    animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
p.test2 {
    @apply absolute bottom-5 left-1;
    writing-mode: vertical-rl; 
    color: #FFFFAB;
    animation: test2move 3s;
    animation-fill-mode: forwards;
}
@keyframes test2move {
  from {top: 0px;}
  to {top: 600px;}
}



#background {
  /* background-image: url(../assets/images/back.png);  */
    background-color: #003F5F;
    background-size: cover;
    background-repeat: no-repeat;
    animation: bgmain 10s infinite;
}
@keyframes bgmain {
  0%   {background: #003F5F;}
  25%  {background: #00617A;}
  50%  {background: #003F5F;}
  75%  {background: #00617A;}
  100% {background: #003F5F;}
}
.icons{
    @apply absolute bottom-5 right-1 w-2/3 mx-auto text-right space-x-3  p-2 mt-5 text-3xl;
    animation: fadeIn 5s;
}

  
</style>
