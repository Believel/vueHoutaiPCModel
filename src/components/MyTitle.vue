<template>
    <div class="title">{{mytitle}}</div>
</template>
<script>
    export default {
        props: {
            mytitle: {
                type: String,
                default: '标题'
            }
        },
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss">
    .title {
        min-height: 58px;
        line-height: 58px;
        border-bottom: 1px solid #E7EAEC;
        border-top: 4px solid #E7EAEC;
        font-size: 22px;
        padding-left: 20px;
        margin-bottom: 10px;
    }

</style>

