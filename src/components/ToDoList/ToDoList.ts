import { Vue, Component } from "vue-property-decorator";

import ToDoItem from '../ToDoItem/ToDoItem.vue';
import UpdateDialog from '../UpdateDialog/UpdateDialog.vue';
import toDoMutationTypes from '../../store/toDoModule/mutation-types';
import ToDoModel from '../../models/ToDoModel';

@Component({
  components: {
    ToDoItem,
    UpdateDialog,
  },
})
export default class ToDoList extends Vue {
  isDialogVisible: boolean = false;
  selectedItem: ToDoModel = null;
  selectedItemIndex: number = -1;

  mounted() {
    this.$store.dispatch('getToDos');
  }

  get toDos(): Array<ToDoModel> {
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
