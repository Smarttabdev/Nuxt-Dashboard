<template>
    <v-container fluid style="width: 97%">
            <v-card
            color="#F4E3EB"
            
            
          >
          <v-row align="center">
          <v-col  cols="12" md="4">
            <div>
            <v-card-title class="headline">Welcome!</v-card-title>
            <v-card-title 
      style="max-width: 100%;" class=" text-break display-1">Introducing Api Desk</v-card-title>

            <v-card-subtitle>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</v-card-subtitle>

            <v-card-actions>
             <v-btn   class=" ml-2 justify-center overline"  color="#827AF3" dark ><v-icon  class="mr-2">mdi-play</v-icon> Play Video</v-btn>
            </v-card-actions>
            </div>
          </v-col>
          <v-col class="text-center" cols="12" md="8">
            <div class="mx-auto">
            <iframe width="70%" height="315" src="https://www.youtube.com/embed/IVvkjuEAwgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
<style lang="sass">

</style>