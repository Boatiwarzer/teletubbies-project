<template>
    <div class = "profiles">
        <div v-for="member in members" :key="member">
        <profileCard 
        :img = 'member.img'
        :name = "member.name"
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
                nickname: "bow",
                content: "KU81",
                birthday: "03-08-2001",
            },
            {
            img : 'https://cdn.discordapp.com/attachments/990831156847050752/1039183549179375738/IMG_20221105_193105_371.jpg',
            name: "Puttipong Srina",
            nickname: "Boat",
            content: "KU81",
            birthday: "24-01-2003",
            },
            {
            img : 'https://cdn.discordapp.com/attachments/925320359052451851/1039030661740249138/IMG_1440.jpg',
            name: "Hataichanok Kladngam",
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

    .profiles{
        @apply flex items-center justify-center space-x-8 h-screen;
        animation: fadeIn 2s;
     
    }

    
</style>

