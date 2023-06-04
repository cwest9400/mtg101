<template>
  <h1>Article detail page</h1>
  <h1>{{ article.title }}</h1>
  <h2>Article {{ $route.params.id }}</h2>
  <div class="sub-title">
    <p>Author: {{ article.author }}</p>
    <p>Date: {{ article.date }}</p>
  </div>
  <div>
    {{ article.content }}
  </div>
  <p>dynamically rendered this page from a json file</p>
</template>
<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    console.log(this.article);
  },
};

</script>

<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->
<style scoped></style>
