<template>
  <div id="logreg-forms">
    
    <form class="form-signin" @submit.prevent="handleDangNhap">
            <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> Sign in</h1>
            <input v-model="user.username" type="text" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            
            <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
            <a href="#" id="forgot_pswd">Forgot password?</a>
            <hr>
            <!-- <p>Don't have an account!</p>  -->
            <button @click="gotoDangKy" class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Sign up New Account</button>
    </form>

    <div v-if="successful">{{message}}</div>
  </div>
</template>

<script>
export default {
      data(){
        return{
          user:{
            username:null,
            password: null,
            
          },
          successful:false,
          message: null
        }
      },
      methods:{
        gotoDangKy(){
          this.$router.push('/dangky')
        },
        async handleDangNhap(){
          this.message = "";

           const [error] = await this.handle(
                this.$store.dispatch("login", this.user)
            );
            if (error) {
                console.log(error);
                this.successful = true;
                this.message = "Đăng nhập thất bại";
            } else {
                this.$router.push("/");
            }

            console.log(this.user);
        }
      }
}
</script>

<style>

</style>