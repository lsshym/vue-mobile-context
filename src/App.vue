<template>
    <Home />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Home from './views/Home.vue'
export default defineComponent({
    components:{
        Home
    }

});
</script>
<style lang="scss">
body {
    -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
}
</style>
