<template>
  <div>
    <PostCardComponent :post="post" />
  </div>
</template>

<script>
import PostCardComponent from '../components/PostCard.vue';
import axios from 'axios';
export default {
  components: {
    PostCardComponent
  },
    data: function(){
      return{
        post: {}
      }
    },

    methods: {
      getPost(){
        const id = this.$route.params.id
        axios.get(`/api/posts/${id}`).then((response)=>{
          this.post = response;
          console.log(this.post);
          
        })
      }
    },

    created(){
      this.getPost()
    }
}
</script>

<style>

</style>