<template>
  <Card class="mainContainer" style="width:320px">
    <div style="text-align:center">
      <input v-model="orderNumber"></input>
      <input v-model="customerName"></input>
      <input v-model="customerPhone"></input>
      <input v-model="status"></input>
      <input v-model="appointTime" placeholder="YYYY-MM-DD"></input>
      <input v-model="weights"></input>
      <Button @click="addParcel"></Button>
    </div>
  </Card>
</template>
<script>
  export default {
    data() {
      return {
        orderNumber: '',
        customerName: '',
        customerPhone: '',
        status: '',
        appointTime: '',
        weights: ''
      }
    }
  }
</script>
<style scoped>
  .mainContainer {
    margin: 0 auto;
  }

  .user-img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
</style>
