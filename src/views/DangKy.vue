<template>
 <div id="logreg-forms">
  <form class="form-signup" @submit.prevent ="handleDangKy">
                <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> New Account</h1>

                <input v-model="user.username" type="text" id="user-name" class="form-control" placeholder="Full name" required="" autofocus="">
                <input v-model="user.email" type="email" id="user-email" class="form-control" placeholder="Email address" required autofocus="">
                <input v-model="user.password" type="password" id="user-pass" class="form-control" placeholder="Password" required autofocus="">
                <input v-model="user.repassword" type="password" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="">

                <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus" ></i> Sign Up</button>
                <router-link to='/dangnhap'>
                  <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</a>
                </router-link>
                <div v-if="successful">{{message}}</div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:{
        username: null,
        email: null,
        password :null,
        repassword:null,
      },
      message: null,
      successful:false
    }
  },
  methods:{
    async handleDangKy(){
            this.message = "";

            const [error, data] = await this.handle(
                this.$store.dispatch("register", this.user)
            );

            if (error) {
                console.log(error);
                this.successful = true;
                this.message = "Đăng ký thất bại";
            } else {
                this.message = data.message;
                this.successful = true;
            }

            console.log(this.user);
    }
  }
}
</script>

<style>

</style>