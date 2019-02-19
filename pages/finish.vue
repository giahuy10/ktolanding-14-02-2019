<template>
  <div class="finish">

    <section class="shareFacebook" id="shareFacebok">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div class="step5__inner">
                    
                    <div class="step5__intro text-center finished">
                      <br>
                      <br>
                      
                       <img src="/xem-web-moi-ngay-nhan-qua-lien-tay/img/Korean.png" style="width: 120px;" alt="">
                      <h3>Chúc mừng </h3>
                      <p> <span>Bạn đã hoàn thành xong phần chơi </span> <br>
                      Bạn hãy quay lại fanpage KTO vào ngày 12/3/2019 để xem thông báo kết quả nhé
                       </p>
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
                    
                    <figure class="event__image lazy" style="display: block; background-image: url(/xem-web-moi-ngay-nhan-qua-lien-tay/img/hero2_image.png);"></figure>
                </div>
              </div>
          </div>
        </div>
    </section>
  </div>
</template>
<script>

export default {
  mounted () {
    let currentUser = JSON.parse(localStorage.getItem('checkUser'))
    if (!currentUser || !currentUser.id) {
      this.$router.push({path: '/'})
    } 
  }
}
</script>

<style lang="scss">
.finished {
  h3 {
    color: #04bdb5;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    span {
      font-size: 24px;
    }
  }
}
.finish {
  .head {
    position: initial;
  }
  section#shareFacebok {
      background:url(/xem-web-moi-ngay-nhan-qua-lien-tay/img/background-step5.jpg);
      padding: 120px 0 380px;
      @media screen and (max-width: 767px) {
        padding: 120px 40px;
      }
      @media screen and (min-width: 1120px) and (max-width: 1400px) {
       
        background-position: -270px;
        padding: 0 0 380px;
      }
      @media screen and (min-width: 990px) and (max-width: 1100px) {
        background-size: cover;
        background-position: -285px;
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


