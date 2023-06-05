<template>
    <div v-if ="article">
  <h1>Article detail page</h1>
  <h1>{{ article.title }}</h1>
  <!-- <h2>Article {{ $route.params.id }}</h2> -->
  <div class="sub-title">
    <p>Author: {{ article.author }}</p>
    <p>Date: {{ article.date }}</p>
  </div>
  <div>
    {{ article.content }}
  </div>
  <p>dynamically rendered this page from a json file</p>
</div>
<div v-else>
    <p>something went wrong loading the article.</p>
</div>
</template>
<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->

<script>
import articles from "/Users/chriswest/DEV/projects/mtg101/src/assets/articles.json";
export default {
data() {
    return {
        article:null
    }
},
Computed: {
    article() {
        return articles.find(article => article.id === this.articleId)
    }
},
mounted() {
    const articleId = this.$route.params.id;
    this.article = articles.find(article => article.id === articleId)
}

  
};

</script>

<!-- zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -->
<style scoped></style>
