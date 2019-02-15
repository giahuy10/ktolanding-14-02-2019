<template>
  <section class="step3">
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <div class="step3__inner">
                <h1 class="step3__headline">Bước 3</h1>
                <div class="step3__intro">
                  <p>Hãy trả lời lần lượt các câu hỏi dưới đây về những cập nhật mới của website KTO. Suy nghĩ thật kỹ trước khi trả lời nhé bạn!</p>
                </div>
              
                  <div class="step3__list">
                      <input type="hidden" name="action" value="contact">
                      <div class="step3__item">
                        <p>Câu 1</p>
                        <label>Địa chỉ chính xác của Cổng thông tin chính thức KTO Việt Nam là gì?</label>
                        <div class="awser">
                            <label><input type="radio" name="question_1" v-model="answer.q1" required="required" value="1"  data-parsley-multiple="question_1">A. visitkorea.or.kr</label>
                            <label><input type="radio" name="question_1" v-model="answer.q1" required="required" value="2"  data-parsley-multiple="question_1">B. ktovietnam.org.vn</label>
                            <label><input type="radio" name="question_1" v-model="answer.q1" required="required" value="3"  data-parsley-multiple="question_1">C. visitkorea.org.vn</label>
                            <label><input type="radio" name="question_1" v-model="answer.q1" required="required" value="4"  data-parsley-multiple="question_1">D. ktovietnam.or.kr</label>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 2</p>
                        <label>Thông tin về visa du lịch nằm ở mục nào của menu chính trên Cổng thông tin chính thức KTO Việt Nam?</label>
                        <div class="awser">
                            <label><input type="radio" name="question_2" v-model="answer.q2" required="required" value="1"  data-parsley-multiple="question_2">A. Mục Tin tức mới nhất thuộc mục Tin tức du lịch</label>
                            <label><input type="radio" name="question_2" v-model="answer.q2" required="required" value="2"  data-parsley-multiple="question_2">B. Mục Sản phẩm du lịch</label>
                            <label><input type="radio" name="question_2" v-model="answer.q2" required="required" value="3"  data-parsley-multiple="question_2">C. Mục Thông tin chung thuộc mục Về Hàn Quốc</label>
                            <label><input type="radio" name="question_2" v-model="answer.q2" required="required" value="4"  data-parsley-multiple="question_2">D. Mục Thông cáo báo chí thuộc Tin tức du lịch</label>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 3</p>
                        <label>Tính năng mới nhất của Cổng thông tin chính thức KTO Việt Nam là gì?</label>
                        <div class="awser">
                            <label><input type="radio" name="question_3" v-model="answer.q3" required="required" value="1"  data-parsley-multiple="question_2">A. E-coupon giảm giá các dịch vụ tại Hàn Quốc</label>
                            <label><input type="radio" name="question_3" v-model="answer.q3" required="required" value="2"  data-parsley-multiple="question_2">B. Người dùng website có thể đăng bài trải nghiệm du lịch Hàn Quốc của chính mình</label>
                            <label><input type="radio" name="question_3" v-model="answer.q3" required="required" value="3"  data-parsley-multiple="question_2">C. E-book về du lịch Hàn Quốc</label>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 4</p>
                        <label>Các chủ đề du lịch trong mục Du lịch theo chủ đề trên Cổng thông tin chính thức KTO Việt Nam là gì?</label>
                        <div class="awser">
                            <label><input type="radio" name="question_4" v-model="answer.q4" required="required" value="1"  data-parsley-multiple="question_2">A. Du lịch y tế; Du lịch Cao cấp</label>
                            <label><input type="radio" name="question_4" v-model="answer.q4" required="required" value="2"  data-parsley-multiple="question_2">B. Lễ hội, sự kiện; Du lịch MICE</label>
                            <label><input type="radio" name="question_4" v-model="answer.q4" required="required" value="3"  data-parsley-multiple="question_2">C. Du lịch bốn mùa xuân, hạ, thu đông</label>
                            <label><input type="radio" name="question_4" v-model="answer.q4" required="required" value="4"  data-parsley-multiple="question_2">D. Tất cả các phương án trên</label>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 5</p>
                        <label>Nhóm nhạc nào là Đại sứ du lịch Hàn Quốc năm 2018 và đang xuất hiện trên banner tại trang chủ của Website KTO Việt Nam?</label>
                        <div class="awser">
                            <label><input type="radio" name="question_5" v-model="answer.q5" required="required" value="1"  data-parsley-multiple="question_2">A. EXO</label>
                            <label><input type="radio" name="question_5" v-model="answer.q5" required="required" value="2"  data-parsley-multiple="question_2">B. BTS</label>
                            <label><input type="radio" name="question_5" v-model="answer.q5" required="required" value="3"  data-parsley-multiple="question_2">C. Black Pink</label>
                            <label><input type="radio" name="question_5" v-model="answer.q5" required="required" value="4"  data-parsley-multiple="question_2">D. TWICE</label>
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
                  <button type="submit" class="step3__button-submit" @click="submit">Hoàn thành</button>
               
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
      answer: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
      },
      err: []
    }
  },
  methods: {
    submit () {
      this.err = []
      if (!this.answer.q1) {
        this.err.push('Vui lòng trả lời câu hỏi số 1')
      }
      if (!this.answer.q2) {
        this.err.push('Vui lòng trả lời câu hỏi số 2')
      }
      if (!this.answer.q3) {
        this.err.push('Vui lòng trả lời câu hỏi số 3')
      }
      if (!this.answer.q4) {
        this.err.push('Vui lòng trả lời câu hỏi số 4')
      }
      if (!this.answer.q5) {
        this.err.push('Vui lòng trả lời câu hỏi số 5')
      }
      if (this.err.length < 1) {
        localStorage.setItem('answer', JSON.stringify(this.answer))
        this.$router.push({path: 'part41'})
      }
    }
  }
}
</script>
<style lang="scss">
.awser {
  label {
    display: block;
    font-weight: normal;
  }
}
.playgame {
  .head {
    position: initial;
  }
}
</style>
