<script setup lang="ts">
const props = defineProps({
  data: {
    default: [],
    type: Array,
  },
  delFunc: {
    type: Function
  }
});
function clipboard(code: string) {
  const url = "http://localhost:3000/view/" + code;
  navigator.clipboard.writeText(url);
  alert("Copied the text: " + url);
}
</script>

<template>
  <table class="table" v-if="props.data.length > 0">
    <thead>
      <tr v-for="(data, index) in props.data">
        <td width="10%" align="center">{{ index + 1 }}</td>
        <td width="80%">{{ 'http://localhost:3000/view/' + data.code }}</td>
        <td width="10%">
          <button style="width:100%;" @click="() => clipboard(data.code)">Copy</button>
          <button style="width:100%;" @click="() => props.delFunc(data.id)">Delete</button>
        </td>
      </tr>
    </thead>

    <tbody></tbody>
  </table>
  <table class="table" v-else>
    <thead>
      <tr>
        <td align="center">No data</td>
      </tr>
    </thead>

    <tbody></tbody>
  </table>
</template>
