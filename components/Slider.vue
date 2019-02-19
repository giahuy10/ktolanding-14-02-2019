<template>
  <section class="slider">
      <div class="banner">
        <ul id="banner" class="">
            <li>
              <figure class="banner-image" style="background-image: url(/img/hero_background.jpg)" data-src="">
                  <div class="banner-content">
                    <h3>Xem web mới ngay</h3>
                    <h4>Nhận quà liền tay</h4>
                    <p>(Thời gian event từ 20/2 đến 5/3/2019)</p>
                    <br><br><br>
                    <div class="banner-browser">
                        <img src="/img/hero_background-2.jpg" >
                    </div>
                  </div>
              </figure>
            </li>
        </ul>
      </div>
  </section>
</template>
<style lang="scss">

@media screen and (max-width: 1400px) and (min-width: 1200px) {
  .banner-image {
    &:before {
      padding-top: 60%;
    }
  }
  .banner-content {
      max-width: 630px;
  }
}
@media screen and (max-width: 1650px) and (min-width: 1401px ) {
  .banner-image {
    &:before {
      padding-top: 60%;
    }
  }
  .banner-content {
      max-width: 700px;
  }
}
@media screen and (max-width: 1199px) and (min-width: 990px) {
  .banner-image {
    &:before {
      padding-top: 75%;
    }
  }
  .banner-content {
      max-width: 470px;
      h4 {
        font-size: 40px;
      }
  }
}
</style>
