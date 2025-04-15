<template>
  <div>
    <label v-for="shipment in shipments" :key="shipment.id">
      <input type="checkbox" :value="shipment.id" v-model="selectedIds" />
      ID:{{ shipment.id }} Name: {{ shipment.name }} Quantity:{{
        shipment.quantity
      }}
      Destination:{{ shipment.destination }}
    </label>

    <p>Now Selected{{ selectedIds }}</p>
    <button @click="handleShipments">出库</button>
  </div>
</template>
<script lang="ts" setup>
import type { Shipment } from "~/types/shipment/shipment.type";
import { retriveShipments, submitUpdatedShipments } from "~/api/shipments";

const shipments = ref<Shipment[]>([]);
const selectedIds = ref<number[]>([]);

const handleDeleteItems = (selectedIds: number[]) => {
  shipments.value = shipments.value.filter(
    (s: Shipment) => !selectedIds.includes(s.id)
  );
};

const handleShipments = async () => {
  await submitUpdatedShipments(selectedIds.value);
  handleDeleteItems(selectedIds.value);
  selectedIds.value = [];
};

onMounted(async () => {
  shipments.value = await retriveShipments();
  console.log("shipments fetched", shipments.value);
});
</script>
<style lang="scss" scoped></style>
