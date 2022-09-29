<template>
  <main>
    <h3 class="text-center pt-2">Post</h3>
    <input placeholder="Cerca post"
            class="pt-1 pb-2"
            type="text"
            v-model.trim="word"
            @keyup="getFilterPosts"
          />
          <button  
            type="button"
            class="btn btn-success"
            @click="getFilterPosts"
          >
            Cerca
          </button>
    <div class="container">
      <div class="row">
        <PostCardComponent v-for="post in posts" :key="post.id" :post='post' />
      </div>
    </div>
    <h1 class="pt-3">Tag</h1>
    <TagComponent v-for="tag in tags" :key="tag.id" :tag='tag' />
  </main>
</template>

<script>
import PostCardComponent from './PostCard.vue';
import TagComponent from './Tag.vue';
import axios from 'axios';

export default {
     components: {
        PostCardComponent,
        TagComponent
     },
     data: function(){
        return{
            posts: [],
            word: '',
            tags: [],
        }
     },
     methods: {
        getPostsAndTags(){
            axios.get('/api/posts').then((response)=>{
                console.log(response.data.results);
                this.posts = response.data.results;
            })
            axios.get('/api/tags').then((response)=>{
                console.log(response.data.results);
                this.tags = response.data.results;
              })
        },

       

        
     },
     created(){
        this.getPostsAndTags();
     }
}
</script>

<style>

</style>