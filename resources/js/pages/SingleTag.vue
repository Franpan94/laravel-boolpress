<template>
  <div class="container text-center pt-3">
    <div v-if="isLoading">
       <LoaderComponent />
    </div>
    <div v-else>
        <h1>#{{tag.name}}</h1>
        <div v-if="tag.posts.length > 0">
            <div v-for="post in tag.posts" :key="post.id">
                <div class="row">
                    <div class="col-12 pb-4">
                        <h1 class="font-weight-bold">{{ post.title }}</h1>
                        <img :src="validURL(post.post_image) ? post.post_image : '/storage/' + post.post_image"
                           :alt="post.title"
                           class="w-50 pt-2 pb-2"
                        />
                        <p class="pt-2">{{ post.post_content }}</p>
                        <span>Caricato in data: {{ post.post_date }}</span><br />
                        <span>Utente: {{ post.user.name }}</span>
                   </div>
               </div>
           </div>
       </div>
    <div v-else class="pt-5">
        <h4>Non esiste nessun post contenente questo tag</h4>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LoaderComponent from '../components/LoaderComponent.vue'
export default {
    components:{
        LoaderComponent
    },
   data: function(){
    return{
        tag: {},
        isLoading: true
    }
   },
   methods: {
     getTag(){
        const id = this.$route.params.id;
        axios.get(`/api/tags/${id}`).then((response) => {
          this.tag = response.data.result;
          this.isLoading = false;
        })
     },

     validURL(str) {
      const regex =
        /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(str)) {
        return false;
      } else return true;
    },
   },

   created(){
    this.getTag();
   }
}
</script>

<style>

</style>