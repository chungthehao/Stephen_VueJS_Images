<template>
    <div>
        <div v-if="isLoggedIn" class="image-container">
            <img :src="image.link"
                v-for="image in allImages" 
                :key="image.id"
             >
        </div>

        <h2 v-else>Log in to get started!</h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    computed: mapGetters(['allImages', 'isLoggedIn']), // Không cần chỉ ra module cụ thể như là 'images.allImages' hay sao đó, Vuex sẽ tự figure out
    methods: mapActions(['fetchImages']),

    // - Cần define 'Life cycle method'
    // - Vì khi ImageList instance này chuẩn bị load component này lên thì mình cần reach out to imgur API để lấy các images, rồi sau đó show nó lên.
    created() {
        // Gọi action trong 'images' module, đc lôi vô bằng hàm 'mapActions'
        if (this.isLoggedIn) {
            this.fetchImages();
        }
    }

}
</script>

<style scoped>
    /* Dùng CSS Grid để sắp xếp các img */
    .image-container {
        column-count: 3;
        column-gap: 0;
    }

    img {
        max-width: 100%; /* To make sure that the images do NOT try to break out of the column width that they are being assigned */
        padding: 5px;
    }
</style>
