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

<style scoped>
ul{
  padding: 50px;
   border: 1px solid black;
}
li{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
 

}
li img{
  width:200px;
  height:200px;
}
li p{
  font-size: 16px;

}
li button{
  width: 100px;
  height: 30px;
}
</style>
