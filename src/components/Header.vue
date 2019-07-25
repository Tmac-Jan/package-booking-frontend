<template>
  <Header>
    <Button type="primary" class="left-btn" @click="goBack">Back</Button>
    <div class="user-div">
      <Avatar class="user-img" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
      <span class="userName-span">{{$store.state.userName}}</span>
    </div>
  </Header>
</template>

<script>
  export default {
    name: 'ParcelButtonGroup',
    components: {

    },
    methods:{
      goBack() {
        this.$router.push({name: '/'});
      }
    }
  }
</script>
<style scoped>
  .user-img {
    margin-right: 8px;
  }

  .user-div {
    float: right;
  }

  .left-btn {
    float: left;
    margin-top: 15px;
  }

  .userName-span {
    color: white;
  }
</style>
