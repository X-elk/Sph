<template>
  <div>
    <TodoBar></TodoBar>
    <TypeNav></TypeNav>
    <Main></Main>
  </div>
</template>

<script>
import TodoBar from "./TodoBar";
import TypeNav from "../Home/TypeNav";
import Main from "./Main";
export default {
  name: "Search",
  components: {
    TodoBar,
    TypeNav,
    Main,
  },
};
</script>

<style>
</style>