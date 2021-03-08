<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title class="headline text-uppercase">
                <span>Bigg-Vue</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn href="https://www.biggby.com/bigg-list/" target="_blank" text>
                <span class="mr-2">List</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>

            <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                <span class="mr-2">Github</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>

            <div class="dark-light-icon">
                <v-icon v-if="$vuetify.theme.dark">mdi-weather-night</v-icon>
                <v-icon v-if="!$vuetify.theme.dark">mdi-white-balance-sunny</v-icon>
            </div>
            <v-switch class="dark-light-switch" v-model="$vuetify.theme.dark" color="secondary"></v-switch>
        </v-app-bar>

        <v-main>
            <v-card>
                <div id="flavor-town">
                    <v-checkbox v-for="flavor in flavors" :key="flavor" v-model="selectedFlavors" :value="flavor" :label="flavor" hide-details color="secondary"></v-checkbox>
                </div>
                <v-data-table :headers="headers" :items="drinks" :search="search" :items-per-page="500"></v-data-table>
            </v-card>
        </v-main>
    </v-app>
</template>

<script>
import {biggList, uniqueIngredients} from "@/biggList.js";

export default {
    name: "App",
    created() {
        this.drinks = biggList;
        this.flavors = uniqueIngredients;
    },
    data: () => ({
        search: "",
        headers: [
            { text: "Drink Name", value: "name" },
            { text: "Ingredients", value: "ingredients" },
        ],
        drinks: [],
        flavors: [],
        selectedFlavors: [],
    }),
    watch: {
        selectedFlavors: function() {
            this.drinks = biggList.filter(el => {
                return this.selectedFlavors.every(x => el.ingredients.includes(x));
            });
        }
    }
};
</script>

<style lang="scss" scoped>
#flavor-town {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    margin-bottom: 2em;
}

#flavor-town > * {
    margin-top: 0;
}

#app .dark-light-switch {
    padding-top: 1.4em;
}

.dark-light-icon {
    margin-right: 1em;
    margin-left: 3em;
}
</style>

<style lang="scss">
// .v-data-footer {
//     display: none;
// }
</style>