
<template>
  <div class="home">
    <Slider />
    <Reveal />
    <Prize />
    
    
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
                    <div class="rules-play__youtube" @click="showVideoModal = true">
                      <figure class="lazy rules-play__background-image" style="display: block; background-image: url(/xem-web-moi-ngay-nhan-qua-lien-tay/img/Video-pic.jpg);">
                          <a class="rules-play__button-play"></a>
                      </figure>
                    </div>
                    <div class="rules-play__step1">
                      <h4 class="rules-play__title">Bước 2</h4>
                
                      <div class="rules-play__intro">
                       
                        <p v-if="loggedUser">
                          Cảm ơn bạn đã đăng nhập với hệ thống của chúng tôi
                        </p>
                          <p v-else>Đăng nhập tài khoản KTO tại đây để trả lời các câu hỏi phía dưới nhé! <br>Lưu ý: Nếu bạn chưa có tài khoản, có thể đăng nhập nhanh bằng tài khoản Facebook!
                            </p>
                            <br>
                            <!--  hoặc Email cực tiện :) -->
                      </div>
                    </div>
                     <div class="rules-play__step1">
                        <h4 class="rules-play__title">Bước 3</h4>
                        <div class="rules-play__intro">
                            <p>Trả lời các câu hỏi của sự kiện</p>
                            <br>
                        </div>
                      </div>
                       <div class="rules-play__step1">
                      <h4 class="rules-play__title">Bước 4</h4>
                      <div class="rules-play__intro">
                          <p>Điền số may mắn, đóng góp ý kiến cho website KTO và điền đầy đủ thông tin cá nhân để có cơ hội nhận được các giải thưởng giá trị từ Tổng cục du lịch Hàn Quốc.</p>
                          <br>
                      </div>
                    </div>
                     <div class="rules-play__step1">
                      <h4 class="rules-play__title">Bước 5</h4>
                      <div class="rules-play__intro">
                          <p>Share bài viết sự kiện trên trang Facebook cá nhân để hoàn tất phần thi của bạn. <br>
                        Nếu bạn đã share trước đấy thì chỉ việc ngồi đợi kết quả thôi nhé!</p>
                      </div>
                    </div>

                    <div class="rules-play__user" v-if="!loggedUser">
                      <button type="button" class="btn btn-primary btn-lg register-button" @click="openLogin" >
                          Đăng nhập
                      </button>
                      <button type="button" class="btn btn-primary btn-lg login-button"  @click="openRegister">
                          Đăng ký
                      </button>
                    
                    </div>
                    <div class="rules-play__step1" v-else>
                    
                      <button type="button" style="margin-bottom: 20px; display: inline-block" class="btn btn-primary btn-lg register-button"  @click="playGame" >
                          Chơi
                      </button>

                       <v-facebook-login v-if="loggedByFaceBook" :app-id="facebook_client_id" @login="handleFacebookLogin" @logout="handleFacebookLogout" >
                          <template slot="logout">Đăng xuất khỏi Facebook</template>
                       </v-facebook-login>
                      
                      <button type="button" style="margin-bottom: 20px; display: inline-block" v-else class="btn btn-primary btn-lg login-button"  @click="logout" >
                          Thoát
                      </button>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    
    <Notice />
    <Lady/>
   



    <transition name="modal" v-if="showVideoModal">
      <div class="modal-mask" id="videoModal">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <button type="button" class="close" @click="showVideoModal = false" ><span aria-hidden="true">&times;</span></button>

              <iframe width="460" height="230" src="//www.youtube.com/embed/lQnp6wVKiVE?autoplay=1&amp;cc_load_policy=1&amp;color=null&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;end=null&amp;fs=1&amp;h1=null&amp;iv_load_policy=1&amp;list=null&amp;listType=null&amp;loop=0&amp;modestbranding=null&amp;origin=null&amp;playlist=null&amp;playsinline=null&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;nocookie=false" frameborder="0" allowfullscreen="true" tabindex="-1">
               </iframe>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal" v-if="showLoginModal">
      <div class="modal-mask loginModal" id="loginModal">
        <div class="modal-wrapper">
          <div class="modal-container">
          <div class="modal-header">
            <button type="button" class="close" @click="showLoginModal = false" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><img src="/xem-web-moi-ngay-nhan-qua-lien-tay/img/logo.png"></h4>
          </div>
            <div class="modal-body">
              <v-facebook-login :app-id="facebook_client_id" @login="handleFacebookLogin">
                <template slot="login">
                  <div>
                    Đăng nhập bằng Facebook
                  </div>
                </template>
              </v-facebook-login>

              <div class="br text-center">

                  <span>hoặc</span>

              </div>
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
                     <a  href="#" class="btn btn-block btn-login" @click.prevent="handleLogin">
                      <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                        </div>
                        <div v-else>Đăng nhập</div>
                  
                  </a>
                  </div>

            </div>
            <div class="forgot-password text-center">
              <a href="https://www.visitkorea.org.vn/lostpassword/" target="_blank">Quên mật khẩu?</a>
            </div>
            <div class="modal-footer text-center">
              Chưa có tài khoản? <a href="#" @click.prevent="showLoginModal = false, showRegisterModal = true, err = []">Đăng ký tài khoản</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal" v-if="showRegisterModal">
      <div class="modal-mask loginModal" id="registerModal">
        <div class="modal-wrapper">
          <div class="modal-container">
          <div class="modal-header">
            <button type="button" class="close" @click="showRegisterModal = false" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"><img src="/xem-web-moi-ngay-nhan-qua-lien-tay/img/logo.png"></h4>
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
                  <input type="password" v-model="regiser.confirmPassword" placeholder="Xác nhận mật khẩu" class="form-control">
                </div>
                <div class="form-group">
                
                  <a  href="#" class="btn btn-block btn-login" @click.prevent="handleRegister">
                      <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                        </div>
                        <div v-else>Đăng ký</div>
                  
                  </a>
                </div>
              
              </div>
              <div class="modal-footer text-center">
                <v-facebook-login :app-id="facebook_client_id" @login="handleFacebookLogin">
                <template slot="login">
                  <div>
                    Đăng nhập bằng Facebook
                  </div>
                </template>
              </v-facebook-login>
              Đã có tài khoản? <a href="#" @click.prevent="showLoginModal = true, showRegisterModal = false, err = []">Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Lady from '../components/Lady'
import Notice from '../components/Notice'
import Prize from '../components/Prize'
import Reveal from '../components/Reveal'
import Slider from '../components/Slider'
import GSignInButton from 'vue-google-signin-button'
import VFacebookLogin  from 'vue-facebook-login-component'
import GoogleLogin from 'vue-google-login';
export default {
  components: {
    VFacebookLogin , GoogleLogin, GSignInButton, Lady, Notice, Prize, Reveal, Slider
  },
  data () {
    return {
      showVideoModal: false,
      showLoginModal: false,
      showRegisterModal: false,
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
      logged: false,
      googleSignInParams: {
        client_id: '988475516864-d0c0tfeajoav2q9m506fedq34qp7mmcm.apps.googleusercontent.com'
      },
      submited: false,
      loggedByFaceBook: false,
      facebook_client_id: '231410754457280'
    }
  },
  mounted () {
    this.loggedByFaceBook = localStorage.getItem('loggedByFacebook')
    this.submited = localStorage.getItem('submited')
    if (!localStorage.getItem('timeEnter')) {
      localStorage.setItem('timeEnter', this.getDateTime())
    }
    if (!localStorage.getItem('ref')) {
      localStorage.setItem('ref', document.referrer)
    }
    if (!localStorage.getItem('visited')) {
      let data = {
        event_id: 1,
        type: 1, 
        data: document.referrer
      }
      this.$axios.post('https://ktoevents.lotteskywalk.tk/api/log', data)
        .then((res) => {
          localStorage.setItem('visited', true)
        })
        .catch((err)=> {
          console.log(err)
        })
    }
  },
  computed: {
    
    loggedUser () {
      return JSON.parse(localStorage.getItem('checkUser'))
    }
  },
  methods: {
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    handleFacebookLogout (data) {
      localStorage.clear()
      location.reload()
    },
    handleFacebookLogin (data) {
      if (data.status === 'connected') {
        let faceId = data.authResponse.userID
        let resUser = {
            id: faceId,
            cookie: data.authResponse.accessToken,
            username: 'FB_'+faceId,
            email: '',
            displayName: ''
          }
          localStorage.setItem('checkUser', JSON.stringify(resUser))
        let logData = {
                    event_id: 1,
                    type: 6, 
                    data: faceId
                  }
        this.$axios.post('https://ktoevents.lotteskywalk.tk/api/log', logData)
          .then(response => console.log(response))
          .catch(err => console.log(err))
          this.showLoginModal = false
          localStorage.setItem('loggedByFacebook', true)
          this.playGame(faceId)

      }
    },
    onSuccess(googleUser) {
        console.log(googleUser);
 
        // This only gets the user information: id, name, imageUrl and email
        console.log(googleUser.getBasicProfile());
    },
    onFailure(googleUser) {
        console.log(googleUser);

    },
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(profile)
      
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    getDateTime() {
      var now     = new Date(); 
      var year    = now.getFullYear();
      var month   = now.getMonth()+1; 
      var day     = now.getDate();
      var hour    = now.getHours();
      var minute  = now.getMinutes();
      var second  = now.getSeconds(); 
      if(month.toString().length == 1) {
          month = '0'+month;
      }
      if(day.toString().length == 1) {
          day = '0'+day;
      }   
      if(hour.toString().length == 1) {
          hour = '0'+hour;
      }
      if(minute.toString().length == 1) {
          minute = '0'+minute;
      }
      if(second.toString().length == 1) {
          second = '0'+second;
      }   
      var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
      return dateTime;
    },
    logout () {
      localStorage.clear()
      location.reload()
    },
    openLogin () {
      this.err = []
      this.showLoginModal = true
    },
    openRegister () {
      this.err = []
      this.showRegisterModal = true
    },
    playGame (user_id = 0) {
      let app = this
      this.$axios.post('https://ktoevents.lotteskywalk.tk/api/event-xem-web-moi/check-user/'+user_id)
      .then(res => {
        if (res.data.length > 0) {
          console.log('existed')
          localStorage.setItem('submited', true)
          this.$router.push({path: '/finish'})
          
        } else {
          if (!localStorage.getItem('timeStart')) {
            localStorage.setItem('timeStart', this.getDateTime())
          }
          let data = {
                    event_id: 1,
                    type: 4, 
                    data: this.loggedUser
                  }
          this.$axios.post('https://ktoevents.lotteskywalk.tk/api/log', data)
            .then((res) => {
              console.log(res)
            })
            .catch((err)=> {
              console.log(err)
            })
          this.$router.push({path: '/playgame'})
        }
      }).catch(err => {
        console.log(err)
      })
      
    },
    onSuccess(googleUser) {
        console.log(googleUser);
 
        // This only gets the user information: id, name, imageUrl and email
        console.log(googleUser.getBasicProfile());
    },
    onFailure (err) {
      console.log(err)
    },
    handleLogin () {
      
      this.err = []
      let app = this
      if (!this.login.username || !this.login.password) {
        this.err.push('Tài khoản và mật khẩu không được bỏ trống')
      } else {
        this.loading = true
        this.$axios.post(`https://www.visitkorea.org.vn/api/user/generate_auth_cookie/?username=${this.login.username}&password=${this.login.password}`).then((response) => {
          if ( response.data.error ) {
            this.err.push('Tài khoản hoặc mật khẩu không đúng')
            app.loading = false
          } else {
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
          this.showLoginModal = false
          // Store log
          let data = {
            event_id: 1,
            type: 2, 
            data: resUser
          }
          this.$axios.post('https://ktoevents.lotteskywalk.tk/api/log', data)
            .then((res) => {
              console.log(res)
            })
            .catch((err)=> {
              console.log(err)
            })
          // redirect to game
          this.playGame(response.data.user.id)
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    handleRegister () {
      
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
      if (!this.validEmail(this.regiser.email)) {
        this.err.push('Email không đúng định dạng')
      }
      if (this.err.length < 1) {
        this.loading = true
        let app = this
         this.$axios.post('https://www.visitkorea.org.vn/api/get_nonce/?controller=user&method=register').then((response) => {
          let nonce = response.data.nonce
          this.$axios.post(`https://www.visitkorea.org.vn/api/user/register/?username=${this.regiser.username}&user_pass=${this.regiser.password}&email=${this.regiser.email}&nonce=${nonce}&display_name=${this.regiser.displayName}`)
            .then((reg) => {
              console.log(reg)
              let regUser = {
                id: reg.data.user_id,
                cookie: reg.data.cookie,
                username: app.regiser.username,
                email: app.regiser.email,
                displayName: app.regiser.displayName
              }
              localStorage.setItem('checkUser', JSON.stringify(regUser))
              app.logged = true
              app.loading = false
              this.showRegisterModal = false
              let data = {
                event_id: 1,
                type: 3, 
                data: regUser
              }
              this.$axios.post('https://ktoevents.lotteskywalk.tk/api/log', data)
                .then((res) => {
                  console.log(res)
                })
                .catch((err)=> {
                  console.log(err)
                })
              this.playGame(reg.data.user_id)
            })
            .catch((err) => {
              app.loading = false
              this.err.push('Tài khoản hoặc email đã tồn tại')
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
.google-login-button {
  button {
    background-color: #dc4e41;
    color: #fff;
    border: 1px solid #dc4e41;
    border-radius: 5px;
    padding: 10px 20px;
    width: 100%;
  }
  margin-top: 20px;
  
}
.login-by-acc {
    text-align: center;
    margin: 20px 0;
   
}
.loginModal {
  .modal-container {
    width: 480px;
    max-width: 100%;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
}
  .login-button {
    display: inline-block;
    padding: 10px 25px;
    border-radius: 30px;
    font-weight: 600;
    border: 2px solid #00abf8;
    font-size: 13px;
        color: #FFF;
    background-color: #00abf8;
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
    .modal-header .close {
    margin-top: -2px;
    border: 1px solid #ccc;
    font-weight: normal;
    border-radius: 100%;
    height: 25px;
    color: #939393;
    opacity: 1;
    width: 25px;
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
    a.btn.btn-block.btn-login {
    border: 1px solid;
    color: #fff;
    background: #002b58;
    padding: 10px;
    
    }
    .modal-footer {
      text-align: center;
      font-weight: bold;
      a {
        color: #5b9e3d;
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin-top: 20px;
}
.modal-default-button {
  float: right;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
#videoModal {
  .modal-container {
    padding: 0;
    background: 0;
    box-shadow: none;
    width: 840px;
     @media screen and (max-width: 767px) {
       width: 100% ;
     }
    iframe {
      width: 100%;
      height: 480px;
      @media screen and (max-width: 767px) {
       height: 250px ;
     }
    }
  }
}
a.btn.btn-block.btn-login {
    border: 1px solid;
    color: #fff;
    background: #00abf8;
    padding: 10px;
}
.rules-play__user {
  @media screen and (max-width: 767px) {
     margin: 30px 20px 0;
  }
   
}
.notice {
  background: url(/xem-web-moi-ngay-nhan-qua-lien-tay/img/notice-bg.jpg);
  color: #fff;
  padding: 40px 0;
  
  .notice__inner {
    font-size: 14px;
    padding: 40px 0;
    max-width: 770px;
    margin: 0 auto;
    text-align: justify;
    @media screen and (max-width: 767px) {
      padding: 0 20px;
    }
  }
}
button.v-facebook-login {
    width: 100%;
    padding: 10px 20px !important;
}
.forgot-password.text-center {
    margin-bottom: 10px;
    a {
      color: #606060;
    }
}
#loginModal {
  .modal-body {
    padding-bottom: 0;
  }
}
button.v-facebook-login {
    margin-bottom: 20px !important;
    /* display: block; */
}
.br.text-center {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    position: relative;
    span {
      display: inline-block;
      background: #fff;
      top: -10px;
      position: absolute;
      padding: 0 10px;
      left: 43%;
    }
}
@media only screen and (max-width: 600px) and (min-width: 400px) {
.banner-content {
    bottom: 80px;
}
}
@media only screen and (max-width: 800px) and (min-width: 768px) {
.banner-content {
    bottom: 210px;
    h3 {
      font-size: 40px;
    }
    h4 {
      font-size: 50px;
    }
    p {
      font-size: 20px;
    }
}
}
@media only screen and (max-width: 1100px) and (min-width: 990px) {
  .reveal__inner {
   
    max-width: 650px;
   
}
}
</style>



