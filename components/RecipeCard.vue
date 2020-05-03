<template>
  <div class="d-flex align-center flex-wrap-reverse ma-6">
    <v-card
      class="d-flex align-center recipe-round-border order-2 ml-n12"
      :color="color"
      min-width="250"
      max-width="250"
      min-height="100"
      max-height="100"
      shaped
      hover
    >
      <v-row>
        <v-col offset="2">
          <v-card-subtitle class="subtitle-1" v-text="title"></v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
    <v-avatar class="order-1" size="125" left>
      <v-img class="white--text align-end grey lighten-3" :src="imgSrc">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-avatar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class RecipeCard extends Vue {
  @Prop({ type: String, required: true }) readonly color!: String;
  @Prop({ type: String, required: true }) readonly imgSrc!: String;
  @Prop({ type: String, required: true }) readonly title!: String;
}
</script>
