<template>
  <div class="mahasiswa">
    <h1>Mahasiswa</h1>
    <v-card>
      <v-card-title>Data Mahasiswa</v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="listMahasiswa"
        :items-per-page="5"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    headers: [
      { text: "NPM", value: "npm" },
      { text: "Nama", value: "nama" },
      { text: "IPK", value: "ipk", align: "end" },
    ],
  }),
  computed: {
    ...mapGetters({
      listMahasiswa: "getListMahasiswa",
    }),
  },
};
</script>
