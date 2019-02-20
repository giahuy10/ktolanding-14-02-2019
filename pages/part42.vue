<template>
  <section class="step4 part2">
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <div class="step3__inner">
                <!-- <h1 class="step3__headline">Bước 4.2</h1> -->
                <div class="step3__intro">
                  <p>Hãy cung cấp đầy đủ thông tin cá nhân của bạn để KTO có thể liên hệ nhanh nhất khi bạn trúng giải nhé!</p>
                </div>
                
                <div class="row">
                  <div class="col-xs-12">
                    <div class="form-group">
                      <input type="text" v-model="contact.name" placeholder="Họ và tên" class="form-control">
                    </div>
                    <div class="form-group">
                      <input type="text" v-model="contact.address" placeholder="Địa chỉ nhận quà" class="form-control">
                    </div>
                    <div class="form-group">
                      <input type="text" v-model="contact.phone" placeholder="Số điện thoại" class="form-control">
                    </div>
                    <div class="form-group">
                      <input type="text" v-model="contact.email" placeholder="Email" class="form-control">
                    </div>
                    <div class="form-group">
                      <input type="text" v-model="contact.facebook" placeholder="Link Facebook" class="form-control">
                    </div>                                                                                
                  </div>
                  
                </div>
                <div v-if="err.length > 0">
                    <div class="alert alert-warning">
                      <ul>
                        <li v-for="(text, i) in err" :key="i" v-text="text"></li>
                      </ul>
                    </div>
                  </div>
                <a  href="#" class="btn btn-block btn-login" @click.prevent="submit">
                      <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                        </div>
                        <div v-else>Gửi</div>
                  
                  </a>
                  <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                    </div>
              
               
            </div>
          </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      contact: {
        name: '',
        address: '',
        phone: '',
        email: '',
        facebook: ''
      },
      loading: false,
      err: []
    }
  },
  beforeCreate () {
    let currentUser = JSON.parse(localStorage.getItem('checkUser'))
    if (!currentUser || !currentUser.id) {
      this.$router.push({path: '/'})
    } else {
      this.$axios.post('https://ktoevents.lotteskywalk.tk/api/event-xem-web-moi/check-user/'+currentUser.id)
      .then(res => {
        if (res.data.length > 0) {
          this.$router.push({path: '/finish'})
        }
      })
      .catch(err => console.log(err))
    }
  },
  mounted () {
    let currentUser = JSON.parse(localStorage.getItem('checkUser'))
    if (currentUser) {
      this.contact.name = currentUser.displayName
      this.contact.email = currentUser.email
    }
  },
  methods: {
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    is_url(str)
    {
      let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
            if (regexp.test(str))
            {
              return true;
            }
            else
            {
              return false;
            }
    },
    submit () {
      this.err = []
      if (!this.contact.name) {
        this.err.push('Vui lòng nhập họ tên')
      }
      if (!this.contact.address) {
        this.err.push('Vui lòng nhập địa chỉ')
      }
      if (!this.contact.phone) {
        this.err.push('Vui lòng nhập số điện thoại')
      }
      if (!this.contact.email) {
        this.err.push('Vui lòng nhập email')
      }
      if (!this.validEmail(this.contact.email)) {
        this.err.push('Email không đúng định dạng')
      }
      if (!this.contact.facebook) {
        this.err.push('Vui lòng nhập facebook')
      }
      if (!this.is_url(this.contact.facebook) || this.contact.facebook.indexOf('facebook.com') < 0) {
        this.err.push('Địa chỉ facebok không đúng định dạng: https://facebook.com/xxx')
      }
      if (this.err.length < 1) {
        this.saveData()
        localStorage.setItem('contact', JSON.stringify(this.contact))
        // this.$router.push({path: 'part5'})
      }
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
    saveData() {
      this.loading = true
      let answer = JSON.parse(localStorage.getItem('answer'))
      let feedback = JSON.parse(localStorage.getItem('feedback'))
      let user = JSON.parse(localStorage.getItem('checkUser'))
      let timeEnter = localStorage.getItem('timeEnter')
      let timeStart = localStorage.getItem('timeStart')
      let ref = localStorage.getItem('ref')
      let dataSubmit = {
        user_id : user ? user.id : 0, //id
        user_name : user ? user.username : 0, //id
        full_name: this.contact.name, // name
        address:  this.contact.address, // addres
        phone: this.contact.phone, // phone
        email: this.contact.email, // email
        facebook: this.contact.facebook, // facebook
        // is_correct: checking
        a1: answer.q1, // 1
        a2: answer.q2, //2
        a3: answer.q3,
        a4: answer.q4, // 4
        a5: answer.q5, // 5
        lucky_number: feedback.luckNumber, // lucky number
        comment: feedback.comment, // feedback,
        time_enter: timeEnter,
        time_start: timeStart,
        time_submit: this.getDateTime(),
        ref: ref ? ref : 'Directly'
      }
      console.log(dataSubmit)
      this.$axios.post('https://ktoevents.lotteskywalk.tk/api/event-xem-web-moi', dataSubmit)
      .then((res) => {
        let data = {
                event_id: 1,
                type: 5, 
                data: dataSubmit
              }
        this.$axios.post('https://ktoevents.lotteskywalk.tk/api/log', data)
          .then((res) => {
            console.log(res)
          })
          .catch((err)=> {
            console.log(err)
          })
        this.loading = false
        localStorage.setItem('submited', true)
        let checkFacebook = ref.indexOf('facebook.com')
        let checkPost = ref.indexOf('2698009633557600')
        if (checkFacebook < 0 || checkPost < 0) {
          this.$router.push({path: '/part5'})
        } else {
          this.$router.push({path: '/finish'})
        }
        
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">
a.btn.btn-block.btn-login {
    border: 1px solid;
    color: #fff;
    background: #00abf8;
    padding: 10px;
}
.part42 {
  .head {
    position: initial;
  }
  .form-control {
    border-radius: 2px;
    box-shadow: none;
    padding: 10px 20px;
    height: 37px;
  }
  img.facebook-url {
    border: 1px solid #c0e2eb;
    margin-right: 10px;
    width: 100%;
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
}
section.step4.part2{
  @media screen and (max-width: 767px){
    padding: 0
  }
}
</style>
