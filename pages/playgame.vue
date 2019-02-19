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
                          <div class="inputGroup">
                            <input type="radio" name="question_1" id="question_1_1" v-model="answer.q1" value="1"  />
                            <label for="question_1_1">A. visitkorea.or.kr</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" name="question_1" id="question_1_2" v-model="answer.q1" value="2"  />
                            <label for="question_1_2">B. ktovietnam.org.vn</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" name="question_1" id="question_1_3" v-model="answer.q1" value="3"  />
                            <label for="question_1_3">C. visitkorea.org.vn</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" name="question_1" id="question_1_4" v-model="answer.q1" value="4"  />
                            <label for="question_1_4">D. ktovietnam.or.kr</label>
                          </div>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 2</p>
                        <label>Thông tin về visa du lịch nằm ở mục nào của menu chính trên Cổng thông tin chính thức KTO Việt Nam?</label>
                        <div class="awser">
                          <div class="inputGroup">
                            <input type="radio" id="question_2_1" name="question_2" v-model="answer.q2" value="1"  >
                            <label for="question_2_1">A. Mục Tin tức mới nhất thuộc mục Tin tức du lịch</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_2_2" name="question_2" v-model="answer.q2" value="2"  >
                            <label  for="question_2_2">B. Mục Sản phẩm du lịch</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_2_3" name="question_2" v-model="answer.q2" value="3"  >
                            <label  for="question_2_3">C. Mục Thông tin chung thuộc mục Về Hàn Quốc</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_2_4" name="question_2" v-model="answer.q2" value="4" >  
                            <label  for="question_2_4">D. Mục Thông cáo báo chí thuộc Tin tức du lịch</label>
                          </div>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 3</p>
                        <label>Tính năng mới nhất của Cổng thông tin chính thức KTO Việt Nam là gì?</label>
                        <div class="awser">
                          <div class="inputGroup">
                            <input type="radio" id="question_3_1" name="question_3" v-model="answer.q3" value="1"  >
                            <label  for="question_3_1">A. E-coupon giảm giá các dịch vụ tại Hàn Quốc</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_3_2" name="question_3" v-model="answer.q3" value="2"  >
                            <label   for="question_3_2">B. Người dùng website có thể đăng bài trải nghiệm du lịch Hàn Quốc của chính mình</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_3_3" name="question_3" v-model="answer.q3" value="3"  >
                            <label   for="question_3_3">C. E-book về du lịch Hàn Quốc</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_3_4" name="question_3" v-model="answer.q3" value="4"  >
                            <label   for="question_3_4">D. Giới thiệu về du lịch khen thưởng MICE</label>
                          </div>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 4</p>
                        <label>Các chủ đề du lịch trong mục Du lịch theo chủ đề trên Cổng thông tin chính thức KTO Việt Nam là gì?</label>
                        <div class="awser">
                          <div class="inputGroup">
                            <input type="radio" id="question_4_1" name="question_4" v-model="answer.q4" value="1"  >
                            <label for="question_4_1">A. Du lịch y tế; Du lịch Cao cấp</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_4_2" name="question_4" v-model="answer.q4" value="2"  >
                            <label for="question_4_2">B. Lễ hội, sự kiện; Du lịch MICE</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_4_3" name="question_4" v-model="answer.q4" value="3"  >
                            <label for="question_4_3">C. Du lịch bốn mùa xuân, hạ, thu đông</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio"  id="question_4_4" name="question_4" v-model="answer.q4" value="4"  >
                            <label for="question_4_4">D. Tất cả các phương án trên</label>
                          </div>
                        </div>
                      </div>
                      <div class="step3__item">
                        <p>Câu 5</p>
                        <label>Nhóm nhạc nào là Đại sứ du lịch Hàn Quốc năm 2018 và đang xuất hiện trên banner tại trang chủ của Website KTO Việt Nam?</label>
                        <div class="awser">
                          <div class="inputGroup">
                            <input type="radio" id="question_5_1" name="question_5" v-model="answer.q5" value="1"  >
                            <label  for="question_5_1">A. EXO</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_5_2" name="question_5" v-model="answer.q5" value="2"  >
                            <label  for="question_5_2">B. BTS</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_5_3" name="question_5" v-model="answer.q5" value="3"  >
                            <label  for="question_5_3">C. Black Pink</label>
                          </div>
                          <div class="inputGroup">
                            <input type="radio" id="question_5_4" name="question_5" v-model="answer.q5" value="4"  >
                            <label  for="question_5_4">D. TWICE</label>
                          </div>
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
  mounted () {
    let currentUser = JSON.parse(localStorage.getItem('checkUser'))
    if (!currentUser || !currentUser.id) {
      this.$router.push({path: '/'})
    } else {
      this.$axios.post('https://ktoevents.lotteskywalk.tk/api/event-xem-web-moi/check-user/'+currentUser.id)
      .then(res => {
        if (res.data.length > 0) {
          this.$router.push({path: '/'})
        }
      })
      .catch(err => console.log(err))
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

.playgame {
  .head {
    position: initial;
  }
}
.inputGroup {
    background-color: #fff;
    display: block;
    margin: 10px 0;
    position: relative;

    label {
      padding: 12px 40px;
      width: 100%;
      display: block;
      text-align: left;
      color: #3C454C;
      cursor: pointer;
      position: relative;
      z-index: 2;
      transition: color 200ms ease-in;
      overflow: hidden;
      @media screen and (max-width: 767px) {
          padding: 12px 30px 12px 40px;
        }
      &:before {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        content: '';
        // background-color: #5562eb;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
        opacity: 0;
        z-index: -1;
      }

      &:after {
        width: 32px;
        height: 32px;
        content: '';
        border: 2px solid #0caffa;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 3px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all 200ms ease-in;
        @media screen and (max-width: 767px) {
          left: 0;
        }
      }
    }

    input:checked ~ label {
      color: #0caffa;

      &:before {
        transform: translate(-50%, -50%) scale3d(56, 56, 1);
        opacity: 1;
      }

      &:after {
        background-color: #0caffa;
        border-color: #0caffa;
      }
    }

    input {
      width: 32px;
      height: 32px;
      order: 1;
      z-index: 2;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      visibility: hidden;
      @media screen and (max-width: 767px) {
        left: 0;
      }
    }
  }

</style>
