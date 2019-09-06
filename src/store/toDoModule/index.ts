import ToDoModel from "../../models/toDoModel";
import mutationTypes from './mutation-types';
import LocalStorageService from '../../services/localStorageService';
import { ToDosFilter } from "../../enums/toDosFilter";

export default {
  state: {
    toDos: new Array<ToDoModel>(),
    selectedFilterValue: ToDosFilter.ALL,
    isLoading: false,
    isFetchFailed: false,
  },

  mutations: {
    [mutationTypes.ADD_TODO](state: any, todoModel: ToDoModel) {
      state.toDos.push(todoModel);
    },
    [mutationTypes.REMOVE_TODO](state: any, index: number) {
      state.toDos.splice(index, 1);
    },
    [mutationTypes.UPDATE_TODO](state: any, { index, item }: { index: number, item: ToDoModel }) {
      state.toDos[index].value = item.value;
      state.toDos[index].isChecked = item.isChecked;
    },
    [mutationTypes.GET_TODOS_REQUEST](state: any) {
      state.toDos = [];
      state.isLoading = true;
      state.isFetchFailed = false;
    },
    [mutationTypes.GET_TODOS_SUCCESS](state: any, todos: Array<ToDoModel>) {
      state.toDos = todos;
      state.isLoading = false;
    },
    [mutationTypes.GET_TODOS_FAILURE](state: any) {
      state.isLoading = false;
      state.isFetchFailed = true;
    },
    [mutationTypes.CHANGE_FILTER](state: any, filterValue: ToDosFilter) {
      state.selectedFilterValue  = filterValue;
    },
  },

  actions: {
    async getToDos(context: any) {
      context.commit(mutationTypes.GET_TODOS_REQUEST);

      try {
        const todos = LocalStorageService.get('todos');

        if (todos && todos.length) {
          context.commit(mutationTypes.GET_TODOS_SUCCESS, todos);
        } else {
          const response = await fetch('./data/todos.json');
          const payload = await response.json();
          LocalStorageService.add('todos', payload);
          context.commit(mutationTypes.GET_TODOS_SUCCESS, payload);
        }
      } catch (err) {
        context.commit(mutationTypes.GET_TODOS_FAILURE);
      }
    },
    addToDo(context: any, todoModel: ToDoModel) {
      context.commit(mutationTypes.ADD_TODO, todoModel);
      LocalStorageService.add('todos', context.state.toDos);
    },
    removeToDo(context: any, index: number) {
      context.commit(mutationTypes.REMOVE_TODO, index);
      LocalStorageService.add('todos', context.state.toDos);
    },
    updateToDo(context: any, { index, item }: { index: number, item: ToDoModel }) {
      context.commit(mutationTypes.UPDATE_TODO, { index, item });
      LocalStorageService.add('todos', context.state.toDos);
    },
  },
};
