<template>
  <header class="style padding-left">
    <router-link to="/home">Home</router-link>
    <router-link to="/tag">Tag</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
   .style > a{
     color: #636b6f;
     padding: 0 25px;
     font-size: 13px;
     font-weight: 600;
     letter-spacing: .1rem;
     text-decoration: none;
     text-transform: uppercase;
   }

   .padding-left {
            position: absolute;
            left: 10px;
            top: 18px;
        }
</style>