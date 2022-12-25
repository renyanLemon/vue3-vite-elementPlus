<template>
    <div class="pageMain">
        <div class="img"><img src="@/assets/error/404.svg" /></div>
        <div class="tips">
            <h2 class="error-title">抱歉!</h2>
            <h3>当前页面不存在...</h3>
            <p class="desc"> 请检查您输入的网址是否正确，或点击下面的按钮返回首页 </p>
            <div class="btn">
                <el-button type="primary" @click="handleBack">返回首页</el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const handleBack = () => {
    
}
</script>

<style lang="less" scoped>
.pageMain {
    display: flex;
    .img {
        flex: 4;
        img {
            width: 100%;
        }
    }
    .tips {
        flex: 3;
        padding-top: 20%;
        .error-content {
            padding: 40px 20px;
            .error-title {
                font-size: 36px;
            }
            .desc {
                width: 290px;
                line-height: 1.5;
            }
            .btn {
                margin: 20px 0;
            }
        }
    }
}
    
</style>