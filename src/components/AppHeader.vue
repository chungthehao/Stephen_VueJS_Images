<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="item active">
            Image Storage   
        </router-link>
        
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <!-- Dùng router-link để navigate (đc provide bởi Vue Router), ko dùng thẻ a, vì sẽ reload lại toàn bộ trang -->
                <router-link to="/" class="item">Galleries</router-link>
                <router-link to="/upload" class="item">Upload</router-link>

                <!-- Logout ko cần đổi qua router-link, vì nó ko có chuyển trang đi đâu cả. -->
                <a class="item" @click="logout">Logout</a>       
            </div>
            <!-- Login ko cần đổi qua router-link, vì nó cần chuyển trang ra bên ngoài app của mình, đi qua imgur. -->
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

