<template>
    <div>
        <div>
            <h2>一楼</h2>
            <div class="roomImg">
                <div class="img">
                    <el-image :src="url" />
                </div>
                <div class="img">
                    <el-image :src="url" />
                </div>
                <div class="img">
                    <el-image :src="url" />
                </div>
                <div class="img">
                    <el-image :src="url" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>
<style lang='less' scoped>
.roomImg {
    display: flex;
    .img {
        padding: 5px;
    }
}
</style>