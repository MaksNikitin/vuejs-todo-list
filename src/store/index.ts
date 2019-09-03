import Vue from 'vue';
import Vuex from 'vuex';

import ToDoModel from '../models/ToDoModel';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: Array<ToDoModel>(),
  },

  mutations: {
    add(state, todoModel: ToDoModel) {
      state.todos.push(todoModel);
    },
    delete(state, index: number) {
      state.todos.splice(index, 1);
    },
    update(state, { index, value }) {
      state.todos[index].value = value;
    },
    changeTodoState(state, index: number) {
      state.todos[index].isChecked = !state.todos[index].isChecked;
    }
  }
})
