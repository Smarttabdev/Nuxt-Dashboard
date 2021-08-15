<template>
    <v-container fluid style="width: 97%">
            <v-card
            color="#F4E3EB"
            style="border-radius:20px" 
            height="488px"
            
            
          >
          <v-row no-gutters>
          <v-col class=" justify-center align-center d-flex" cols="12" md="4">
             <v-card
          color="rgba(255, 0, 0, 0)"
          outlined
          tile
          >
           <v-list-item three-line>
      <v-list-item-content style="max-width:75%" class="mb-8" >

        <v-list-item-title style="font-size:2.75rem !important" class="headline mb-6">Headline 5</v-list-item-title>
        <p style="font-size:1rem !important; font-family:Poppins">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </v-list-item-content>

      
    </v-list-item>
    <v-card-actions>
              <v-btn style="font-family:Poppins" large height="36px" class="px-8 white--text" depressed small color="#827AF3">    <v-icon light>
             play_arrow
            </v-icon>Play video</v-btn>
    </v-card-actions>
          </v-card>
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