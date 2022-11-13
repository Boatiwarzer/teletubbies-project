import { defineStore } from 'pinia';
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

export const useProfilesStore = defineStore('profiles', {
    state: () => ({
        profiles: ({profiles: [] })
    }),
    getters:{
        getProfiles: (state) => {
            return state.profiles
        }
    },
    actions:{
        async fetchData() {
            const queryData = await getDocs(collection(db, 'profiles'));
            this.profiles = queryData.docs.map((doc) => doc.data());          // queryData.forEach(doc => {
            //     console.log(doc.data());
                
            // });

        }

    }

});