<template>
  <div class="col-4">
       <div class="pt-5">
          <h6 class="font-weight-bold">{{post.title}}</h6>
          <img :src="validURL(post.post_image) ? post.post_image : 'storage/' + post.post_image" :alt="post.title" class="w-50 pt-2 pb-2">
          <p class="pt-2">{{post.post_content.substring(0, 150)}}...altro</p>
       </div>
  </div>
</template>

<script>

export default {
   props: ['post'],
   methods:{
        validURL(str) {
           const regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
           if(!regex .test(str)) {
              return false;
            } else return true;
  
        }
   },
}
</script>

<style>

</style>