<template >
<v-container fluid ma-0 pa-0 fill-width>
<videoHomepage/>

<div>hello</div>
   <v-container ref="slider" fluid ma-0 pa-0 fill-width  >
     <div style="width:100%">
       
  <v-col   class=" d-flex justify-space-between" >
    <!-- 12 van body 24 can margin cqards - 6 om dat 4 /24  = 6-->
       <v-card  :min-width="windowWidth -30 .toString()+ 'px'" ref="card" class=" mx-3 pa-5" height="362px" v-for="(item,index)  in products" :key="index">
       </v-card>
       
  </v-col>
 
    </div>
   </v-container>
  <div></div>

<v-container>{{windowWidth}}</v-container>

</v-container>
</template>

<script>
import videoHomepage from '~/components/videoHomepage.vue'
import axios from 'axios'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  components: {
    videoHomepage,
    VueYouTubeEmbed
  },
  data(){
    return{
      products:[],
      windowWidth: 0,
  }},

  mounted () {
    axios
      .get('/news')
      .then(response => (this.products = response.data.articles))
        this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);

      //Init
      this.getWindowWidth()
    })
  },
  methods: {
    getWindowWidth(event) {
        this.windowWidth = this.$refs.slider.offsetWidth /4
        console.log(this.windowWidth.toString()+ 'px')
      
      },

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
  
}


</script>
