<template>
    <div>
        <div class="header_tit">
            <x-header></x-header>
        </div>
        <div class="head_tit">
            小码安装维修人员平台
        </div>
        <div class="content">
            <group >
                <x-input title="手机号" v-model="inputValue"  name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" :max="11" ></x-input>
            </group>
            <group class="weui-cells_form">
                <x-input title="验证码"  v-model="verifyCode"  placeholder="请输入验证码" :max="6" >
                    <x-button slot="right" v-if="sendMsgDisabled" plain type="primary" mini disabled>{{time+'秒后获取'}}</x-button>
                    <x-button slot="right" v-if="!sendMsgDisabled" type="primary" mini @click.native="send_msg">获取验证码</x-button>
                </x-input>
            </group>
        </div>
        <div class="login_btn">
            <x-button type="primary" @click.native="loginBtn">登  陆</x-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { XHeader,XInput,Group, XButton, Cell} from 'vux'
    export default {
        components: {
            XHeader,
            XInput,
            Group,
            XButton,
            Cell
        },
        data () {
            return {
                inputValue:'',
                verifyCode:'',
                time: 60, // 发送验证码倒计时
                sendMsgDisabled: false
            }
        },
    methods: {
        send_msg:function () {
            axios.get('/api/site/index?key=1')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                });


            let me = this;
            me.sendMsgDisabled = true;
            let interval = window.setInterval(function() {
                if ((me.time--) <= 0) {
                    me.time = 60;
                    me.sendMsgDisabled = false;
                    window.clearInterval(interval);
                }
            }, 1000);
        },
        loginBtn:function () {
            this.$router.push('/AddDevice')
        }
    },
    }
</script>
<style>
    .head_tit {
        text-align: center;
        margin-top: 2rem;
    }
    .content{
        margin-top: 3rem;

    }
    .login_btn{
        margin: 3rem 1rem;
    }
</style>
