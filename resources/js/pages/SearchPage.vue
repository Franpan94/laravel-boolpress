<template>
    
        <div class="text-center ms_pt-6">
            <div class="col-12">
                <input type="text" 
                  placeholder="Inserisci titolo post" v-model.trim="word"
                  @keyup.enter='searchPosts(word)'
                >
                <button @click='searchPosts(word)' class="btn btn-success">Cerca</button>
            </div>
            <div v-if="posts.length > 0">
                <div v-for="post in posts" :key="post.id" class="d-flex justify-content-center pb-3">
                   <div class="col-10 ms_pt-6">
                      <h4 class="font-weight-bold pt-5">{{post.title}}</h4>
                       <img :src="validURL(post.post_image) ? post.post_image : '/storage/' + post.post_image" :alt="post.title" class="w-50 pt-2 pb-2">
                      <p class="pt-2">{{ post.post_content }}</p>
                      <span>Caricato in data: {{ post.post_date }}</span><br/>
                      <span>Utente: {{ post.user.name }}</span>
                   </div>
               </div>
            </div>
            <div v-else class="ms_pt-4">
                <h1>Inserisci un input valido</h1>
            </div>
        </div>
    
  </template>

<script>
import axios from 'axios';
export default {
    data: function(){
        return{
            word: '',
            posts:[]
        }
    },
    methods: {
        getPosts(){
            axios.get('/api/posts/search' + this.word).then((response)=>{
                this.posts = response.data.results;
                console.log(this.posts)
            });
        },

        searchPosts(){
            if(this.word != ''){
                this.getPosts(this.word);
            }
        },

        validURL(str) {
           const regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
           if(!regex .test(str)) {
              return false;
            } else return true;
        }
    }
}
</script>

<style scoped>
   .ms_pt-4{
      padding-top: 4rem;
   }
</style>