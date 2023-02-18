<template>
  <ion-page>

    <ion-header>
      <ion-toolbar style="--background: transparent">
        <ion-button fill="clear" slot='start' style="--background-hover-opacity: 0%">
          <ion-menu-button color="dark" style="--background-hover-opacity: 0%"></ion-menu-button>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

<!--       <video id="videobg" autoplay loop muted webkit-playsinline>
          <source src="../assets/bg.mp4" types='video/mp4; codecs="h.264"'>
      </video> -->
      
      <div id="container">
          <a href="https://www.facebook.com/simplisticscientists">
             <ion-icon name="logoFacebook" size="large" color="dark"></ion-icon>
          </a>
          
          <a href="https://www.twitter.com/simplisticsci">
            <ion-icon name="logoTwitter" size="large" color="dark"></ion-icon>
          </a>
          
          <a href="https://www.instagram.com/simplisticscientists">
            <ion-icon name="logoInstagram" size="large" color="dark"></ion-icon>
          </a>
          
          <a href="https://www.youtube.com/@simplisticscientists">
            <ion-icon name="logoYoutube" size="large" color="primary"></ion-icon>
          </a>

          <!-- <a href="https://open.spotify.com/artist/5JKS3ep2Hksc735RNtbfZ7">
            <ion-icon name="logoSpotify" size="large" color="black"></ion-icon>
          </a> -->

      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { logoYoutube, logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';

export default defineComponent({
  name: 'About',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonIcon
  },
  data() {
    return {
      logoYoutube,
      logoFacebook,
      logoTwitter,
      logoInstagram
    }
  }
});
</script>

<style scoped>
ion-icon {
  font-family: 'Ionicons';
}
ion-content {
  font-family: Office Code Pro !important;
  font-size: 1.2em;
}

ion-menu-button {
  padding-top: 10px;
}

#container {
  text-align: center;
  position: absolute;
  left: 50px;
  right: 50px;
  top: 55%;
  transform: translateY(-50%);
}

</style>
