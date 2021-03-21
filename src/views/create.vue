<template>
<div>
    <input type="text" v-model='titre'>titre
    <input type="text" v-model='metadescription'>metadescription
    <input type="text" v-model='metatitle' >metatitle
    <input type="text" v-model='img' >img
    <textarea name="" id="" cols="30" rows="10" v-model='content'></textarea>
    <button @click="createpost">valider l'article</button>
</div>
    
</template>

<script>
export default {
    methods:{
        createpost(){
            this.$store.dispatch('createpost',{
                titre:this.titre,
                metadescription:this.metadescription,
                metatitle:this.metatitle,
                img:this.img,
                content:this.content,

            })
        }
    }
}
</script>
<style scoped>

</style>