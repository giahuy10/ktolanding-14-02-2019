<template>
  <section class="step4 part2">
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <div class="step3__inner">
                <h1 class="step3__headline">Bước 4.2</h1>
                <div class="step3__intro">
                  <p>Hãy cung cấp đầy đủ thông tin cá nhân của bạn để KTO có thể liên hệ nhanh nhất khi bạn trúng giải nhé!</p>
                </div>
                
                <div class="row">
                  <div class="col-xs-12 col-md-6">
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
                  <div class="col-xs-12 col-md-6">
                    <img class="facebook-url" src="/img/get-facebook-url.jpg" alt="">
                  </div>
                </div>
                <div v-if="err.length > 0">
                    <div class="alert alert-warning">
                      <ul>
                        <li v-for="(text, i) in err" :key="i" v-text="text"></li>
                      </ul>
                    </div>
                  </div>
                  <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                    </div>
                <button v-else type="submit" class="step3__button-submit" @click="submit">Gửi</button>
               
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
  mounted () {
    let currentUser = JSON.parse(localStorage.getItem('checkUser'))
    if (currentUser) {
      this.contact.name = currentUser.displayName
      this.contact.email = currentUser.email
    }
  },
  methods: {
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
      if (this.err.length < 1) {
        this.saveData()
        localStorage.setItem('contact', JSON.stringify(this.contact))
        // this.$router.push({path: 'part5'})
      }
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
        ref: ref
      }
      console.log(dataSubmit)
      this.$axios.post('http://localhost:8000/api/event-xem-web-moi', dataSubmit)
      .then((res) => {
        console.log(res)
        this.loading = false
        this.$router.push({path: '/part5'})
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">

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
}
</style>
