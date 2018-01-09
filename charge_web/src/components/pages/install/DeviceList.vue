<template>
    <div>
        <div class="header_tit">
            <x-header>安装失败设备列表</x-header>
        </div>
        <div class="device_list" v-for="item of list">
            <div class="list_top">
                <label>设备ID：</label>
                <label>{{item.id}}</label>
                <label class="floatR" @click="go_edit(item.num)">编辑</label>
               <!--<router-link :to="{name:'AddDevice',params:{num:123}}"> <label class="floatR">编辑</label></router-link>-->
            </div>
            <div class="list_bot">
                <label>投放地：</label>
                <label>{{item.palce}}</label>
                <label>{{item.num}}</label>
            </div>
        </div>
    </div>
</template>

<script>
    import {XHeader,XInput , Group, XButton,Cell,Selector } from 'vux'

    export default {
        components: {
            XHeader,
        },
        data () {
            return {
                list:[
                    {
                        id:'1',
                        palce:'南门',
                        num:'003'
                    },
                    {
                        id:'2',
                        palce:'南门',
                        num:'004'
                    },
                    {
                        id:'3',
                        palce:'南门',
                        num:'005'
                    }
                ],
            }
        },
        methods:{
            go_edit:function (e) {
                this.$router.push({
                    path: '/AddDevice',
                    name:'AddDevice',
                    params: {
                        names: e
                    }
                })
            }
        }
    }
</script>

<style>
    .device_list{
        padding: .5rem 1rem;
         font-size: .7rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .list_top{
        margin-bottom: .5rem;
    }
</style>
