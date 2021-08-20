<template>
  <v-app>
    <v-main>
      <v-app-bar flat dense>
        <v-app-bar-title>
          <v-icon color="black">{{ mdiCircle }}</v-icon>
          <v-icon color="black">{{ mdiCircle }}</v-icon>
          <v-icon color="black">{{ mdiCircleOutline }}</v-icon>
          Medium
        </v-app-bar-title>
        <v-row justify="end">
          <v-col cols="3">
            <v-text-field
              type="search"
              style="margin-top: 25px"
              dense
              name="name"
              outlined
              placeholder="Search"
              :prepend-inner-icon="mdiMagnify"
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn icon>
          <v-icon>{{ mdiBookmarkOutline }}</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>{{ mdiBellOutline }}</v-icon>
        </v-btn>
        <v-btn icon>
          <v-avatar size="40">
            <v-img
              src="https://miro.medium.com/fit/c/64/64/1*qc1jL3RX8BkMfuA5b5NAMQ.jpeg"
            />
          </v-avatar>
        </v-btn>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mdiCircle,
  mdiCircleOutline,
  mdiBookmarkOutline,
  mdiBellOutline,
  mdiMagnify,
} from "@mdi/js";

export default Vue.extend({
  name: "App",

  data: () => ({
    mdiBellOutline,
    mdiBookmarkOutline,
    mdiCircle,
    mdiCircleOutline,
    mdiMagnify,
  }),
});
</script>
