import { createStore } from 'vuex'

export const store = createStore({
   state() {
      return {
         todos: [],
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
   },
   getters: {
      storeTodos: (state) => state.todos,
   },
   actions: {
      addTodo: (context, payload) => {
         context.commit('ADD_TODO', payload)
      },
      deleteTodo: (context, payload) => {
         context.commit('DELETE_TODO', payload)
      },
   },
})
