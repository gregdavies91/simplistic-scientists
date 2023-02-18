<template>
  <ion-page>

    <ion-header>
      <ion-toolbar style="--background: transparent">
        <ion-button fill="clear" background="transparent" slot='start'>
          <ion-menu-button color="dark"></ion-menu-button>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    
      <div id="formcontainer">
        <h2>Get in touch!</h2>
        <p>You can send us an email at <a href="mailto:greg@simplisticscientists.com">greg@simplisticscientists.com</a>.</p> 
        <br>
        <!-- <br>
        <p>If you prefer, you can also send a DM to <a href="https://twitter.com/unlimitltd" target="_blank">@unlimitltd</a>.</p>
        <br> -->
        <br>
        <form action="https://formsubmit.co/greg@simplisticscientists.com" method="POST">
            <ion-item color="light" style="opacity:50%;">
              <ion-label>Name: </ion-label> 
              <ion-input name="name" type="text" color="dark" placeholder="Enter your name..." v-model="state.name"></ion-input>
            </ion-item>
            
            <ion-item color="light" style="opacity:50%;">
              <ion-label>Email: </ion-label>
              <ion-input name="email" color="dark" placeholder="Enter your email..." v-model="state.email"></ion-input>
              <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>    
            </ion-item>

            <ion-item color="light" style="opacity:50%;">
              <ion-textarea name="message" color="dark" placeholder="Write your message here..." v-model="state.message"></ion-textarea>
            </ion-item>
        
        <ion-button @click="submitForm" type="submit" expand="block" size="large" color="light" style="opacity:50%;">Submit</ion-button>
        <input type="hidden" name="_subject" value="Simplistic Scientists website">
        <input type="hidden" name="_next" value="https://simplisticscientists.com">
        <input type="hidden" name="_captcha" value="false">
        </form>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonInput, IonTextarea, IonItem } from '@ionic/vue';
import { defineComponent, reactive, computed } from 'vue';
import useValidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default defineComponent({
  name: 'Contact',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonLabel,
    IonInput,
    IonTextarea,
    IonItem
  },
  setup() {
    const state = reactive({
      name: '',
      email: '',
      message: '',
    })
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(2) },
        email: { required, email },
      }
    })

    const v$ = useValidate(rules, state)

    // const result = ref(null)

    // axios.get('../views/Contact.vue')
    //   .then(data => result.value = data);

    return {
      state,
      v$,
      // result
    }
  },
  methods: {
    submitForm() {
      console.log('Form Values', this.state)

      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form sucessfully submitted. I will get back to you shortly.')
      }
      else {
        alert('Error! Please fill in all the required fields and click submit again.')
      }    
    }
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

#formcontainer {
  text-align: center;
  position: absolute;
  left: 575px;
  right: 575px;
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 1550px) {
#formcontainer {
  text-align: center;
  position: absolute;
  left: 275px;
  right: 275px;
  top: 50%;
  transform: translateY(-50%);
}
}

@media (max-width: 1050px) {
#formcontainer {
  text-align: center;
  position: absolute;
  left: 75px;
  right: 75px;
  top: 50%;
  transform: translateY(-50%);
}
}

#formcontainer strong {
  font-size: 20px;
  line-height: 26px;
}

#formcontainer p {
  font-size: 16px !important;
  line-height: 22px;
  color: #fff !important;
  margin: 0;
}

#formcontainer a {
  text-decoration: underline !important;
  color: white;
}

#formcontainer h2 {
  font-style: bold;
  font-size: 40px;
}
</style>