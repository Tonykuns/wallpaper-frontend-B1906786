<template>
  <header>
            <nav class="navbar navbar-expand-lg justify-content-between navbar-dark bg-dark row fixed-top">
                <div class="col-md-9">
                    <div class="row">
                        <router-link to='/'>
                        <span class="navbar-brand col-md-2" >4K Wallpapers</span>
                        </router-link>
                        <form class="form-inline my-2 my-lg-0 col-md-9" @submit.prevent="handleSearch">
                            <input class="form-control mr-sm-2 col-md-9" v-model="search" type="search" placeholder="Search Photos">
                        </form>
                    </div>  
                </div>
            
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end col-md-3" id="navbarNav">
                    <ul class="navbar-nav">

                    <li class="nav-item dropdown">
                        <a class="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Collection
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            
                        
                        <router-link to='/collect/2dGirl'>
                            <li><a class="dropdown-item" href="#">2DGirl</a></li>
                        </router-link>
                        
                        <router-link to='/collect/Vehicle'>
                            <li><a class="dropdown-item" href="#">Vehicle</a></li>
                        </router-link>
                        <router-link to='/collect/Animal'>
                            <li><a class="dropdown-item" href="#">Animal</a></li>
                        </router-link>
                        <router-link to='/collect/Spectacle'>
                            <li><a class="dropdown-item" href="#">Spectacle</a></li>
                        </router-link>




                        </ul>
                    </li>
                    <router-link to='/about'>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    </router-link>
                
                    <li v-if='userLoggedIn'  class="nav-item">
                        <span class="nav-link">{{loggedInUser.username}}</span>
                    </li>
                    <li v-if='userLoggedIn' class="nav-item">
                        
                         <a class="nav-link" @click="handleDangXuat">Đăng Xuất</a>
                    </li>
                    <router-link to='/dangnhap' v-if="!userLoggedIn">
                    <li class="nav-item">
                        <button class="btn btn-success ml-5 mr-2" type="submit">Login</button>
                    </li>
                    </router-link>
                   

                    </ul>
                </div>
            </nav>
        </header>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            search: "",
        }
    },
    computed:{
        ...mapGetters([
            'userLoggedIn',
            'loggedInUser'
        ])
    },
    methods:{
        handleDangXuat(){
            this.$store.commit("logout");
            this.$router.push("/dangnhap");
        },
        handleSearch(){
            if(this.search!=''){
                this.$router.push({name: "TimKiem", params: {name: this.search}})
            }
        }
    }
}
</script>

<style>

</style>