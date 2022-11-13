<template>
    
    <div class="head2">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/profile" class="button" >Profile</router-link>
        <router-link to="/myhome" class="button" >Myfreinds</router-link>
        <div class="fontDefault">
            Profile Teletubbie
        </div>
        
        <slot></slot>
    </div>
    
    
    
</template>
<script>

export default{
   
}
</script>

<style>
.fontDefault{
    @apply bg-neutral-900 text-center text-3xl border-4 border-amber-200 ;
    margin-left: 35%;
    margin-right: 35%;
    padding: 1%;
    color: #FFFFAB;
    font-family: 'Mali', cursive;
    animation: fadeIn 4s;
}
.button{
    display: inline-block;
    padding: 3px 10px;
    font-size: 100%;
    font-family: 'Mali', cursive;
    color: #FFFFAB;
    text-align: center;
    padding: 2%;
    margin-left: auto;
}
.button:hover {background-color: #00838C}

.button:active {
  background-color: #00838C;
  box-shadow: 0 5px #FFFFAB;
  transform: translateY(2px);
  margin-left: auto;
}
.head2{
    
    background-color: #00617A;
    background-repeat: no-repeat;
}


</style>