<template>
    <div>
        <h1 class="text-center">Book Management</h1>

        <div id="AddForm" v-if="formMode == 'create'">
            <h5>Add Book</h5>
            <hr />
            <form class="row" @submit.prevent="submitAdd">
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Title" v-model="newBook.title"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Author" v-model="newBook.author"/>
                </div>
                <div class="col-2">
                    <input type="text" class="form-control mx-2" placeholder="Price" v-model="newBook.price"/>
                </div>
                <div class="col-2">
                    <input type="number" class="form-control mx-2" placeholder="Stock" v-model="newBook.stock"/>
                </div>
                <div class="col-2">
                    <input type="submit" class="btn btn-primary ml-5" value="Simpan" />
                </div>
            </form>
        </div>
        <div id="EditForm" v-if="formMode == 'edit'">
            <h5>Edit Book</h5>
            <hr />
            <form class="row" @submit.prevent="submitChange">
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Title" v-model="updatedBook.title"/>
                </div>
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Author" v-model="updatedBook.author"/>
                </div>
                <div class="col-2">
                    <input type="text" class="form-control mx-2" placeholder="Price" v-model="updatedBook.price"/>
                </div>
                <div class="col-2">
                    <input type="number" class="form-control mx-2" placeholder="Stock" v-model="updatedBook.stock"/>
                </div>
                <div class="col-2">
                    <input type="submit" class="btn btn-warning ml-5" value="Edit" />
                </div>
            </form>
        </div>
        <div class="BookList">
            <h2 class="mt-3">Book List</h2>
            <hr />
            <button @click="formMode = 'create'" class="btn btn-primary m-2">
                Add Book
            </button>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in bookList" :key="index">
                        <td> {{ index + 1 }} </td>
                        <td> {{ book.title }} </td>
                        <td> {{ book.author }} </td>
                        <td> {{ book.price }} </td>
                        <td> {{ book.stock }} </td>
                        <td>
                            <button class="btn btn-info mr-3"  @click="showEdit(book, index)">Edit</button>
                            <button class="btn btn-danger">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {
    props: ["bookList"],
    data() {
        return {
            formMode: "",
            bookIndex: "",
            updatedBook: {
                _id: "",
                title: "",
                author: "",
                price: "",
                stock: "",
            },
            newBook: {
                title: "",
                author: "",
                price: "",
                stock: "",
            },
        };
    },
    methods: {
        submitAdd() {
            const bookCreated = {
                title : this.newBook.title,
                author : this.newBook.author,
                price : this.newBook.price,
                stock : this.newBook.stock,
            };
            this.$emit("store", bookCreated);
            this.newBook.title = "";
            this.newBook.author = "";
            this.newBook.price = "";
            this.newBook.stock = "";
        },
        showEdit(book, index) {
            this.formMode = "edit";
            this.bookIndex = index;

            this.updatedBook._id = book._id;
            this.updatedBook.title = book.title;
            this.updatedBook.author = book.author;
            this.updatedBook.price = book.price;
            this.updatedBook.stock = book.stock;
        },
        submitChange() {
            const bookChanged = this.updatedBook;
            this.$emit("update", bookChanged, this.bookIndex);
            this.formMode = "";
        },
    },
};
</script>

<style>

</style>
