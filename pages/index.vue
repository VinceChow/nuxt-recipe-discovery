<template>
  <div>
    <div v-dragscroll.x class="pb-10" style="display: flex; overflow-x: auto">
      <RecipeHeaderCard
        v-for="n in 6"
        :key="n"
        :color="getRandomColor()"
        :img-src="randomImg"
      />
    </div>
    <div class="my-6">
      <h1>Daily Best Recipes</h1>
      <v-row>
        <RecipeCard
          v-for="n in 20"
          :key="n"
          :color="getRandomColor()"
          :img-src="randomImg"
        />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RecipeHeaderCard from '~/components/RecipeHeaderCard.vue';
import RecipeCard from '~/components/RecipeCard.vue';

@Component({
  head() {
    return {
      title: 'Recipe Discovery',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for recipe discovery'
        }
      ]
    };
  },
  components: { RecipeHeaderCard, RecipeCard }
})
export default class Index extends Vue {
  private randomImg: string = 'https://picsum.photos/1080/720?random';

  getRandomColor(): string {
    const randomColor = require('randomcolor');
    return randomColor({ luminosity: 'bright', format: 'rgba', alpha: 0.2 });
  }
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.recipe-round-border {
  border-radius: $border-radius-root;
}
</style>
