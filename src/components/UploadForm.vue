<template>
    <div class="dropper">
        <!-- # Nếu chỉ @change="uploadImages" thôi, thì mặc định nó sẽ truyền event object vô action, mình phải tự lấy bằng cách event.target.files -->
        <!-- # Ở đây, mình chỉ rõ ra là chỉ truyền cái muốn -->
        <input 
            type="file" 
            @change="uploadImages($event.target.files)"
            multiple
            accept="image/*"    
        >
        <!-- # Chú ý: có dấu '$' ở $event -->
        <!-- # Nếu chỉ để 'event' ko thôi, Vue sẽ tìm 1 obj, variable, func nào đó có tên là event trong component này! -->
        <!-- # Còn $event là obj sinh ra do sự kiện change -->

        <span>Drag files here!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'UploadForm',

    methods: mapActions(['uploadImages']) // Cần gọi action 'uploadImages' bất cứ khi nào ng dùng "chọn" file
}
</script>

<style scoped>
    .dropper {
        height: 30vh; /* 30% of the overall height of a browser window */
        border: 2px dashed black;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative; /* Để định vị thẻ input */
    }
    .dropper:hover {
        background-color: #eee;
    }

    input {
        width: 100%; /* Để input tag tràn đầy toàn bộ div cha */
        height: 30vh; /* Để input tag tràn đầy toàn bộ div cha */

        position: absolute; /* Để thẻ input 'reset' về góc trái-trên của cha (thằng div có position relative) ---> Bây giờ thì span text đã center hoàn hảo */

        opacity: 0; /* Ẩn thẻ input đi */
    }
</style>
