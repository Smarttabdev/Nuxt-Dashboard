<template>
    <v-container class="containerWelcome" fluid >
            <v-card
            class="card"
            color="#F4E3EB"
            style="border-radius:20px;" 
            outlined="false"
          >
          <v-row no-gutters >
          <v-col   style="height:488px" class=" justify-center align-center d-flex" cols="12" md="4" ml="6" xs="0"> 
            <div>
            <v-card-title   class=" welcome">Welcome!</v-card-title>
            <v-card-title 
      style="max-width: 100%;font-family: Poppins !important; font-weight: 500 !important; font-size: 34px !important; text-align: left; color: #323a45; margin-bottom:20px !important;" class=" title">Introducing Api Desk</v-card-title>
            <v-card-subtitle class="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</v-card-subtitle>

            <v-card-actions>
             <v-btn   class=" ml-2 justify-center overline"  width="160" color="#827AF3" dark ><v-icon  class="mr-2">mdi-play</v-icon> Play Video</v-btn>
            </v-card-actions>
            </div>
          </v-col>
          <v-col class=" justify-center align-center d-flex" cols="12" md="8">
            <div class="mx-auto">
              <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>

            <!-- <iframe md5 class="video"  src="https://www.youtube.com/embed/pGKF2ewanW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            </div>
            </v-col>
            </v-row>
          </v-card>
    </v-container>
</template>



<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    }
  }
    
}
</script>
<style >

.containerWelcome{
  width: 97%;
}
.card{
padding-left:60px !important
}
.welcome{
font-family: Poppins;
font-weight: 500;
font-size: 30px;
text-align: left;
color: #323a45;
}

.title{
font-family: Poppins;
font-weight: 500;
font-size: 44px;
text-align: left;
color: #323a45;

}
.text{
font-family: Poppins;
font-weight: normal;
font-size: 16px;
text-align: left;
color: #77838f;

}

.video{
width: 680px;
height: 420px;
background: transparent;
border-radius: 20px;
}
@media only screen and (max-width: 600px)  {
  .video{
width: 90vw;
height: auto;
background: transparent;
border-radius: 20px;
}

.card{
padding-left:0px !important;
width:100% !important;
}

.containerWelcome{
  width: 100% !important;
  padding:0px;
}
  
}

</style>