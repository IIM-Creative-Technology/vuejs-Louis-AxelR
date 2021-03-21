<template>
    <div>
        <img :src="posts[$route.params.id].img" :alt="posts[$route.params.id].titre">
        <h2>{{posts[$route.params.id].titre}}</h2>
        <p>{{posts[$route.params.id].content}}</p>
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
<style scoped>

</style>