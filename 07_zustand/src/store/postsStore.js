import {create} from "zustand";

export const usePostsStore = create ((set)=> ({
    posts:[],
    loading:false,
    error:null,
    fetchPosts: async () => {
        set({loading : true , error: null})
        try{
          
           const res = await fetch(
              "https://jsonplaceholder.typicode.com/posts?_limit=5"
           );

           if (!res.ok) {
              throw new Error("Failed to fetch posts");
              }

           const data = await res.json();
           set ({posts: data , loading:false})

        } catch(error){
           set({ error: error.message || 'Failed to fetch posts', loading: false });

        }
    }
}))






