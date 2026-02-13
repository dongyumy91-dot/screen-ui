<!--
 * @Descripttion: Iframe组件
-->
<template>
    <div class="iframe-warp">
        <iframe v-for="item in iframeList" :key="item.meta.url" 
            v-show="$route.meta.url==item.meta.url" 
            :src="item.meta.url"
            frameborder='0' />
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useIframeStore } from '@/stores/modules/iframe'
export default {
    name: 'IframeView',
    watch: {
        $route(e) {
            this.push(e)
        },
    },
    created() {
        this.push(this.$route);
    },
    computed: {
        ...mapStores(useIframeStore),

        iframeList() {
            return this.iframeStore.getIframeList
        },
    },
    methods: {
        push(route) {
            this.iframeStore.setIframeList(route);
        }
    }
}
</script>

<style lang="scss" scoped>
.iframe-warp {
    width: 100%;
    height: 100%;
    background: #fff;

    iframe {
        border: 0;
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>