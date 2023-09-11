<script setup lang="ts">
import "~/css/style.css";
const postData = ref<string>("");
const errorData = ref<null>(null);
let { data: getAll } = await useAsyncData("getAllPosturl", () =>
  $fetch("/api/posturl/all", {
    method: "GET",
  })
);
async function submit() {
  const { data: postCreate, error } = await useFetch("/api/posturl/create", {
    method: "POST",
    key: "postUrlCreate",
    body: {
      url: postData,
    },
  });
  if (error.value) {
    errorData.value = error.value.statusMessage;
  }
  if(postCreate.value){
    getAll.value = [...getAll.value, postCreate.value];
    postData.value = "";
  }
}

async function delFunc(id: string) {
  const { error } = await useFetch("/api/posturl/delete/" + id, {
    method: "DELETE",
  });
  if(error.value){
    console.log(error.value);
  }
  getAll.value = getAll.value.filter((v) => v.id !== id);
}
</script>

<template>
  <div class="container">
    <h1>URL Shortener</h1>
    <div class="box" :class="errorData != null ? 'box-error' : ''">
      <input
        type="url"
        :placeholder="errorData != null ? errorData : 'Url https...'"
        v-model="postData"
      />
      <button style="width: 10%" @click="submit">Submit</button>
    </div>
    <Table :data="getAll" :delFunc="delFunc" />
  </div>
</template>
