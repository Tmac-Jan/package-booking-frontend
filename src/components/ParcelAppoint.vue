<template>
   <card>
     <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
       <FormItem label="订单号码" prop="orderNumber">
         <Input v-model="formValidate.orderNumber" placeholder="Enter your name"></Input>
       </FormItem>
       <FormItem label="预约时间" prop="appointTime">
         <row>
           <Col span="12">
             <DatePicker type="datetime" :options="options1" format="yyyy-MM-dd HH:mm:ss"
                         placeholder="Select date" style="width: 200px" :model="formValidate.appointTime">
             </DatePicker>
           </Col>
         </row>
       </FormItem>
       <FormItem>
         <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
         <Button @click="handleReset('formValidate')" style="margin-left: 8px">重设</Button>
       </FormItem>
     </Form>
   </card>
</template>
<script>
import {updateParcelItemWithoutId } from '../api'
  export default {
    data() {
      return {
        formValidate: {
          orderNumber: '',
          appointTime: ''
      },
        options1: {
          shortcuts: [
            {
              text: 'Today',
              value () {
                return new Date();
              },
              onClick: (picker) => {
                this.$Message.info('Click today');
              }
            },
            {
              text: 'Yesterday',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('Click yesterday');
              }
            },
            {
              text: 'One week',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('Click a week ago');
              }
            }
          ]
        },
      ruleValidate: {
          orderNumber: [
            {required: true, message: '订单编号 不能为空', trigger: 'blur'}
          ],
          appointTime: [
            { required: true, type: 'datetime', message: 'Please select the date', trigger: 'change' }
          ],

        }
      }
    },
    methods: {
      handleSubmit(name) {
        var self = this
        this.$refs[name].validate(async function (valid) {
          if (valid) {
            await updateParcelItemWithoutId(self.formValidate)
            self.$Message.success('Success!')
          } else {
            self.$Message.error('Fail!')
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>
