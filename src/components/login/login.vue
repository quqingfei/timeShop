<template>
<span>

    <div class="sh-logo">
        <div class="sh-login-main">
            <div class="sh-pic-logo">
                <img src="/static/img/logo@2x.png" alt=""/>
            </div>
            <p class="s">欢迎来到时纷网！新用户请先 <span @click="gosign">注册</span> </p>
            <input  class="s1" type="text"placeholder="请输入您的邮箱或者手机号"/>
            <span class="linebot"></span>
            <input class="s2" type="password"placeholder="请输入您的密码"/>
            <span class="linebot"></span>
            <p class="s3"><a href="javascript:;">忘记密码</a></p>
            <button>登录</button>
            <p class="bfserver">选择第三方登录</p>
            <ul>
                <li><a href="#"><img src="/static/img/wx@2x.png" alt=""/></a></li>
                <li><a href="#"><img src="/static/img/qq@2x.png" alt=""/></a></li>
                <li><a href="#"><img src="/static/img/wb@2x.png" alt=""/></a></li>
             </ul>
        </div>
    </div>
    <div class="sh-login-mask"></div>
    <div class="sh-login-bg" style="background-image:url(/static/img/login.jpg);
    background-size:100%;"></div>

</span>
</template>

<script>
export default{
    methods: {
        gosign(){
            this.$router.replace({name: 'sign'});
            this.$store.commit('removeFooterMenu', '/sign');
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '/static/css/login.css'
</style>
