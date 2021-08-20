<template>
  <v-card>
    <v-card-text style="padding-bottom: 0">
      <strong>{{ user.name }}</strong> in <strong>{{ user.group }}</strong>
    </v-card-text>
    <v-row>
      <v-col>
        <v-card-title style="padding-top: 0">
          {{ storyTitle }}
        </v-card-title>
        <v-card-subtitle>
          {{ previewText }}
        </v-card-subtitle>
        <v-card-actions>
          <p
            class="text-caption"
            style="
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            "
          >
            {{ publishDate }} • {{ readTime }} min read •
            <v-chip>{{ topic }}</v-chip> • {{ recommendatationReason }}
          </p>
        </v-card-actions>
      </v-col>
      <v-col cols="5">
        <v-img :src="coverImg" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SotryCard",
  props: {
    storyTitle: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
    readTime: {
      type: Number,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    recommendatationReason: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
      validator(value) {
        const keys = Object.keys(value);
        return (
          typeof value === "object" &&
          !Array.isArray(value) &&
          ["name", "img"].every((key) => keys.includes(key))
        );
      },
    },
  },
});
</script>
