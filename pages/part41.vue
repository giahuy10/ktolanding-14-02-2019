<template>
  <section class="step4 part1">
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <div class="step3__inner">
                <!-- <h1 class="step3__headline">Bước 4.1</h1> -->
                <div class="step3__intro">
                  <p style="color: #002a5b"> <b>Hãy lựa chọn một số may mắn trong khoảng từ 1 - 1000 nhé!</b></p>
                </div>
                <div>
                  <input type="text" v-model="feedback.luckNumber" class="lucky-number" placeholder="Điền số">
                </div>
                
                <textarea name="" id="" v-model="feedback.comment" cols="30" rows="10" placeholder="Bạn có đóng góp gì về website mới của KTO không? 
KTO sẽ chọn ra đóng góp có ý nghĩa nhất để trao giải là một chiếc vali du lịch cao cấp"></textarea>
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
      feedback: {
        luckNumber: '',
        comment: ''
      },
      
      err: []
    }
  },
  methods: {
    submit () {
      this.err = []
      if (!this.feedback.luckNumber) {
        this.err.push('Vui lòng chọn con số may mắn')
      }
      if (isNaN(this.feedback.luckNumber)) {
        this.err.push('Con số may mắn phải là số không được là chữ')
      }
      if (this.feedback.luckNumber > 1000 || this.feedback.luckNumber < 1) {
        this.err.push('Con số may mắn phải nằm trong khoảng 1 - 1000')
      }
      if (this.err.length < 1) {
        localStorage.setItem('feedback', JSON.stringify(this.feedback))
        this.$router.push({path: 'part42'})
      }
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
  }
}
</script>
<style lang="scss">

.part41 {
  .head {
    position: initial;
  }
  input.lucky-number {
    background: #deeff7;
    border: none;
    width: 135px;
    padding: 10px 0;
    border-radius: 5px;
    text-align: center;
  }
  textarea {
    width: 100%;
    margin-top: 20px;
    padding: 20px 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  button.step3__button-submit {
    width: 135px;
  }
  
}
section.step4.part1 {
  @media screen and (max-width: 767px) {
    padding: 0;
  }
}
</style>
