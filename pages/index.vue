<template>
  <div>
    <v-overlay :value="isOverlay" z-index="999">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <div v-dragscroll.x class="pb-10" style="display: flex; overflow-x: auto">
      <RecipeHeaderCard
        v-for="recipe in recipeHeaderCards"
        :key="recipe.id"
        :title="recipe.title"
        :img-src="recipe.image"
        :color="getRandomColor()"
      />
    </div>
    <div class="my-6">
      <h1 :hidden="isOverlay">Daily Best Recipes</h1>
      <v-row>
        <RecipeCard
          v-for="recipe in recipeCards"
          :key="recipe.id"
          :title="recipe.title"
          :img-src="recipe.image"
          :color="getRandomColor()"
        />
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RecipeHeaderCard from '~/components/RecipeHeaderCard.vue';
import RecipeCard from '~/components/RecipeCard.vue';

interface IRecipe {
  id: number;
  title: string;
  image: string;
}

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
  private totalRecipe: number = 30;
  private totalRecipeHeaders: number = 5;
  private recipes: IRecipe[] = [];
  private overlay: boolean = true;

  async created() {
    console.log(process.env.HOST);
    console.log(process.env.NODE_ENV);
    console.log(process.env.NPM_CONFIG_PRODUCTION);
    console.log(process.env.RECIPE_URL);
    console.log(process.env.RECIPE_API_KEY);

    const config = {
      headers: {
        Accept: 'application/json'
      }
    };

    try {
      const res = await this.$axios.$get(
        `${process.env.RECIPE_URL}/recipes/random?limitLicense=true&number=${this.totalRecipe}&apiKey=${process.env.RECIPE_API_KEY}`,
        config
      );
      this.recipes = res.recipes.filter((recipe: IRecipe) => recipe.image);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  get recipeHeaderCards() {
    return this.recipes.slice(0, this.totalRecipeHeaders);
  }

  get recipeCards() {
    return this.recipes.slice(this.totalRecipeHeaders);
  }

  get isOverlay() {
    return this.recipes.length === 0;
  }

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
