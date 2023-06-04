<template>
  <div>
    <h1>List of all the articles page</h1>
    <p>
      we want to dynamic render this page with a list of all the articles. When
      you click on one it loads the detail page.
    </p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link
          :to="{ name: 'articleDetail', params: { id: article.id } }"
        >
          {{ article.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->

<script>
import articlesData from "/Users/chriswest/DEV/projects/mtg101/articles.json";

export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.articles = articlesData;
  },
};
console.log(articlesData);
</script>

<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->
<style scoped></style>
