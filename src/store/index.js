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
   },
   getters: {
      storeTodos: (state) => state.todos,
   },
   actions: {
      addTodo: (context, payload) => {
         context.commit('ADD_TODO', payload)
      },
   },
})
