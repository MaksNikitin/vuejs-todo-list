import { Vue, Component } from "vue-property-decorator";

import ToDoList from './components/ToDoList';

@Component({
  components: {
    ToDoList,
  },
  template: `
    <v-app>
      <v-content
        class="fill-height"
        style="margin: 40px"
        fluid
      >
        <to-do-list />
      </v-content>
    </v-app>
  `
})
export default class App extends Vue {
}
