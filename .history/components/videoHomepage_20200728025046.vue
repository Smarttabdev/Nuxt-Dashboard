<template >
  <v-container fluid ma-0 pa-0 fill-width>
<v-card class=" pa-4 px-12 mx-5" max-width="100%" outlined color="#F4E3EB" style="border-radius:20px" >
<v-row no-gutters>
        <v-col   class=" justify-center align-center d-flex">
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
        <v-col >
          <v-card
          color="rgba(255, 0, 0, 0)"
            class="pa-5 justify-center align-center d-flex pr-12"
            outlined
            tile
            lg="5"
          >
            <v-responsive  :aspect-ratio="16/9">
          <iframe style="border-radius:20px; height:100%; width:100% !important"  src="https://www.youtube.com/embed/8eCoSsTNzG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </v-responsive>
         
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    </v-container>
</template>


