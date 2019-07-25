<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="orderNumber" prop="orderNumber">
      <Input v-model="formValidate.orderNumber" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="customerName" prop="customerName">
      <Input v-model="formValidate.customerName" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="customerPhone" prop="customerPhone">
      <Input v-model="formValidate.customerPhone" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="weight" prop="weight">
      <Input v-model="formValidate.weight" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
  import {mapActions} from "vuex";
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
      ...mapActions(["addParcelItem"]),
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.addParcelsItem(this.formValidate);
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
