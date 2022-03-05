import { createStore } from 'vuex'

export const store = createStore({
   state() {
      return {
         todos: [],
         todo: {},
         revertTodo: {},
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
         state.revertTodo = {}
      },

      CANSEL_EDITION: (state, payload) => {
         const todo = state.todos.find((todo) => todo.id === payload.id)
         state.revertTodo = payload
         state.todo = JSON.parse(JSON.stringify(todo))
      },

      REVERT_EDITION: (state) => {
         state.todo = JSON.parse(JSON.stringify(state.revertTodo))
      },

      ADD_TASK: (state, payload) => {
         state.todo.tasks.push(payload)
      },

      DELETE_TASK: (state, payload) => {
         state.todo.tasks = state.todo.tasks.filter(
            (key) => key.id !== payload.id
         )
      },

      MARK_TASK: (state, payload) => {
         state.todo.tasks = state.todo.tasks.map((key) => {
            if (key.id === payload.id) {
               key.isDone = true
            }
            return key
         })
      },
   },
   getters: {
      storeTodos: (state) => state.todos,
      storeTodo: (state) => state.todo,
      storeRevertTodo: (state) => state.revertTodo,
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

      canselEdition: (context, payload) => {
         context.commit('CANSEL_EDITION', payload)
      },

      revertEdition: (context) => {
         context.commit('REVERT_EDITION')
      },

      addTask: (context, payload) => {
         context.commit('ADD_TASK', payload)
      },

      deleteTask: (context, payload) => {
         context.commit('DELETE_TASK', payload)
      },

      markTask: (context, payload) => {
         context.commit('MARK_TASK', payload)
      },
   },
})
