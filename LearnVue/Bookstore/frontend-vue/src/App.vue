<template>
  <Navbar />
  <router-view :bookList="booksData" @store="storeData" @update="updateData" @delete="deleteData" />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      booksData: [
        {_id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", price: 80000, stock: 5},
        {_id: 2, title: "Bumi", author: "Tere Liye", price: 85000, stock: 5}
      ],
    };
  },
  methods: {
    storeData(bookCreated) {
      console.log(bookCreated);
      alert("Book successfuly created!");
    },
    updateData(bookChanged, bookIndex) {
      console.log(bookChanged, bookIndex);
      alert("Data successfully updated!");
    },
    deleteData(book, index) {
      console.log(book);
      console.log(index);
      alert("Data successfully deleted!")
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
