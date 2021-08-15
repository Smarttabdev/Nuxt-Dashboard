<template>
    <v-container fluid style="width: 97%">
            <v-card
            class=""
            color="#F4E3EB"
            style="border-radius:20px" 
          >
          <v-row no-gutters >
          <v-col   style="height:488px" class=" justify-center align-center d-flex" cols="12" md="4" ml="6">
            <div>
            <v-card-title   class=" welcome">Welcome!</v-card-title>
            <v-card-title 
      style="max-width: 100%;" class=" title">Introducing Api Desk</v-card-title>
            <v-card-subtitle>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</v-card-subtitle>

            <v-card-actions>
             <v-btn   class=" ml-2 justify-center overline"  color="#827AF3" dark ><v-icon  class="mr-2">mdi-play</v-icon> Play Video</v-btn>
            </v-card-actions>
            </div>
          </v-col>
          <v-col class="text-center" cols="12" md="8">
            <div class="mx-auto">
            <iframe  class="video" width="70%" height="315" src="https://www.youtube.com/embed/IVvkjuEAwgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </v-col>
            </v-row>
          </v-card>
    </v-container>
</template>



<script>
export default {
    
}
</script>
<style >
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

.video{
width: 680px;
height: 420px;
background: transparent;
border-radius: 20px;

}

</style>