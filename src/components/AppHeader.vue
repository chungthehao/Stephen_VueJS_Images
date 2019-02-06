<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="item active">
            Image Storage   
        </a>

        <div class="right menu">
            <a href="#" class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
// 'mapActions': A func that will automatically connect different actions that we have created inside our modules to an actual component instance (Ex: AppHeader,...)
import { mapActions } from 'vuex';

export default {
    name: 'AppHeader',
    methods: mapActions(['login']) // connect action (của VueX) to component (của Vue)
}
</script>

<style scoped>

</style>

