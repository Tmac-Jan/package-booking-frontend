<template>
  <div>
    <Button type="info" @click="switchTab('ALL')">全部</Button>
    <Button type="success" @click="switchTab('WAIT')">已预约</Button>
    <Button type="warning" @click="switchTab('COMPLETED')">已取件</Button>
    <Button type="error" @click="switchTab('NOTYET')">未预约</Button>
  </div>
</template>

<script>
  export default {
    name: 'ParcelButtonGroup',
    components: {

    },
    methods:{
      switchTab (value) {
        this.$store.dispatch('updateTabType', {tabType:value});
      }
    }
  }
</script>
