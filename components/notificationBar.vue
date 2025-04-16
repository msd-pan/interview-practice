<template>
  <div v-if="visible"><h1>notification</h1></div>
</template>
<script lang="ts" setup>
type AlertType = "success" | "error" | "info";

interface Props {
  type: AlertType;
  message: string;
}

const props = defineProps<Props>();
</script>
