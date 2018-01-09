<template>
    <div>
        <div class="header_tit">
        <x-header>设备安装</x-header>
        </div>
        <div class="head_right" @click="GoDeviceList">安装设备失败列表</div>
        <div class="head_tit">
            录入新设备
        </div>
        <group>
            <x-input title='设备ID' placeholder="请输入设备ID" v-model="device_id"></x-input>
        </group>
        <group>
            <selector title="安装地" ref="plainValueRef" value="C"  :options="list1" @on-change="onChange"></selector>
        </group>
        <div class="text_left">
            投放编号
        </div>
        <div class="clearF">
            <group>
                <div class="inputL"><x-input text-align="center" placeholder="左插孔编号" ></x-input></div>
                <div class="inputR"> <x-input text-align="center" placeholder="右插孔编号" ></x-input></div>
            </group>
        </div>
        <div class="verify_btn">
            <x-button type="primary" @click.native="verifyBtn">验 证</x-button>
        </div>
    </div>
</template>

<script>
    import {XHeader,XInput , Group, XButton,Cell,Selector } from 'vux'

    export default {
        components: {
            XHeader,
            Group,
            Cell,
            Selector,
            XInput,
            XButton
        },
        data () {
            return {
                list1: ['A', 'B', 'C'],
                device_id:'',
                selects:''
            }
        },
        methods:{
            onChange (val) {
                this.selects=val
            },
            verifyBtn:function () {
                console.log(this.selects,this.device_id)
            },
            GoDeviceList:function () {
               this.$router.push('/DeviceList')
            }
        },
        computed: {
            getParams () {
                // 取到路由带过来的参数
                let routerParams = this.$route.params.names
                // 将数据放在当前组件的数据内
                this.device_id=routerParams
            }
        },
        watch: {
            // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
            '$route': 'getParams'
        }
    }
</script>

<style>
    .head_right{
        float: right;
        margin-top: 1rem;
        margin-right: .5rem;
        font-size: .7rem;
    }
    .head_tit{
        text-align: center;
        clear: both;
        margin-top: 3.5rem;
        margin-bottom: 2rem;
    }
    .text_left{
        margin-top: 1.5rem;
        margin-left: .5rem;
        float: left;
        font-size: .72rem;
        margin-bottom: 1rem;
    }
    .inputL, .inputR{
        width: 49%;
        float: left;
    }
    .inputL{
        margin-right: .2rem;
    }
    .verify_btn{
        margin: 2.5rem 1rem;
    }
</style>
