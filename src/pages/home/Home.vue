<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <!-- topics -->
        <v-row align="center" style="flex-wrap: nowrap; overflow-x: scroll">
          <v-col cols="2">
            <span>Your Topics</span>
          </v-col>
          <v-col v-for="(topic, i) in topics" :key="topic + i">
            <v-chip>{{ topic }}</v-chip>
          </v-col>
        </v-row>
        <!-- followees -->
        <v-row>
          <v-col
            v-for="(followee, i) in followees"
            :key="followee.name + followee.img + i"
            cols="1"
          >
            <v-btn icon large>
              <v-avatar>
                <v-img :src="followee.img" />
              </v-avatar>
            </v-btn>
            <p>{{ followee.name }}</p>
          </v-col>

          <!-- Articles & Links Card -->
          <v-row>
            <v-col
              cols="9"
              v-for="(storyMeta, i) in storiesMeta"
              :key="storyMeta.title + i"
            >
              <story-card v-bind="storyMeta" />
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import StoryCard from "../../components/StoryCard.vue";
export default Vue.extend({
  name: "Home",
  components: {
    StoryCard,
  },
  data() {
    const topics = [
      "Artificial Intelligence",
      "Digital Life",
      "Programming",
      "Software Engineering",
      "Space",
      "Technology",
      "UX",
    ];

    const followees = [
      {
        name: "Captain Marvel",
        img: "https://randomuser.me/api/portraits/women/14.jpg",
      },
      { name: "Drax", img: "https://randomuser.me/api/portraits/men/35.jpg" },
      { name: "Woody", img: "https://randomuser.me/api/portraits/men/38.jpg" },
      { name: "Wanda", img: "https://randomuser.me/api/portraits/women/7.jpg" },
      {
        name: "Dr. Banner",
        img: "https://randomuser.me/api/portraits/men/62.jpg",
      },
    ];

    const storiesMeta = [
      {
        storyTitle: "Why is Rust replacing C/C++ & Go replacing C#/Java?",
        coverImg:
          "https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/1604661052496-1JWECFMKSRR7UKSHE1L2/rust-vs-go-wide.png?format=1500w",
        previewText:
          "Rust & Go are pretty modern. Both of these were created almost at the same time. People have a miscoception that both of them are each other's rival. But the real case is not. Two are....",
        publishDate: "Aug 5",
        readTime: 5,
        recommendatationReason: "Because you're a programming nerd",
        topic: "Programming",
        user: {
          name: "Rusatcean",
          img: "https://rustacean.net/assets/rustacean-orig-noshadow.svg",
          group: "C++ Land",
        },
      },
    ];

    return {
      topics,
      followees,
      storiesMeta,
    };
  },
});
</script>
