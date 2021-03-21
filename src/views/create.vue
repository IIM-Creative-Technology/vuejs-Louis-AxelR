<template>
<div>
    <div>
    <label for="">titre</label>
    <input type="text" v-model='titre'>
    </div>
    <br>
    <div>
    <label for="">metadescription</label>
    <input type="text" v-model='metadescription'>
    </div>
    <br>
    <div>
    <label for="">metatitle</label>
    <input type="text" v-model='metatitle' >
    </div>
    <div>
    <label for="">img</label>
    <input type="text" v-model.trim='img'>
    </div>
    <br>
    <textarea name="" id="" cols="30" rows="10" v-model='content'></textarea>
    <br>
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

div{
    display: flex;
    flex-direction: column;
}

button{
    width: 150px;
    height: 100px;
}
</style>