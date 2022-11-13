<template>
    <div class="profilecolor">
        <div class="boxs">
        <!-- <div class="flip">
            <div class="flip-content">
                <div class="flip-front">
                    <div class="bg-contain bg-center w-96 h-96 scale-70 rounded-full " :style="getUrlImage(img)"></div>
                        <div><strong>Name :</strong>  {{name}}</div>
                        <div><strong> Nickname :</strong>  {{nickname}}</div>
                        <div><strong> Content :</strong> {{content}}</div>
                        <div><strong> Birthday :</strong> {{birthday}}</div>
                        <div class="w-2/3 mx-auto text-right space-x-3 border-t-2 p-2 mt-5">
                            <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl text-red-500" />
                            <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl text-blue-400" />
                            <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl text-blue-800" />
                            <font-awesome-icon icon="fa-brands fa-github" class="text-2xl text-black" />
                        </div>
                </div>
            <div class="flip-back">
                <strong>BILL MURRAY</strong>
            </div>  
            </div>
        </div>
        </div>
        </div> -->
            <!-- <img class="rounded-full" src="../assets/images/E.jpg" alt="lisa" width="250" height="100" > -->
            <div class="bg-contain bg-center w-96 h-96 scale-70 rounded-full " :style="getUrlImage(img)"></div>
            <div>
                <strong>Name :</strong>  {{name}}
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
            <div class="w-2/3 mx-auto text-right space-x-3 border-t-2 p-2 mt-5">
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
        //     return {'background-image': 'url("./src'+ imagesPath + '")' };
            return { 'background-image': 'url("' + imagesPath + '")' };

         },
    }
};
</script>
<style>
.profilecolor{
    @apply text-teal-800 text-2xl inline-block ml-2  max-w-md 
     bg-amber-200 rounded-lg border-0 border-fuchsia-100 hover:border-8 shadow-md
      hover:bg-amber-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700;
}
.boxs{
    @apply ml-2 p-4 
}
.flip {
  width: 150px;
  height: 150px;   
  text-align: center;
  perspective: 600px;  
}
.flip-content {
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}
.flip:hover .flip-content {
  transform: rotateY(180deg);
  transition: transform 0.3s;
}
.flip-front, .flip-back {
  position: absolute;
  height: 100%;
  width: 100%;
  line-height: 150px;
  backface-visibility: hidden;  
  color: #fff;  
  background-color: lightseagreen;
  border: 6px solid lightcoral;
  box-shadow: 6px 6px lightseagreen;
}
.flip-back {
  transform: rotateY(180deg);
  border: 6px solid lightseagreen;
  box-shadow: 6px 6px lightcoral;
}
</style>