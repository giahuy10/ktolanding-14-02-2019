<template>
  <section class="step4 part1">
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <div class="step3__inner">
                <h1 class="step3__headline">Bước 4.1</h1>
                <div class="step3__intro">
                  <p>Hãy lựa chọn một số may mắn trong khoảng từ 1 - 1000 nhé!</p>
                </div>
                <div>
                  <input type="text" v-model="feedback.luckNumber" class="lucky-number" placeholder="Điền số">
                </div>
                
                <textarea name="" id="" v-model="feedback.comment" cols="30" rows="10" placeholder="Bạn có đóng góp gì về website mới của KTO không? (về mặt tính năng, hình ảnh, mức độ thân thiện với người dùng, mức độ hữu ích ..)"></textarea>
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
      if (this.err.length < 1) {
        localStorage.setItem('feedback', JSON.stringify(this.feedback))
        this.$router.push({path: 'part42'})
      }
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
    padding: 20px 40px;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    margin-top: 20px;
    padding: 20px 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }
}
</style>
