<template>

        <main class="container-fluid content">
            <div class="titles text-center">
            <h5>{{$route.params.name}}</h5>
            <p></p>
            </div>

            <div v-if="collects!=[]" class= "row">
                <img v-for="(collect,key) in collects" :key="key" @click="gotoWallpaper(collect.id)" class="images col-md-3" :src="path+collect.name" alt="">
                
            </div>
        </main>
</template>

<script>
import WallpaperService from '../services/wallpaper.service'
    export default {
        data(){
            return {
                collects: [],
                path: 'http://localhost:6996/images/',
            }
        },
        methods:{
            async initalCollect(name){
                const [err, res] = await this.handle(
                    WallpaperService.getCollect(name)
                )
                if(err){
                    console.log('Loi lay collect')
                }else{
                    this.collects = res.data
                    console.log('collect thanh cong', res.data)
                }
            },
            gotoWallpaper(id){
                console.log('id', id)
                this.$router.push({ name: 'Wallpaper', params: { id} })
            }
        },
        watch:{
            
            
            '$route.params.name': {
                handler: function(name) {
                this.initalCollect(name)
                },
            deep: true,
            immediate: true
            }
        },
        mounted(){
            this.initalCollect(this.$route.params.name)
        },
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

.search{
    border-radius: 15px;
    border: black 1px solid;
    padding: 5px;
}

.content{
    margin-top: 80px;
    margin-bottom: 80px;
    padding: 0 50px 0 50px;
}

form tr td{
    padding: 5px;
}

form{
    margin-top: 10px;
}

form tr td textarea{
    margin-top: 5px;
    margin-left: 5px;
}

form tr td img{
    border-radius: 50%;
}

.titles{
    margin-top: 100px;
    margin-bottom: 100px;
}

.recomment{
    margin: 20px 0px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.buttons{
    cursor: pointer;
    background-color: cadetblue;
    border-radius: 20px;
    margin-left: 2%;
    color: white;
    padding: 2px 12px 2px 12px;
}

.Interact{
    margin: 5px 0 20px 0;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 1px grey solid;
    border-top: grey 1px solid;
}

.info{
    background-color: rgba(163, 161, 161,0.1);
    padding: 10px;
}

.images{
    margin-bottom: 30px;
}
</style>