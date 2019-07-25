<template>
  <div>
    <parcel-button-group></parcel-button-group>
    <br>
    <Table border :columns="columns1" :data="this.generateFilterList">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <!--      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>-->
        <Button type="primary" size="small" v-show="row.status!=2" @click="confirmReceipt(index)">确认收货</Button>
      </template>
    </Table>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import ParcelButtonGroup from './ParcelButtonGroup'

  export default {
    components: {
      ParcelButtonGroup
    },
    data() {
      return {
        tabType: this.$store.state.tabType,
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
              return h('div', [
                h('span', this.generateStatus(params.row.status))
              ])
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
        data1: this.generateFilterList
      }
    },
    created() {
      this.requestParcelItems();
    },
    computed: {
      generateFilterList() {
        if (this.$store.state.tabType === 'ALL') {
          this.data1 = this.$store.state.parcelItemList
          return this.$store.state.parcelItemList
        } else if (this.$store.state.tabType === 'NOTYET') {
          const a = this.$store.state.parcelItemList.filter((e) =>
            e.status === 0)
          return a
        } else if (this.$store.state.tabType === 'WAIT') {
          const a = this.$store.state.parcelItemList.filter((e) =>
            e.status === 1)
          return a
        } else {
          const a = this.$store.state.parcelItemList.filter((e) =>
            e.status === 2)
          return a
        }
      }
    },
    methods: {
      ...mapActions(['requestParcelItems', 'addParcelItem', 'updateParcelItem']),
      switchTab(value) {
        this.tabType = value
      },
      confirmReceipt(index) {
        let parcelItems = this.generateFilterList;
        let item = parcelItems[index];
        item.status = 2;
        this.updateParcelItem(item);
      },
      generateStatus(status) {
        if (status === 0) {
          return '未取件'
        } else if (status === 1) {
          return '已预约'
        } else if (status === 2) {
          return '已取件'
        } else {
          return '无状态'
        }
      }

    }
  }
</script>
