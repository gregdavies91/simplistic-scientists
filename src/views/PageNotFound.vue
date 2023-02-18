<template>
  <ion-page>

    <ion-header>
      <ion-toolbar style="--background: transparent">

<!--         This button has to be on all views, can it be in a component? -->
        <ion-button fill="clear" background="transparent" slot='start'>
          <ion-menu-button color="dark"></ion-menu-button>
        </ion-button>
        
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container">

        <h1>Page Not Found</h1>

          <router-link to="/about">
            <ion-button color="light">Go Back Home</ion-button>
          </router-link>

      </div>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
  components: {
    IonContent,
    IonHeader,
    IonPage,
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