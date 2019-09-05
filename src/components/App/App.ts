import { Vue, Component } from "vue-property-decorator";

import ToDoList from '../ToDoList/ToDoList.vue';

@Component({
  components: {
    ToDoList,
  },
})
export default class App extends Vue {
}
