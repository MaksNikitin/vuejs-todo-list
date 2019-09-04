import ToDoModel from "../../models/ToDoModel";
import mutationTypes from './mutation-types';

export default {
  state: {
    toDos: new Array<ToDoModel>(
      new ToDoModel('test', true),
      new ToDoModel('second', false),
    )
  },

  mutations: {
    [mutationTypes.ADD_TODO] (state: any, todoModel: ToDoModel) {
      state.toDos.push(todoModel);
    },
    [mutationTypes.REMOVE_TODO] (state: any, index: number) {
      state.toDos.splice(index, 1);
    },
    [mutationTypes.UPDATE_TODO] (state: any, { index, item }: { index: number, item: ToDoModel }) {
      state.toDos[index].value = item.value;
      state.toDos[index].isChecked = item.isChecked;
    },
  },

  actions: {

  }
}
