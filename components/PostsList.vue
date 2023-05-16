<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
        <div class="col"
             v-for="post in paginateData"
             key="blog.id"
        >
            <NuxtLink :to="'/posts/' + post.id">
                <div class="card shadow-sm">
                    <img
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        :src="post.image"
                        @error="($event) => {
                            $event.target.src = './images/nofoto.png'
                        }"
                    >
                    <div class="card-body">
                        <p class="card-text">{{ post.preview }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="text-body-secondary">{{ dateFormat(new Date(post.createdAt)) }}</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div class="pagination">
        <button @click="prevPage()" :disabled="pageNumber === 0" >Назад</button>
        <button @click="nextPage()" :disabled="pageNumber >= pagesCount - 1">Вперед</button>
    </div>
</template>
<script setup lang="ts">
    import {usePosts} from "~/composables/usePosts";
    import {ref} from 'vue';

    const posts = await usePosts()
    const pageNumber = ref(0)
    const pagesCount = Math.ceil(posts.value.length / 15)

    const nextPage = () => {
        return  pageNumber.value++
    }
    const prevPage = () => {
        return pageNumber.value--
    }
    const paginateData = computed(() => {
        const start = pageNumber.value * pagesCount
        const end = start + pagesCount
        return posts.value.reverse().slice(start, end)
    })
    const dateFormat = (date) => {
        try {
            const options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }
            return new Intl.DateTimeFormat('ru-RU', options).format(date)
        } catch (e) {
            console.log(e)
            return '-'
        }
    }

</script>

<style scoped>
button {
    border: none;
    background-color: teal;
    color: white;
    padding: 20px 50px;
    margin-top: 40px;
    margin-left: 30px;
}
</style>
