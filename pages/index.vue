<template>
  <div class="home">
    <section class="slider">
        <div class="banner">
          <ul id="banner" class="">
              <li>
                <figure class="banner-image" style="background-image: url(/img/hero_background.jpg)" data-src="">
                    <div class="banner-content">
                      <h3>Xem web mới ngay</h3>
                      <h4>Nhận quà liền tay</h4>
                      <div class="banner-browser">
                          <img src="/img/hero_background-1.jpg" >
                      </div>
                    </div>
                </figure>
              </li>
          </ul>
        </div>
    </section>
    <section class="reveal" id="reveal">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div class="reveal__inner">
                    <h2 class="reveal__title">Bật mí! KTO Việt Nam đã ra mắt giao diện  website hoàn toàn mới, bạn đã xem thử chưa?</h2>
                    <div class="reveal__intro">
                      <p>Website KTO đã cập nhập giao diện mới đẹp hơn, nhiều tính năng mới mẻ hơn, tiếp tục cung cấp cho các độc giả nhiều thông tin hữu ích về du lịch Hàn Quốc<br> Hãy cùng tham gia event "Xem web mới ngay, nhận quà liền tay" do Tổng cục du lịch Hàn Quốc tại Việt Nam KTO tổ chức và nhận thật nhiều các phần quà may mắn đầu năm mới phát tài phát lộc nhé</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section class="prize" id="prize">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div class="prize__inner">
                    <h2 class="prize__title">Giải thưởng</h2>
                    <div class="prize__list">
                      <div class="prize__item">
                          <figure class="lazy prize__image" style="display: block; background-image: url(/img/gift_1.png);"></figure>
                          <h3 class="prize__sub">05 Giải nhất</h3>
                          <div class="prize__intro">
                            <p>05 Thẻ quà tặng CGV trị giá <strong>1,000,000đ</strong></p>
                          </div>
                      </div>
                      <div class="prize__item">
                          <figure class="lazy prize__image" style="display: block; background-image: url(/img/gift_2.png);"></figure>
                          <h3 class="prize__sub">10 Giải nhì</h3>
                          <div class="prize__intro">
                            <p>10 chiếc đế điện thoại hình nhân vật LINE KTO</p>
                          </div>
                      </div>
                      <div class="prize__item">
                          <figure class="lazy prize__image" style="display: block; background-image: url(/img/gift_3.png);"></figure>
                          <h3 class="prize__sub">50 Giải ba</h3>
                          <div class="prize__intro">
                            <p>50 chiếc túi du lịch tiện dụng KTO</p>
                          </div>
                      </div>
                    </div>
                    <div class="prize__one">
                      <figure class="lazy prize__one--image" style="display: block; background-image: url(/img/gift_4.png);"></figure>
                      <h3>
                          <p>01 Giải dành cho đóng góp có ý nghĩa nhất cho website KTO <br>
                          Vali du lịch cao cấp
                          </p>
                      </h3>
                    </div>
                    <div class="prize__one">
                      <figure class="lazy prize__one--image" style="display: block; background-image: url(/img/gift_5.png);"></figure>
                      <h3>
                          <p>Ngoài ra, mỗi giải thưởng còn tặng kèm bộ sách hướng dẫn du lịch Hàn Quốc,</p>
                      </h3>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section class="rules-play" id="rules-play">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div class="rules-play__inner">
                    <h2 class="rules-play__headline">Thể lệ chương trình</h2>
                    <div class="rules-play__step1">
                      <h4 class="rules-play__title">Bước 1</h4>
                      <div class="rules-play__intro">
                          <p>Hãy xem kỹ video hướng dẫn các tính năng mới của Website KTO dưới đây. Video này sẽ chứa những gợi ý cực kỳ quan trọng giúp bạn trả lời các câu hỏi đố vui để nhận quà từ KTO!</p>
                      </div>
                    </div>
                    <div class="rules-play__youtube" @click="playVideo">
                      <figure class="lazy rules-play__background-image" style="display: block; background-image: url(/img/hero_background.jpg);">
                          <a class="rules-play__button-play" data-toggle="modal" data-target="#videoModal" data-video-id="xRlxzrut0BQ"></a>
                      </figure>
                    </div>
                    <div class="rules-play__step1">
                      <h4 class="rules-play__title">Bước 2</h4>
                
                      <div class="rules-play__intro">
                       
                        <p v-if="loggedUser.id">
                          Cảm ơn bạn đã đăng nhập với hế thống của chúng tôi
                        </p>
                          <p v-else>Đăng nhập tài khoản KTO tại đây để trả lời các câu hỏi phía dưới nhé! Lưu ý: Nếu bạn chưa có tài khoản, có thể đăng nhập nhanh bằng tài khoản  Facebook hoặc Email cực tiện :)</p>
                      </div>
                    </div>
                    <div class="rules-play__user" v-if="!loggedUser.id">
                      <button type="button" class="btn btn-primary btn-lg login-button" @click="err=[]" data-toggle="modal" data-target="#loginModal">
                          Đăng nhập
                      </button>
                      <button type="button" class="btn btn-primary btn-lg register-button"  @click="err=[]" data-toggle="modal" data-target="#registerModal">
                          Đăng ký
                      </button>
                    
                    </div>
                    <div class="rules-play__step1" v-else>
                      <button type="button" class="btn btn-primary btn-lg register-button"  @click="playGame" >
                          Chơi
                      </button>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section class="event lazy" data-src="">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div class="event__inner">
                    <h2 class="event__headline">Hãy rủ bạn bè cùng tham gia event "Xem web mới ngay, nhận quà liền tay" và cùng nhận những phần quà hấp dẫn nhất từ KTO Việt Nam, bạn nhé!</h2>
                    <div class="event__intro">
                      <p>Về Tổng cục du lịch Hàn Quốc tại Việt Nam<br>
                          Tổng cục du lịch Hàn Quốc tại Việt Nam (Korea Tourism Organization - KTO) là cổng thông tin chính thống duy nhất về du lịch Hàn Quốc tại Việt Nam, quảng bá các sản phẩm, dịch vụ du lịch Hàn Quốc, đem đến nhiều thông tin hữu ích, những góc nhìn mới mẻ hơn về du lịch Hàn Quốc ở nhiều phương diện như<br>
                          du lịch y tế, du lịch khen thưởng, du lịch cao cấp, làn sóng Hallyu ... 
                      </p>
                    </div>
                    <figure class="event__image lazy" style="display: block; background-image: url(/img/hero2_image.png);"></figure>
                </div>
              </div>
          </div>
        </div>
    </section>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><img src="/img/logo.png"></h4>
          </div>
          <div class="modal-body">
            <div v-if="err.length > 0">
              <div class="alert alert-warning">
                <ul>
                  <li v-for="(text, i) in err" :key="i" v-text="text"></li>
                </ul>
              </div>
            </div>
            
              <div class="form-group">
                <input type="text" v-model="login.username" placeholder="Tài khoản" class="form-control">
              </div>
              <div class="form-group">
                <input type="password" v-model="login.password" placeholder="Mật khẩu" class="form-control">
              </div>
              <div class="form-group">
                <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                </div>
                <a v-else href="#" class="btn btn-success btn-block btn-login" @click.prevent="handleLogin">Đăng nhập</a>
              </div>
            
          </div>
          <div class="modal-footer text-center">
            Chưa có tài khoản? <a href="">Đăng ký thành viên</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <div class="modal fade" id="registerModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><img src="/img/logo.png"></h4>
          </div>
          <div class="modal-body">
            <div v-if="err.length > 0">
              <div class="alert alert-warning">
                <ul>
                  <li v-for="(text, i) in err" :key="i" v-text="text"></li>
                </ul>
              </div>
            </div>
            
              <div class="form-group">
                <input type="text" v-model="regiser.username" placeholder="Tên đăng nhập" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" v-model="regiser.displayName" placeholder="Họ tên" class="form-control">
              </div>
              <div class="form-group">
                <input type="email" v-model="regiser.email" placeholder="Email" class="form-control">
              </div>
              <div class="form-group">
                <input type="password" v-model="regiser.password" placeholder="Mật khẩu" class="form-control">
              </div>
              <div class="form-group">
                <input type="password" v-model="regiser.confirmPassword" placeholder="Xác nhạn mật khẩu" class="form-control">
              </div>
              <div class="form-group">
               
                <a  href="#" class="btn btn-success btn-block btn-login" @click.prevent="handleRegister">
                     <div class="lds-facebook" v-if="!loading"><div></div><div></div><div></div>
                      </div>
                      <div v-else>Đăng ký</div>
                 
                </a>
              </div>
            
          </div>
          <div class="modal-footer text-center">
            Đã có tài khoản? <a href="">Đăng nhập</a>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" ref="myModalRef" id="videoModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
        

          <div class="modal-footer text-center">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <iframe width="460" height="230" src="//www.youtube.com/embed/xRlxzrut0BQ?autoplay=1&amp;cc_load_policy=1&amp;color=null&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;end=null&amp;fs=1&amp;h1=null&amp;iv_load_policy=1&amp;list=null&amp;listType=null&amp;loop=0&amp;modestbranding=null&amp;origin=null&amp;playlist=null&amp;playsinline=null&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;nocookie=false" frameborder="0" allowfullscreen="true" tabindex="-1">
                
          </iframe>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      },
      regiser: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        displayName: ''
      },
      err: [],
      loading: false,
      logged: false
    }
  },
  mounted () {
    console.log(JSON.parse(localStorage.getItem('checkUser')))
  },
  computed: {
    loggedUser () {
      return JSON.parse(localStorage.getItem('checkUser'))
    }
  },
  methods: {
    playGame () {
      this.$router.push({path: '/playgame'})
    },
    handleLogin () {
      this.loading = true
      this.err = []
      let app = this
      if (!this.login.username || !this.login.password) {
        this.err.push('Tài khoản và mật khẩu không được bỏ trống')
      } else {
        this.$axios.post(`https://dev.visitkorea.org.vn/api/user/generate_auth_cookie/?username=${this.login.username}&password=${this.login.password}`).then((response) => {
          let resUser = {
            id: response.data.user.id,
            cookie: response.data.cookie,
            username: response.data.user.username,
            email: response.data.user.email,
            displayName: response.data.user.displayname
          }
          app.$store.dispatch('setLogged', resUser)
          localStorage.setItem('checkUser', JSON.stringify(resUser))
          app.logged = true
          app.loading = false
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    handleRegister () {
      this.loading = true
      this.err = []
      if (!this.regiser.username) {
        this.err.push('Tài khoản không được bỏ trống')
      }
      if (!this.regiser.email) {
        this.err.push('Email không được bỏ trống')
      }
      if (!this.regiser.password || !this.regiser.confirmPassword) {
        this.err.push('Mật khẩu không được bỏ trống')
      }
      if (this.regiser.password  !== this.regiser.confirmPassword) {
        this.err.push('Xác nhận mật khẩu không đúng')
      }
      if (this.err.length < 1) {
        let app = this
         this.$axios.post('https://dev.visitkorea.org.vn/api/get_nonce/?controller=user&method=register').then((response) => {
          let nonce = response.data.nonce
          this.$axios.post(`https://dev.visitkorea.org.vn/api/user/register/?username=${this.regiser.username}&user_pass=${this.regiser.password}&email=${this.regiser.email}&nonce=${nonce}&display_name=${this.regiser.displayName}`)
            .then((reg) => {
              localStorage.setItem('user',{
                id: reg.data.user_id,
                cookie: reg.data.cookie,
                username: app.regiser.username,
                email: app.regiser.email,
                displayName: app.regiser.displayName
              })
              app.logged = true
              app.loading = false
            })
            .catch((err) => {

              console.log(err)
            })
        }).catch((err) => {

          console.log(err)
        })
      }
    },
    playVideo () {
      console.log(this.$refs)
    }
  }
}
</script>

<style lang="scss">
  .login-button {
    display: inline-block;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 600;
    border: 2px solid #00abf8;
    font-size: 13px;
        color: #FFF;
    background-color: #00abf8;
    margin: 0 0 0 10px;
  }
  .register-button {
    display: inline-block;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 600;
    color: #00abf8;
    border: 2px solid #00abf8;
    font-size: 13px;
    background: none;
  }
  .btn-primary.focus, .btn-primary:focus {
    border: none;
  }
  .modal-open .modal.in {
    
    display: flex !important;
    align-items: center;
  }
  #loginModal, #registerModal {
    .modal-header {
      border-bottom: 0;
    }
    @media (min-width: 768px) {
      .modal-dialog {
          width: 460px;
          margin: 30px auto;
          .modal-content {
            padding: 0 20px;
          }
      }
    }
  }
  .lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 34px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 45px;
  }
  50%, 100% {
    top: 7px;
    height: 26px;
  }
}
#videoModal {
  .modal-dialog {
      width: 800px;
      @media screen and (max-width: 767px){
        width: 100%
      }
    }
  .modal-content {
    background: none;
    box-shadow: none;
    border: 0;
    .modal-footer {
      border-top: 0;
    }
    
    iframe {
      width: 100%;
      height: 450px;
      @media screen and (max-width: 767px){
        height: 259px;
      }
    }
  }
  button.close {
    background: #00abf8;
    opacity: 1;
    border-radius: 100%;
    width: 24px;
    color: #fff;
    text-shadow: none;
    position: absolute;
    top: 0px;
    right: 0px;
}
}
</style>



