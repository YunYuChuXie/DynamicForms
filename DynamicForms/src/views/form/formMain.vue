<template>
    <div class="formMain">
        <div class="boxLeft bgSty">
            <configurationWindow></configurationWindow>
        </div>
        <div class="boxCenter bgSty">
            <codeWindow></codeWindow>
        </div>
        <div class="BoxRightTop bgSty">
            <previewWindow></previewWindow>
        </div>
        <div class="BoxRightBottom bgSty">
            <introWindow></introWindow>
        </div>
    </div>
</template>

<script setup lang="ts">
import previewWindow from "./window/previewWindow.vue"
import codeWindow from "./window/codeWindow.vue"
import introWindow from "./window/introWindow.vue"
import configurationWindow from "./window/configurationWindow.vue"
</script>

<style scoped lang="scss">
.formMain {
    color: #fff;
    width: 100%;
    height: 100%;
    display: grid;
    /*  声明列的宽度  */
    grid-template-columns: 1fr 1fr 2fr;
    /*  声明行间距和列间距  */
    grid-gap: 20px;
    /*  声明行的高度  */
    grid-auto-rows: minmax(100px, auto);
    background: url('../../assets/image/bgImg.png') no-repeat;
    background-size: 100% 100%;
    padding: 20px;

    .boxLeft {
        grid-column: 1/2;
        grid-row: 1 / 4;
    }

    .boxCenter {
        grid-column: 2/3;
        grid-row: 1 / 4;
    }

    .BoxRightTop {
        grid-column: 3/3;
        grid-row: 1 / 3;
    }

    .BoxRightBottom {
        grid-column: 3/3;
        grid-row: 3 / 4;

    }
}

.bgSty {
    background-color: rgba(255, 255, 255, 0.2);
    /* 半透明背景 */
    backdrop-filter: blur(5px);
    /* 背景模糊 */
    border-radius: 5px;
    border-radius: 5px;
    padding: 10px;
}
</style>