import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../pages/home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // user profile
  // {
  //   path: "/:username",
  //   component: User
  // },
  // user stories
  // {
  //   path: "/:username/:title",
  //   component: Story
  // },
  // about user
  // {
  //   path: "/:username/about",
  //   component: About
  // },
  // user created draft stories
  // {
  //   path: "/me/stories/drafts",
  //   component: UserDrafts
  // },
  // response/feedback on their publications/comments
  // {
  //   path: "/me/stories/responses",
  //   component: UsersResponses
  // },
  // stories that user had written
  // {
  //   path: "/me/stories/public",
  //   component: UserStories
  // },
  // topic path
  // {
  //   path: "/topic/:name",
  //   component: Topic
  // },
];

const router = new VueRouter({
  mode: "history",
  base: (import.meta as any).env.BASE_URL,
  routes,
});

export default router;
