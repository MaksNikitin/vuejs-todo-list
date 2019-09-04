import ToDoModel from "../../models/ToDoModel";
import mutationTypes from './mutation-types';

export default {
  state: {
    toDos: new Array<ToDoModel>(),
    isLoading: false,
    isFetchFailed: false,
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
    [mutationTypes.GET_TODOS_REQUEST] (state: any) {
      state.toDos = [];
      state.isLoading = true;
      state.isFetchFailed = false;
    },
    [mutationTypes.GET_TODOS_SUCCESS] (state: any, todos: Array<ToDoModel>) {
      state.toDos = todos;
      state.isLoading = false;
    },
    [mutationTypes.GET_TODOS_FAILURE] (state: any) {
      state.isLoading = false;
      state.isFetchFailed = true;
    },
  },

  actions: {
    async getToDos(context: any) {
      context.commit(mutationTypes.GET_TODOS_REQUEST);

      try {
        const response = await fetch('./data/todos.json');
        const payload = await response.json();
        context.commit(mutationTypes.GET_TODOS_SUCCESS, payload);
      } catch (err) {
        context.commit(mutationTypes.GET_TODOS_FAILURE);
      }
    }
  }
}
