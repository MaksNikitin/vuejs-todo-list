import { Vue, Component } from "vue-property-decorator";

import ToDoItem from '../ToDoItem/ToDoItem.vue';
import UpdateDialog from '../UpdateDialog/UpdateDialog.vue';
import toDoMutationTypes from '../../store/toDoModule/mutation-types';
import ToDoModel from '../../models/toDoModel';
import { ToDosFilter } from '../../enums/toDosFilter';

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

  get activeToDos(): Array<ToDoModel> {
    return this.toDos.filter(t => !t.isChecked);
  }

  get filteredToDos(): Array<ToDoModel> {
    switch (this.filterValue) {
      case ToDosFilter.ALL:
        return this.toDos;
      case ToDosFilter.ACTIVE:
        return this.activeToDos;
      case ToDosFilter.COMPLETED:
        return this.toDos.filter(t => t.isChecked);
    }

    return this.toDos;
  }

  get completedTodosRatio(): number {
    const completedToDos = this.filteredToDos.filter(t => t.isChecked);

    if (!this.toDos.length) {
      return 100;
    }

    return (completedToDos.length / this.filteredToDos.length) * 100;
  }

  get filterValue(): ToDosFilter {
    return this.$store.state.toDoModule.selectedFilterValue;
  }

  set filterValue(filterValue: ToDosFilter) {
    this.$store.commit(toDoMutationTypes.CHANGE_FILTER, filterValue);
  }

  closeDialog(isSubmitted: boolean = false) {
    if (isSubmitted) {
      if (this.selectedItemIndex >= 0) {
        this.$store.commit(toDoMutationTypes.UPDATE_TODO, {
          index: this.selectedItemIndex,
          item: this.selectedItem,
        });
      } else {
        this.$store.dispatch('addToDo', this.selectedItem);
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
    this.$store.dispatch('removeToDo', index);
  }

  updateToDo(index: number) {
    this.selectedItemIndex = index;
    this.selectedItem = Object.assign({}, this.filteredToDos[index]); 
    this.isDialogVisible = true;
  }

  updateStatus(index: number) {
    const item = Object.assign({}, this.filteredToDos[index]);
    item.isChecked = !item.isChecked;

    this.$store.dispatch('updateToDo', {
      index,
      item,
    });
  }
}
