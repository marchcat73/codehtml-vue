<template>
  <v-container fluid p-0>
    <v-parallax
      dark
      height="400"
      :src="require('@/assets/images/bg.jpg')"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <div class="top_text">
          <h1 class="display-2 font-weight-thin mb-3">Вёрстка сайтов</h1>
          <h4 class="subheading">Web-мастер / Верстальщик</h4>
        </div>
      </v-layout>
    </v-parallax>
    <section id="about" class="s_about bg_light">
      <div class="section_header">
        <h2>Услуги</h2>
        <div class="s_descr_wrap">
          <div class="s_descr"><p>Информация</p></div>
        </div>
      </div>
      <div class="section_content">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 order-2 animation_1">
              <h3>Фото</h3>
              <div class="person">
                <img src="@/assets/images/photo.jpg" alt="Alt">
              </div>
            </div>
            <div class="col-lg-4 order-1 animation_2">
              <h3>Используемые технологии</h3>
              <ul>
                <li
                   v-for="technology in technologies"
                   :key="technology.name"
                >{{technology.name}}</li>
              </ul>
              <!-- <p>Bалидно, адаптивно, кроссброузерно.</p> -->
            </div>
            <div class="col-lg-4 order-3 animation_3 personal_last_block">
              <h3>Персональная информация</h3>
              <ul>
                <li>Профессиональное создание сайтов: HTML верстка, посадка на CMS ModX Revo.</li>
                <li>Skype: marchcat7373</li>
                <li>Веб-сайт: <a href="//codehtml.ru" target="_blank">codehtml.ru</a></li>
              </ul>
              <div class="social_wrap">
                <ul>
                  <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#" target="_blank"><i class="fab fa-vk"></i></a></li>
                  <li><a href="#" target="_blank"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      technologies: [
        { name: 'Вёрстка из PSD макетов' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'SASS' },
        { name: 'Gulp' },
        { name: 'Webpack' },
        { name: 'Bootstrap' },
        { name: 'Flexbox' },
        { name: 'JavaScrypt' },
        { name: 'Node JS' },
        { name: 'Vue JS' },
        { name: 'React JS' },
        { name: 'MongoDB' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .top_text {
    h1.display-2 {
      animation-delay: .5s;
      background-color: rgba(0,0,0,.7);
      box-shadow: 0 0 10px rgba(255,255,0,.7);
      color: #eff286;
      display: inline-block;
      font-family: 'RalewayRegular',sans-serif !important;
      font-size: 2rem;
      font-weight: 700;
      margin-left: 0;
      margin-right: 0;
      padding: 10px 25px;
      text-transform: uppercase;
    }

    h4 {
      animation-delay: 1s;
      background-color: rgba(0,0,0,.8);
      border: 2px solid #fff;
      color: #ccc;
      font-size: 1rem;
      margin: 0;
      padding: 5px;
      text-align: center;
      text-transform: uppercase;
    }
  }

</style>
