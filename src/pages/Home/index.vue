<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor
      v-for="item in floorData"
      :key="item.id"
      :item="item"
      :swiperName="'swiper' + item.id"
    ></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState("home", ["floorData"]),
  },
  mounted() {
    this.$store.dispatch("home/getFloorsDate");
  },
};
</script>

<style>
</style>