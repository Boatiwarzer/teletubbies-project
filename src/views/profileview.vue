<template>
    <div class = "profiles">
        <div v-for="member in members" :key="member">
        <profileCard 
        :img = 'member.img'
        :name = "member.name"
        :id = "member.id"
        :nickname = "member.nickname"
        :content = "member.content"
        :birthday = "member.birthday"
        ></profileCard>
        </div>

    </div>
    
    
    
    
</template>
<script>
import profileCard from "../components/profile.vue"
export default{
    data()
    {
        return{
            members: [
                {img : 'https://cdn.discordapp.com/attachments/925320359052451851/1039028567394238504/IMG_0709.jpg',
                name: "Putita Paiboontanasombut",
                id: '6410451245',
                nickname: "bow",
                content: "KU81",
                birthday: "03-08-2001",
            },
            {
            img : 'https://cdn.discordapp.com/attachments/990831156847050752/1039183549179375738/IMG_20221105_193105_371.jpg',
            name: "Puttipong Srina",
            id: '6410450206',
            nickname: "Boat",
            content: "KU81",
            birthday: "24-01-2003",
            },
            {
            img : 'https://cdn.discordapp.com/attachments/925320359052451851/1039030661740249138/IMG_1440.jpg',
            name: "Hataichanok Kladngam",
            id: '6410451512',
            nickname: "Earth",
            content: "KU81",
            birthday: "18-01-2003",
    
            },
            
            

            ],

            // img : '/assets/images/E.jpg',
            // name: "Hataichanok",
            // nickname: "Earth",
            // content: "KU81",
            // birthday: "18-01-2003",
        };
    },
    components : {
        profileCard
    }
}
</script>

<style>
    @import url('htps://fonts.googleapis.com/css2?family=Sriracha&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;400&display=swap');


    .profiles{
        @apply flex items-center justify-center space-x-8 h-screen;
        animation: fadeIn 2s;
        font-family: 'Prompt', sans-serif;

     
    }

    
</style>

