<template>
  <h1 v-if="loading">loading~~~</h1>
  <div v-else>
    <div v-for="m in merchandises" :key="m.id">
      <h3 @click="showDetail(m.id)">{{ m.name }} - {{ m.quantity }}</h3>

      <div v-if="visibleMap.get(m.id)" @click="closeDetail(m.id)">
        <p>ID: {{ m.id }}</p>
        <p>Location: {{ m.location }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMerchandises } from "#imports";

const { loading, error, merchandises, loadMerchandises } = useMerchandises();

const visibleMap = reactive(new Map<string, boolean>());

const showDetail = (id: string) => {
  visibleMap.set(id, true);
};

const closeDetail = (id: string) => {
  visibleMap.set(id, false);
};

onMounted(() => {
  loadMerchandises();
});
</script>
