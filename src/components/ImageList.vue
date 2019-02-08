<template>
    <div>
        <div v-for="image in allImages" :key="image.id">
            <img :src="image.link" alt="" width="200">
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    computed: mapGetters(['allImages']), // Không cần chỉ ra module cụ thể như là 'images.allImages' hay sao đó, Vuex sẽ tự figure out
    methods: mapActions(['fetchImages']),

    // - Cần define 'Life cycle method'
    // - Vì khi ImageList instance này chuẩn bị load component này lên thì mình cần reach out to imgur API để lấy các images, rồi sau đó show nó lên.
    created() {
        // Gọi action trong 'images' module, đc lôi vô bằng hàm 'mapActions'
        this.fetchImages();
    }

}
</script>

<style scoped>

</style>
