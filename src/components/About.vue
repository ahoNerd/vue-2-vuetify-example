<template>
  <div :class="pesan">
    <h1>This is an {{ pesan }} page</h1>
    <h2>
      Selamat datang <span class="primary--text">{{ nama }}</span>
    </h2>
    <v-btn color="error" @click="tambah">Tambah</v-btn>
    <v-chip color="warning" class="mx-4">{{ angka }}</v-chip>
    <v-btn color="error" @click="kurang">Kurang</v-btn>
    <br />
    <v-chip v-if="sepuluh" color="success" class="mt-4">Sepuluh</v-chip>
  </div>
</template>

<script>
export default {
  props: ["pesan"],
  data: () => ({
    nama: "",
    angka: 0,
    sepuluh: false,
  }),
  watch: {
    angka(val) {
      this.sepuluh = val == 10 ? true : false;
    },
  },
  methods: {
    setNama(val) {
      return (this.nama = val);
    },
    tambah() {
      this.angka++;
    },
    kurang() {
      this.angka--;
    },
  },
  mounted() {
    this.setNama("Asep");
  },
};
</script>
