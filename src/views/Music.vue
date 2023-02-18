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

    <div class="container" id="container">
    <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=229422759/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/track=1042700639/transparent=true/" seamless><a href="https://simplisticscientists.bandcamp.com/album/happiness">Happiness by Simplistic Scientists</a></iframe>
    </div>  
        

    </ion-content>

  </ion-page>
</template>

<script lang="ts">

import { IonContent, IonHeader, IonPage, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Music',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton
  }
});
</script>

<style scoped>
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
