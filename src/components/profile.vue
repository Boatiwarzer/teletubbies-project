<template>
    <div class="profilecolor">
        <div class="boxs">
            <div class="bg-contain bg-center w-96 h-96 scale-70 rounded-full m-2" :style="getUrlImage(img)"></div>
            <div>
                <strong> Name :</strong>  {{name}}
            </div>
            <div>
                <strong> Id :</strong>  {{id}}
            </div>
            <div>
                <strong> Nickname :</strong>  {{nickname}}
            </div>
            <div>
                <strong> Content :</strong> {{content}}
            </div>
            <div>
                <strong> Birthday :</strong> {{birthday}}
            </div>
            <div class=" mx-auto text-right space-x-3 border-t-2 p-2 mt-5">
            <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl text-red-500" />
            <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl text-blue-400" />
            <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl text-blue-800" />
            <font-awesome-icon icon="fa-brands fa-github" class="text-2xl text-black" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props : {
        img:{
            type : String,
            default: "/assets/images/E.jpg"
        },
        name : {
            type : String,
            default : "--------"
        },
        id : {
            type : String,
            default : "--------"
        },
        nickname : {
            type : String,
            default : "---------"
        },
        content : {
            type : String,
            default : "----------"
        },
        birthday : {
            type : String,
            default : "xx - xx - xxxx"
        },
    },
    methods:
    {
         getUrlImage(imagesPath){
            return { 'background-image': 'url("' + imagesPath + '")' };

         },
    }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@200;400&display=swap');

.profilecolor{
    @apply text-teal-800 text-xl inline-block ml-2  max-w-md 
     bg-amber-200 rounded-lg border-0 border-fuchsia-100 hover:border-8 shadow-md
      hover:bg-amber-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700;
    font-family: 'Mali', cursive;

      
    
}
.boxs{
    @apply ml-2 p-4 
}
</style>