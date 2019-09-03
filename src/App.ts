import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: `
    <v-app>
      <v-content>
        <v-card
          max-width="344"
          class="mx-auto"
        >
          <v-card-title>I'm a title</v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Click</v-btn>
          </v-card-actions>
        </v-card>
      </v-content>
    </v-app>
  `
})
export default class App extends Vue {
}
