<template>
  <main>
    <div v-if="isLoading">
      <LoaderComponent />
    </div>
    <div v-else class="ms_pt-6 text-center container pb-3">
      <div class="row">
        <div class="col-12">
          <h1 class="font-weight-bold">{{ post.title }}</h1>
          <img
            :src="validURL(post.post_image) ? post.post_image : '/storage/' + post.post_image"
            :alt="post.title"
            class="w-50 pt-2 pb-2"
          />
          <p class="pt-2">{{ post.post_content }}</p>
          <span>Caricato in data: {{ post.post_date }}</span
          ><br />
          <span>Utente: {{ post.user.name }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LoaderComponent from "../components/LoaderComponent.vue";
import axios from "axios";
export default {
  components: {
    LoaderComponent,
  },
  data: function () {
    return {
      isLoading: true,
      post: {
        user: "",
      },
    };
  },

  methods: {
    getPost() {
      const id = this.$route.params.id;
      axios.get(`/api/posts/${id}`).then((response) => {
        this.post = response.data.result;
        console.log(this.post);
        this.isLoading = false;
      });
    },

    validURL(str) {
      const regex =
        /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(str)) {
        return false;
      } else return true;
    },
  },

  created() {
    this.getPost();
  },
};
</script>

<style scoped>
.ms_pt-6 {
  padding-top: 6rem;
}
</style>