<template>
  <section>
    <div v-if="isLoading">
      <LoaderComponent />
    </div>
    <div v-else class="container text-center">
      <div class="row">
        <div class="col-4 ms_pt-6" v-for="tag in tags" :key="tag.id">
          <h3>#{{tag.name}}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoaderComponent from '../components/LoaderComponent.vue'
import axios from 'axios';
export default {
    components: {
      LoaderComponent
    },
    data: function(){
      return {
        tags: [],
        isLoading: true 
      }
    },

    methods: {
        getTags(){
            axios.get('/api/tags').then((response)=>{
                this.tags = response.data.results;
                this.isLoading = false;
            })
        },

       

        
     },
     created(){
        this.getTags();
     }
}
</script>

<style scoped>
  .ms_pt-6{
      padding-top: 6rem;
   }
</style>