import { createStore } from 'vuex'

export const store = createStore({
   state() {
      return {
         todos: [],
         todo: {},
      }
   },
   mutations: {
      ADD_TODO: (state, payload) => {
         const newTodo = {
            id: payload.id,
            name: payload.name,
            tasks: payload.tasks,
         }
         state.todos.push(newTodo)
      },

      DELETE_TODO: (state, payload) => {
         state.todos = state.todos.filter((key) => key.id !== payload.id)
      },

      SELECT_TODO: (state, payload) => {
         state.todo = payload
      },

      CONFIRM_TODO: (state, payload) => {
         const todoIndex = state.todos.findIndex((t) => t.id === payload.id)
         state.todos[todoIndex] = payload
         state.todo = {}
      },

      DELETE_TASK: (state, payload) => {
         state.todo.tasks = state.todo.tasks.filter(
            (key) => key.id !== payload.id
         )
      },
   },
   getters: {
      storeTodos: (state) => state.todos,
      storeTodo: (state) => state.todo,
   },
   actions: {
      addTodo: (context, payload) => {
         context.commit('ADD_TODO', payload)
      },

      deleteTodo: (context, payload) => {
         context.commit('DELETE_TODO', payload)
      },

      selectTodo: (context, payload) => {
         context.commit('SELECT_TODO', payload)
      },

      confirmTodo: (context, payload) => {
         context.commit('CONFIRM_TODO', payload)
      },

      deleteTask: (context, payload) => {
         context.commit('DELETE_TASK', payload)
      },
   },
})
