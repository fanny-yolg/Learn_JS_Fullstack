<template>
    <div class="container mt-3 w-75">
        <h1>Selamat datang di toko buku Fanny!</h1>
        <div id="bookCatalogue">
            <h2 class="mt-5">Book Catalogue</h2>
            <hr />
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in bookList" :key="index">
                        <td>{{ index + 1}}</td>
                        <td>{{ book.title }}</td>
                        <td>{{ book.author }}</td>
                        <td>{{ book.price }}</td>
                        <td>{{ book.stock }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ["bookList"],
}
</script>

<style>
    h1 {
        text-align:center
    }
</style>