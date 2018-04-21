<template>
    <div class="hello">
        <h3>4.{{ title }}</h3>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    /* 外部引入的值 */
    props: ['title'],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App (components)'
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
    border:1px solid;
    border-radius: 15px;
}
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
