<template>
    <div class="screen glitch">
        <div class="clock is-off">
            <span class="time">{{ timsData }}</span>
        </div>
        <div class="buttomLine">
            <div class="buttonSty">
                <div class="guang" @click="goInFunction('formMain')">Dynamic forms</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
onMounted(() => {
    getDataFunction()
})
const timsData = ref<string | number>()
const getDataFunction = (() => {
    const time = new Date()
    let hours: string | number = time.getHours();
    let minutes: string | number = time.getMinutes();
    let seconds: string | number = time.getSeconds();

    // 确保时间是双位数  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 更新显示的时间  
    timsData.value = hours + ":" + minutes + ":" + seconds;
})
const goInFunction = ((val: string) => {
    router.push(val)
})
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);

// Variables
$bg-color: #111;
$txt-color: #fff;
$color-c1: red;
$color-c2: blue;
$offset-c1: 3px;
$offset-c2: 2px;
$lay-c1: 2px;
$lay-c2: 2px;

.screen {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $bg-color;
}


.clock {
    display: block;
    position: absolute;
    z-index: 9;
    width: 720px;
    height: 128px;
    text-align: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    cursor: default;

    span {
        display: block;
        position: relative;
        font-size: 128px;
        line-height: 1;

        &:before,
        &:after {
            display: block;
            content: attr(data-time);
            position: absolute;
            top: 0;
            color: $txt-color;
            background: $bg-color;
            overflow: hidden;
            width: 720px;
            height: 128px;
            clip: rect(0, 900px, 0, 0);
        }

        &:before {
            left: calc(-#{$offset-c2});
            text-shadow: #{$lay-c2} 0 #{$color-c2};
            animation: c2 1s infinite linear alternate-reverse;
        }

        &:after {
            left: #{$offset-c1};
            text-shadow: calc(-#{$lay-c1}) 0 #{$color-c1};
            animation: c1 2s infinite linear alternate-reverse;
        }
    }

    &.is-off {
        animation: is-off 2s linear infinite !important;
    }
}


.glitch .clock {
    transform: skewX(0deg) scaleY(1);
    animation: clock-bag 4s linear infinite;
}


@keyframes c1 {
    @for $i from 0 through 20 {
        #{percentage($i / 20)} {
            clip: rect(random(100) * 1px, 9999px, random(100) * 1px, 0);
        }
    }
}

@keyframes c2 {
    @for $i from 0 through 20 {
        #{percentage($i / 20)} {
            clip: rect(random(100) * 1px, 9999px, random(100) * 1px, 0);
        }
    }

    23% {
        transform: scaleX(0.8);
    }
}

@keyframes clock-bag {
    @for $i from 0 through 50 {
        #{percentage($i / 50)} {
            transform: translate(random(5) * 1px, random(5) * 1px);
        }
    }

    1% {
        transform: scaleY(1) skewX(0deg);
    }

    1.5% {
        transform: scaleY(3) skewX(-60deg);
    }

    51% {
        transform: scaleX(1) scaleY(1) skewX(0deg);
    }

    52% {
        transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
    }

    53% {
        transform: scaleX(1) scaleY(1) skewX(0deg);
    }
}

@keyframes is-off {

    0%,
    50%,
    80%,
    85% {
        opacity: 1;
    }

    56%,
    57%,
    81%,
    84% {
        opacity: 0;
    }

    58% {
        opacity: 1;
    }

    71%,
    73% {
        transform: scaleY(1) skewX(0deg);
    }

    72% {
        transform: scaleY(3) skewX(-60deg);
    }

    91%,
    93% {
        transform: scaleX(1) scaleY(1) skewX(0deg);
        color: $txt-color;
    }

    92% {
        transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
        color: green;
    }
}

.buttomLine {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
}

.buttonSty {
    height: 200px;

    .guang {
        position: relative;
        display: inline-block;
        width: 250px;
        height: 80px;
        margin: 0 30px;
        color: rgb(255, 255, 255);
        line-height: 80px;
        font-size: 35px;
        text-align: center;
        border-radius: 30px;
        background: linear-gradient(90deg, rgb(39, 122, 218), rgb(74, 230, 121), rgb(243, 169, 10), rgb(226, 20, 233), rgb(16, 172, 219));
        background-size: 400%;
        z-index: 1;
        text-shadow: 0 0 2px white,
            0 0 2px white;
        cursor: pointer;
    }

    .guang:hover {
        animation: move 5s linear alternate infinite;
    }

    @keyframes move {
        0% {
            background-position: 0%;
        }

        100% {
            background-position: 100%;
        }
    }

    .guang::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        width: 270px;
        height: 100px;
        background: linear-gradient(90deg, rgb(39, 122, 218), rgb(74, 230, 121), rgb(243, 169, 10), rgb(226, 20, 233), rgb(16, 172, 219));
        background-size: 400%;
        opacity: 0;
        z-index: -1;
        border-radius: 45px;
        transition: 0.6s;

    }

    .guang:hover::before {
        filter: blur(15px);
        opacity: 1;
        animation: move 8s linear alternate infinite;
    }
}
</style>