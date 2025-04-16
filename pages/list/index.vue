<template>
  <h1 v-if="loading">Loading~~~~</h1>
  <h1 v-if="error">{{ error }}</h1>
  <input type="text" v-model="keyWord" />
  <div v-for="merchandise in pagnitedMerchandises" :key="merchandise.id">
    <h3>{{ merchandise.name }}</h3>
    <h4>quantity:{{ merchandise.quantity }}</h4>
  </div>
  <button
    @click="sortOrder === 'asc' ? (sortOrder = 'desc') : (sortOrder = 'asc')"
  >
    sort
  </button>

  <div>
    <button :disabled="currentPage <= 1" @click="currentPage--">pre</button>
    <span> Page {{ currentPage }} </span>
    <button
      :disabled="currentPage * pageSize >= merchandises.length"
      @click="currentPage++"
    >
      next
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useMerchandises } from "~/composables/useMerchandises";
import { useMerchandiseList } from "#imports";

const { loadMerchandises, merchandises, loading, error } = useMerchandises();
const { sortOrder, keyWord, pageSize, currentPage, pagnitedMerchandises } =
  useMerchandiseList(merchandises);

onMounted(() => {
  loadMerchandises();
});
</script>
