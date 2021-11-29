<template>
  <div>
    <Register_></Register_>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import Register_ from "./Register_/index.vue";
import CopyRight from "../../components/Footer/CopyRight/index.vue";
export default {
  name: "Register",
  components: {
    Register_,
    CopyRight,
  },
};
</script>

<style>
</style>