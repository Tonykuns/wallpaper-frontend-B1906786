<template>
    <div>
        
        <main class="container-fluid content">
            <div class="titles text-center">
            <h5>4k Wallpapers</h5>
            <p>Find a HD wallpaper for your Mac, Windows, Desktop. We hand-picked all photos to ensure that they are high-quality and free.</p>
            <p></p>
            </div>

            <div class= "row">
                <img v-for="(w,key) in wallpapers" :key="key"  class="images col-md-3" :src="path+w.name" alt="" @click="gotoWallpaper(w.id)" >
                
            </div>
        </main>

    </div>
</template>

<script>
    import WallpaperService from '../services/wallpaper.service'
    export default{
        data(){
            return {
                wallpapers:null,
                path:'http://localhost:6996/images/'
            }
        },
        methods:{
            async khoiTaoWallpaper(){
                const [err, res] = await this.handle(
                    WallpaperService.getAll()
                )
                if(err){
                    console.log(err)
                }else{
                    this.wallpapers = res.data
                    console.log('wall', res.data)
                }
            },
            gotoWallpaper(id){
                console.log('id', id)
                this.$router.push({ name: 'Wallpaper', params: { id} })
            }
        },
        mounted(){
            this.khoiTaoWallpaper()
        }
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