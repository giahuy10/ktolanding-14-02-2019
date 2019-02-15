<template>
  <div :class="$route.name">
    <header class="head" :class="navClass">
        <div class="head3">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h1 class="logo-headline" title="KTO - Landing page">                        
                        <a class="logo" href="#" @click.prevent="$router.push({path: '/'})">
                            <img src="/img/logo.png" alt="Calista">
                        </a>
                        </h1>                    </div>
                    <div class="col-md-9">
                        <div class="nav">

                            <ul id="menu-header" class="header__navigation">
                                <li id="menu-item-1967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-81 current_page_item menu-item-1967"><a href="#reveal">Giới thiệu</a></li>
                                <li id="menu-item-1973" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1973"><a href="#prize">Giải thưởng</a></li>
                                <li id="menu-item-1966" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1966"><a href="#rules-play">Thể lệ</a></li>
                            </ul>
                            <div class="navigation__mobile">
                                <div class="logo__mobile">
                                    <img src="/img/logo.png" alt="Calista">
                                </div>
                                <ul id="menu-header" class="header__navigation--mobile"><li id="menu-item-1967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-81 current_page_item menu-item-1967"><a href="https://dev.visitkorea.org.vn/xem-web-moi-ngay-nhan-qua-lien-tay/">Giới thiệu</a></li>
                                <li id="menu-item-1973" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1973"><a href="http://dweb.vn">Giải thưởng</a></li>
                                <li id="menu-item-1966" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1966"><a href="https://dev.visitkorea.org.vn/xem-web-moi-ngay-nhan-qua-lien-tay/?cat=77">Thể lệ</a></li>
                                </ul>                            
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <nuxt />
    <section class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="footer__content">
                    <p>
                        VĂN PHÒNG ĐẠI DIỆN TỔNG CỤC DU LỊCH HÀN QUỐC TẠI VIỆT NAM
                    </p>
                    <p>
                        Phòng 1302, Tầng 13, Tòa nhà Charm Vit, 117 Trần Duy Hưng, Cầu Giấy, Hà Nội <br>
                        Tel: (+84.24) 3556 4040     Fax: (+84.24) 3556.4141<br>
                        www.visitkorea.org.vn<br>
                        hanoi@knto.or.kr<br>
                    </p>
                    <p>
                        Copyright © KOREA TOURISM ORGANIZATION KTO IN VIETNAM. ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
            <div class="col-md-4">
                <div style="display: flex">
                    <figure class="footer__brand"></figure>
                    <figure class="footer__brand2"></figure>
                </div>
            </div>
        </div>
    </div>

</section>
  </div>
</template>
<script>
export default {
   data () {
    return {
      navClass: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 20) {
        this.navClass = 'sticky'
      } else {
        this.navClass = ''
      }
    },
  }
}
</script>

<style>
@media (min-width: 1200px) {
.container {
    width: 1000px;
}
}
.head {
  z-index: 100;
  position: fixed;
  width: 100%;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.head.sticky {
  background: #fff;
}
.head.sticky .logo img {
  margin: 15px 0;
}
.head.sticky .header__navigation > li > a {
  height: 70px;
}
</style>
