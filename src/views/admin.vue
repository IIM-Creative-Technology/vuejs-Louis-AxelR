<template>
  <div class="admin">
    <router-link to="/create">
    <button>créer un page</button>
    </router-link>
<div>
   <ul v-for="post in posts" :key="post" >
     <li>
       <img :src="post.img" alt="">
       <p>{{ post.metadescription }}</p>
       <button @click="trash">supprimer</button>
     </li>
   </ul>
</div>
  </div>
</template>

<script>



export default {
  methods:{
   trash(index){
     this.$store.commit("deletepost", index)
   }
  },
  computed:{
    posts(){
      return this.$store.state.post
    }
  },
  name: 'admin',
  components: {
   
  }
}
</script>
