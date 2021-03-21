<template>
  <div class="blog">
     <ul v-for="(post,index) in posts" :key="(post, index)" >
       <router-link :to="'/blog/'+index">
     <li>
       <img :src="post.img" alt="">
       <p>{{ post.metadescription }}</p>
     </li>
     </router-link>
   </ul>
  </div>
</template>
<script>
export default {
  computed:{
    posts(){
      return this.$store.state.post
    }
  },
}
</script>
