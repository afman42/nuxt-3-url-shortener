<script lang="ts" setup>
const route = useRoute();
onMounted(async () => {
  const { data } = await useFetch(`/api/posturl/${route.params.code}`, {
    method: "GET",
  });
  window.location.href = data.value.url;
});
</script>

<template></template>
