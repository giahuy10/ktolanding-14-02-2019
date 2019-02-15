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
                <button type="submit" class="step3__button-submit" @click="submit">Gửi</button>
               
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
      err: []
    }
  },
  mounted () {
    let currentUser = JSON.parse(localStorage.getItem('checkUser'))
    this.contact.name = currentUser.displayName
    this.contact.email = currentUser.email
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
      let answer = JSON.parse(localStorage.getItem('answer'))
      let feedback = JSON.parse(localStorage.getItem('feedback'))
      let user = JSON.parse(localStorage.getItem('checkUser'))
 
      let dataSubmit = {
        "entry.1739231776" : user.id, //id
        "entry.107700235": this.contact.name, // name
        "entry.34633191":  this.contact.address, // addres
        "entry.1963400336": this.contact.phone, // phone
        "entry.440095148": this.contact.email, // email
        "entry.195027548": this.contact.facebook, // facebook
        "entry.861160832": '', // time
        "entry.1077345714": answer.q1, // 1
        "entry.1177458888": answer.q2, //2
        "entry.1051953135": answer.q3,
        "entry.2023993189": answer.q4, // 4
        "entry.657996662": answer.q5, // 5
        "entry.1623166846": feedback.luckNumber, // lucky number
        "entry.664695386": feedback.comment // feedback
      }
      console.log(dataSubmit)
      this.$axios.post('https://docs.google.com/forms/d/1rTF-oOAHwC070tRrXF5OqeLjYrTGfooXS86eXnCHqO0/formResponse', dataSubmit, {
        headers: {
          'Accept': 'application/xml',
          'Content-Type': 'application/xml',
        }
      })
      .then((res) => {
        console.log(res)
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
