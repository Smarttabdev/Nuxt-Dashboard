<template>
 <v-container fluid class="mx-0 px-0">
     <welcomeCard />
      <cards />
      <billingPlans />
      <testimonial />
      <blog />
      <contactForm />
      <pageFooter />
 </v-container>
</template>

<script>
import cards from '@/components/cards';
import welcomeCard from '@/components/welcomeCard';
import billingPlans from '@/components/billingPlans';
import testimonial from '@/components/testimonial';
import contactForm from '@/components/contactForm';
import pageFooter from '@/components/pageFooter';
import blog from '@/components/blog';
import VueYouTubeEmbed from 'vue-youtube-embed'
export default {
components: {
            cards,
            welcomeCard,
            billingPlans,
            testimonial,
            contactForm,
            pageFooter,
            blog,
            VueYouTubeEmbed
            
        }
}
</script>

<style>
.container {
    background-color: #F5F6FA;
}
</style>