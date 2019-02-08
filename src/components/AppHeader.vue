<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="item active">
            Image Storage   
        </a>
        
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a class="item" href="">Galleries</a>
                <a class="item" href="">Upload</a>
                <a class="item" @click="logout">Logout</a>       
            </div>
            <a v-else class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
// 'mapActions': A func that will automatically connect different actions that we have created inside our modules to an actual component instance (Ex: AppHeader,...)
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']), // connect getters (của VueX) to component (của Vue)
    methods: mapActions(['login', 'logout']) // connect actions (của VueX) to component (của Vue)
}
</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>

