<template>
    <div>
        <div class="header_tit">
            <x-header></x-header>
        </div>
        <div class="header">
            <group>
                <selector title="选择安装地" ref="plainValueRef" v-model="default_select"  :options="select_list" @on-change="onChange"></selector>
            </group>
        </div>
        <div class="count_list">
            <div class="weui-cells vux-no-group-title countBox ">
                <div class="weui-cell">收益统计</div>
                <div  class="weui-cell">
                    <div class="vux-cell-bd vux-cell-primary">
                        <div class=" count_num">2000</div>
                       <label class="count_tit">总收益(元)</label>
                    </div>
                    <div class="weui-cell__ft " value-align="right">
                        <div class="weui-cell">
                        今日收益(元):2000
                        </div>
                        <div class="weui-cell">
                            昨日收益(元):2000
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui-cells vux-no-group-title countBox ">
                <div class="weui-cell">设备统计</div>
                <div  class="weui-cell">
                    <div class="vux-cell-bd vux-cell-primary">
                        <div class=" count_num">2000</div>
                        <label class="count_tit">总插座孔数(个)</label>
                    </div>
                    <div class="weui-cell__ft">
                        <div id="myChart" :style="{width: '220%', height: '120%'}"></div>
                    </div>
                </div>
            </div>
            <div class="weui-cells vux-no-group-title countBox ">
                <div class="weui-cell">用户统计</div>
                <div  class="weui-cell">
                    <div class="vux-cell-bd vux-cell-primary">
                        <div class=" count_num">2000</div>
                        <label class="count_tit">总用户数(人)</label>
                    </div>
                    <div class="weui-cell__ft">
                        <div class="weui-cell">
                            今日充电人数(人):2000
                        </div>
                        <div class="weui-cell">
                            昨日充电人数(人):2000
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui-cells vux-no-group-title countBox ">
                <div class="weui-cell">充电次数</div>
                <div  class="weui-cell">
                    <div class="vux-cell-bd vux-cell-primary">
                        <div class=" count_num">200</div>
                        <label class="count_tit">总充电次数(次)</label>
                    </div>
                    <div class="weui-cell__ft">
                        <div class="weui-cell">
                            今日充电次数(次):20
                        </div>
                        <div class="weui-cell">
                            昨日充电次数(次):2000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {XHeader,Group, XButton,Selector,Cell,CellFormPreview} from 'vux'

    export default {
        components: {
            XHeader,
            Group,
            Selector,
            XButton,
            CellFormPreview,
            Cell
        },
        data () {
            return {
                select_list: [
                    {
                        key:'nm',
                        value:'南门'
                    },
                    {
                        key:'xm',
                        value:'西门'
                    },
                    {
                        key:'bm',
                        value:'北门'
                    }
                ],
                default_select:'nm',
                selected:'',
            }
        },
        mounted(){
            this.drawLine();
        },
        methods:{
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    series : [
                        {
                            type:'pie',
                            radius: '66%',
                            hoverAnimation:false,
                            color:['#ffbe00','#36c417', '#ccc'],
                            labelLine:{
                                normal: {
                                    length:2,
                                    length2:4
                                }
                            },
                            label: {
                                normal: {
                                    position: 'outside'
                                }
                            },
                            data:[
                                {value:335, name:'未使用:3350'},
                                {value:310, name:'使用中:3100'},
                                {value:234, name:'离线:2340'},

                            ],
                        }
                    ]
                });
            },
            onChange (value) {
                this.selected=value
                console.log(value)
            },
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

<style scoped>
    .countBox{
        margin-top: .4rem;
    }
    .count_tit{
        font-size: .7rem;
    }
    .countBox .count_num{
        text-align: center;
        font-size: 1.3rem;
    }
    .countBox .vux-cell-bd{
        text-align: center;
    }
    .weui-cells:before{
        border-top: 0px solid #D9D9D9;
    }
    .weui-cells:after{
        border: none;
    }
    .vux-cell-primary {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .vux-header{
        /*background: #ffbe00;*/
    }
    .vux-header .vux-header-left .left-arrow:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #333;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    }
    .vux-header .vux-header-left .vux-header-back{
        color: #333;
    }
</style>
