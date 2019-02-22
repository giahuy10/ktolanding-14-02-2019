<template>
  <div class="register">
        
          <div class="form-group register-group">
            <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()"  placeholder="Tên đăng nhập" class="form-control">
          
            <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()"  placeholder="Họ tên" class="form-control">
          
            <input type="email" v-on:keyup.enter="$event.target.nextElementSibling.focus()"  placeholder="Email" class="form-control">
          
            <input type="password" v-on:keyup.enter="$event.target.nextElementSibling.focus()"  placeholder="Mật khẩu" class="form-control">
          
            <input type="password" v-on:keyup.enter="$event.target.nextElementSibling.focus()"  placeholder="Xác nhận mật khẩu" class="form-control">
          </div>
          <div class="form-group">
          
            <a  href="#" class="btn btn-block btn-login" @click.prevent="handleRegister">
                <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                  </div>
                  <div v-else>Đăng ký</div>
            
            </a>
          </div>
    </div>
</template>
<script>
export default {
  methods: {
    handleRegister () {

    }
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>
