<template>
    <div class="codeWindow">
        <div v-html="text"></div>
        <div class="formbuttonSty location" @click="copeText()"> 复制代码</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus'

const text = ref<string>('代码窗口')

const copeText = (() => {
    navigator.clipboard
        .writeText(text.value)
        .then(() => {
            ElMessage({
                message: '复制成功',
                customClass: "messageSty",
            })
        })
        .catch((err) => {
            ElMessage('This is a message.')
        });
})
</script>

<style lang="scss">
.codeWindow {
    width: 100%;
    height: 100%;

    .location {
        position: fixed;
        bottom: 10px;
        right: 10px;
    }

}

.messageSty {
    background-color: rgba(255, 255, 255, 0.2);
    /* 半透明背景 */
    backdrop-filter: blur(5px);
}
</style>