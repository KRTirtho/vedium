import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import {
  VApp,
  VMain,
  VAppBar,
  VAppBarTitle,
  VRow,
  VCol,
  VTextField,
  VIcon,
  VBtn,
  VAvatar,
  VImg,
  VContainer,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VChip,
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VApp,
    VMain,
    VAppBar,
    VAppBarTitle,
    VRow,
    VCol,
    VTextField,
    VIcon,
    VBtn,
    VAvatar,
    VImg,
    VContainer,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VChip,
  },
});

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg", // default - only for display purposes
  },
});
