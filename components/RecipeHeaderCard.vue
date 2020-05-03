<template>
  <v-card
    class="recipe-round-border"
    style="margin: 10px"
    :color="color"
    min-width="300"
    max-width="300"
    shaped
    hover
    dark
  >
    <v-img
      class="white--text align-end grey lighten-3"
      :src="imgSrc"
      max-height="175"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
      <v-overlay :color="color" absolute opacity="1" class="align-end">
        <v-card-text class="title" v-text="title"></v-card-text>
      </v-overlay>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class RecipeHeaderCard extends Vue {
  @Prop({ type: String, required: true }) readonly color!: String;
  @Prop({ type: String, required: true }) readonly imgSrc!: String;
  @Prop({ type: String, required: true }) readonly title!: String;
}
</script>
