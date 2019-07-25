<template>
  <div class="home">
    <Welcome/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Main.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>
