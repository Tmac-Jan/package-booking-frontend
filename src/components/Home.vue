<template>
    <div class="layout">
        <Layout class="layout-child">
         <Header></Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu @on-select="MenuSelect" active-name="1-2" theme="light" width="auto" :open-names="['1']">

                        <MenuItem name="ParcelBossItem">包裹列表</MenuItem>
                        <MenuItem name="ParcelAdd">包裹入库</MenuItem>
                      <MenuItem name="ParcelAppoint">预约取件</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
  import Header from './Header'
    export default {
        beforeRouteLeave(to, from, next) {
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        },
      components:{
          Header
      },
        methods: {
            MenuSelect(name) {
                this.$router.push({
                    name: name
                })
            }

        }

    }
</script>
<style scoped>


    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        width: 100%;
        position: fixed;
    }

    .layout-child {
        height: 100%;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
