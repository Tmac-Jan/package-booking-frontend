<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="订单号码" prop="orderNumber">
      <Input v-model="formValidate.orderNumber" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="顾客姓名" prop="customerName">
      <Input v-model="formValidate.customerName" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="顾客电话" prop="customerPhone">
      <Input v-model="formValidate.customerPhone" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="重量" prop="weight">
      <Input v-model="formValidate.weight" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">入库</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
    </FormItem>
  </Form>
</template>
<script>
import { addParcelItem } from '../api'
export default {
  data () {
    return {
      formValidate: {
        orderNumber: '',
        customerName: '',
        customerPhone: '',
        weight: ''
      },
      ruleValidate: {
        orderNumber: [
          { required: true, message: 'The orderNumber cannot be empty', trigger: 'blur' }
        ],
        customerName: [
          { required: true, message: 'The customerName cannot be empty', trigger: 'blur' }
        ],
        customerPhone: [
          { required: true, message: 'The customerPhone cannot be empty', trigger: 'blur' }
        ],
        weight: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      var self = this
      this.$refs[name].validate(async function (valid) {
        if (valid) {
          await addParcelItem(self.formValidate)
          self.$Message.success('Success!')
        } else {
          self.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
