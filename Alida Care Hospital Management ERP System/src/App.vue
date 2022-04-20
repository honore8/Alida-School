<template>
  <div id="app">
   <appLoader v-if="show" />
    <appMenu v-else />
    <appLogin v-show="show == false" />
    <router-view></router-view>
    <!-- <userProfile v-show="show == false" /> -->
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import appMenu from "./components/appMenu.vue";
import appLogin from "./components/appLogin.vue";
import appLoader from "./components/appLoader.vue";
import userProfile from "./components/userProfile.vue";
import router from './routes.js'
router.use(router)
// eslint-disable-next-line no-unused-vars
export default {
  name: "App",
  components: {
    appMenu,
    appLogin,
    appLoader,
    userProfile,
  },
  data() {
      return {
        show: true,
      };
    },
    methods: {
      setShow() {
        setTimeout(() => {
          this.show = false;
        }, 5000);
      },
    },
    mounted: function () {
       this.setShow();
     },
};
</script>
