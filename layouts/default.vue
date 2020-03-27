<template>
  <v-app>
    <v-navigation-drawer app stateless permanent floating value="true">
      <div class="my-3">
        <h1 class="font-weight-black display-1 text-center">
          Cookz
        </h1>
      </div>
      <v-list rounded>
        <v-list-item-group color="orange">
          <div class="my-5">
            <v-subheader class="subtitle-1">DISCOVER</v-subheader>
            <v-list-item v-for="item in discover" :key="item.id">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
          <div class="my-5">
            <v-subheader class="subtitle-1">LIBRARY</v-subheader>
            <v-list-item v-for="item in library" :key="item.id">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app color="white" elevate-on-scroll>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container my-2>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DefaultComponent extends Vue {
  private discover = [
    { id: 1, icon: 'mdi-grain', title: 'Home' },
    { id: 2, icon: 'mdi-magnify', title: 'Browse' },
    { id: 3, icon: 'mdi-heart', title: 'For You' }
  ];

  private library = [
    { id: 1, icon: 'mdi-chef-hat', title: 'Chefs' },
    { id: 2, icon: 'mdi-star-circle', title: 'Favourites' },
    { id: 3, icon: 'mdi-noodles', title: 'My Recipes' }
  ];
}
</script>

<style scoped></style>
