import { Vue, Component } from "vue-property-decorator";

import ToDoItem from './ToDoItem';
import UpdateDialog from './UpdateDialog';
import toDoMutationTypes from '../store/toDoModule/mutation-types';
import ToDoModel from '../models/ToDoModel';

@Component({
  components: {
    ToDoItem,
    UpdateDialog,
  },
  template: `
    <v-content>
      <div style="justify-content: center; display: flex; padding-bottom: 20px;">
        <v-btn @click="addToDo">
          Add New Todo
        </v-btn>
      </div>

      <to-do-item
        v-for="(toDo, index) in toDos"
        :key="index"
        :value="toDo.value"
        :isChecked="toDo.isChecked"
        @delete="deleteToDo"
        @update="updateToDo"
      />

      <update-dialog
        v-if="selectedItem"
        :title="selectedItemIndex >= 0 ? 'Update ToDo Value' : 'Add ToDo Value'"
        :value="selectedItem"
        :isDialogVisible="isDialogVisible"
        @close="closeDialog"
      />
    </v-content>
  `
})
export default class ToDoList extends Vue {
  isDialogVisible: boolean = false;
  selectedItem: ToDoModel = null;
  selectedItemIndex: number = -1;

  mounted () {
    this.$store.dispatch('getToDos');
  }

  get toDos (): Array<ToDoModel> {
    return this.$store.state.toDoModule.toDos;
  }

  closeDialog(isSubmitted: boolean = false) {
    if (isSubmitted) {
      if (this.selectedItemIndex >= 0) {
        this.$store.commit(toDoMutationTypes.UPDATE_TODO, {
          index: this.selectedItemIndex,
          item: this.selectedItem,
        });
      } else {
        this.$store.commit(toDoMutationTypes.ADD_TODO, this.selectedItem);
      }
    }

    this.selectedItem = null;
    this.selectedItemIndex = -1;
    this.isDialogVisible = false;
  }

  addToDo() {
    this.selectedItem = new ToDoModel();
    this.isDialogVisible = true;
  }

  deleteToDo(index: number) {
    this.$store.commit(toDoMutationTypes.REMOVE_TODO, index);
  }

  updateToDo(index: number) {
    this.selectedItemIndex = index;
    this.selectedItem = Object.assign({}, this.toDos[index]); 
    this.isDialogVisible = true;
  }
}
