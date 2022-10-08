<template>
  <main>
    <div v-if="isLoading">
      <LoaderComponent />
    </div>
    <div v-else class="container text-center">
      <div class="row">
        <PostCard v-for="post in posts" :key="post.id" :post='post' />
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from './PostCard.vue';
import LoaderComponent from './LoaderComponent.vue';
import axios from 'axios';

export default {
     components: {
        PostCard,
        LoaderComponent
     },
     data: function(){
        return{
          posts: [],
          isLoading: true
        }
     },
     methods: {
        getPosts(){
            axios.get('/api/posts').then((response)=>{
                this.posts = response.data.results;
                this.isLoading = false;
            })
        },

      },
     created(){
        this.getPosts();
     }
}
</script>

<style>
  
</style>