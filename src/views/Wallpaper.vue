<template>
<main>
        <div class="container content">

            <div class="row">
                <div class="col-md-9">
                    <img v-if="wallpaper!=''" :src="path + wallpaper.name" class="img-detail" alt="">

                    <div class="recomment">
                        <div class="wallpaper-recommet">
                            <img v-for="(w,k) in recomments" :key="k" @click="switchWallpaper(w.id)" class="images-recomment" :src="path+w.name" alt="">
                        </div>
                        
                    </div>

                    <form action="" @submit.prevent="handlePostComment">
                        <table class="">
                            <tr>
                                <td><img src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-avatar-ca-tinh.jpg" width='48' height="48" alt=""></td>
                                <td><textarea name="" id="" cols="94" rows="2" v-model="bodycomment"></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="submit" class="btn btn-success" style="margin-left: 5px;">Gửi</button></td>
                            </tr>
                             <tr v-for="(comment,key) in wallpaper.comments" :key="key">
                                <td><img src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/hinh-avatar-ca-tinh.jpg" width='48' height="48" alt=""></td>
                                <td>Noi dung:{{comment.idComment.noidung}}</td>
                                <td>User:{{comment.idComment.OwnerId.username}}</td>
                            </tr>
                            
                        </table>
                    </form>
                </div>

                <div class="col-md-3">
                    <div class="Interact">
                       <span class="buttons" >Like</span>
                       <span class="buttons" @click="handleShare">Share</span>
                       <a :href="pathStatic+wallpaper.name">
                       <span class="buttons" >Download</span></a>
                    </div>

                    <div v-if="isShare" class="share-box" ><a :href="path+wallpaper.name">{{path+wallpaper.name}}</a></div>


                    <div class="border info">
                        <H5>Name:{{wallpaper.name}}</H5>
                        <h6>Kích thước: </h6>
                        <h6>View: {{wallpaper.view}}</h6>
                        <h6>Lượt Download: </h6>
                        <h6>Collection:{{wallpaper._collect}} </h6>
                    </div>
                </div>

            </div>

        </div>
    </main>
</template>

<script>
import WallpaperService from '../services/wallpaper.service'
export default {
    data(){
        return{
            path: 'http://localhost:6996/images/',
            pathStatic: 'http://localhost:6996/api/wallpapers/download/',
            wallpaper:'',
            recomments:[],
            isShare:false,
            bodycomment:null
        }
    },
    methods:{
        async handlePostComment(){
            console.log('dataCommemt', this.bodycomment)
                if(this.bodycomment!=null && this.bodycomment!=""){
                const [err, res] = await this.handle(
                    WallpaperService.createComment(this.$route.params.id, {
                        noidung: this.bodycomment
                    })
                )
                if(err){
                    console.log('loi post comment ')
                }else{
                    console.log('tao comment thanh cong: ', res.data)
                    this.bodycomment =" "
                    this.getWallpaper(this.$route.params.id)
                }
            }
        },

        async getWallpaper(id){
            this.isShare=false
            const [err, res] = await this.handle(
                WallpaperService.get(id )
            )
            if(err){
                console.log(err)
            }else{
                this.wallpaper = res.data.document
                this.recomments = res.data.recomments
                console.log('thanh cong', res.data)
            }
        },
        switchWallpaper(id){
                console.log('id', id)
                this.$router.push({ name: 'Wallpaper', params: {id} })
                this.getWallpaper(id)
                
        },
        handleShare(){
            this.isShare = true
        }
    },
    mounted(){
        this.getWallpaper(this.$route.params.id)
        
    }

}
</script>

<style>


/* Share box */
.share-box{
    border: 2px black solid;
    overflow: hidden;
}
*{
    margin: 0;
    padding: 0;
}

.img-detail{
    width: 780px;
}

.images-recomment{
    width: 32%;
    margin-right: 10px;
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

.about{
    margin-top: 200px;
}

.about h1{
    font-size: 60px;
    margin-left: 20px;
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