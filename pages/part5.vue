<template>
  <div class="finish">

    <section class="shareFacebook" id="shareFacebok">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div class="step5__inner">
                    <h1 class="step5__headline">Bước 5</h1>
                    <div class="step5__intro">
                      <p>Like và share bài đăng của KTO trong đường link dưới đây lên tường của bạn với chế độ công khai:</p>
                      <p>
                        bit.ly/xemwebmoingay-nhanqualientay
                      </p>
                     
                      
                      <social-sharing @open="openSharing()" @change="changeSharing()" @close="closeSharing()" url="http://bit.ly/xemwebmoingay-nhanqualientay"
                      title="Xem web mới ngay nhận quà liền tay cùng KTO"
                      description="Xem web mới ngay nhận quà liền tay cùng KTO"
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="kto,website,new"
                      twitter-user="vuejs"
                      inline-template>
                      <div class="facebook-share">
                          
                          <network network="facebook">
                            <i class="fa fa-facebook"></i> Chia sẻ Facebook
                          </network>
                          
                      </div>
                    </social-sharing>
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
                    <figure class="event__image lazy" style="display: block; background-image: url(/xem-web-moi-ngay-nhan-qua-lien-tay/img/hero2_image.png);"></figure>
                </div>
              </div>
          </div>
        </div>
    </section>
  </div>
</template>
<script>
import { ShareFacebook} from 'vue-share-social'
import SocialSharing from 'vue-social-sharing'

export default {
  components: {
    ShareFacebook,
    SocialSharing
  },
  methods: {
    openSharing () {
      console.log('open')
    },
    closeSharing () {
      console.log('close')
      this.$router.push({path: '/finish'})
    },
    changeSharing () {
      console.log('change')
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
  }
}
</script>

<style lang="scss">
.part5 {
  .head {
    position: initial;
  }
  section#shareFacebok {
      background:url(/xem-web-moi-ngay-nhan-qua-lien-tay/img/background-step5.jpg);
      padding: 120px 0 480px;
      @media screen and (max-width: 767px) {
        padding: 120px 40px;
      }
  }
  h1.step5__headline {
    margin: 0 0 15px;
    font-size: 18px;
    color: #00284c;
    font-weight: 600;
  }
  p {
    margin-bottom: 20px;
  }
  button.btn.btn-share {
    margin-top: 20px;
    background: none;
    border: 1px solid;
    color: #00abf8;
}
}
.facebook-share span {
    display: inline-block;
    border: red;
    background: red;
    margin-top: 20px;
    background: none;
    border: 1px solid;
    color: #00abf8;
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
}
</style>


