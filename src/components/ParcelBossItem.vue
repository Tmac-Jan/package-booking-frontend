<template>
  <Table border :columns="columns1" :data="this.generateFilterList">
    <template slot-scope="{ row }" slot="name">
      <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <!--      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>-->
      <Button type="primary" size="small" @click="remove(index)">确认收货</Button>
    </template>
  </Table>
</template>
<script>
  import {mapActions} from "vuex";

  export default {
    data() {
      return {
        tabType: 'ALL',
        columns1: [
          {
            title: '运单号',
            key: 'orderNumber'
          },
          {
            title: '顾客姓名',
            key: 'customerName'
          },
          {
            title: '顾客电话',
            key: 'customerPhone'
          },
          {
            title: '状态',
            key: 'status',
            render: (h, params) => {
              if (params.rows.status === 0) {
                return "未取件";
              } else if (params.rows.status === 1) {
                return "已预约";
              } else if (params.rows.status === 2) {
                return "已取件";
              } else {
                return "无状态";
              }
            }
          },
          {
            title: '预约时间',
            key: 'appointTime'
          },
          {
            title: 'Action',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        // data1:this.generateFilterList
      }
    },
    created() {
      this.requestParcelItems();
    },
    computed: {
      generateFilterList() {
        if (this.tabType === 'ALL') {
          return this.$store.state.parcelItemList;
        }
   else if (this.tabType === 'Active') {
    const a = this.$store.state.parcelItemList.filter((e) =>
      e.status == 0);
    return a;
  } else {
    const a = this.$store.state.parcelItemList.filter((e) =>
      e.status == 1);
    return a;
  }
  }
  },
  methods:{
  ...
    mapActions(["requestParcelItems", "addParcelItem"]),
  }
  }
</script>
