import { createStore } from 'vuex'
import { db } from '@/components/functions/LocalStorage'

export const store = createStore({
   state() {
      return {
         todos: [],
         todo: {},
      }
   },
   mutations: {
      SET_TODOS: (state, payload) => {
         state.todos = payload
      },

      ADD_TODO: (state, payload) => {
         state.todos.push(payload)
      },

      DELETE_TODO: (state, payload) => {
         state.todos = state.todos.filter((key) => key.id !== payload.id)
      },

      SELECT_TODO: (state, payload) => {
         state.todo = payload
      },

      CONFIRM_TODO: (state, payload) => {
         const todoIndex = state.todos.findIndex(
            (todo) => todo.id === payload.id
         )
         state.todos[todoIndex] = payload
         state.todo = {}
      },
   },

   getters: {
      storeTodos: (state) => state.todos,
   },

   actions: {
      setTodos: (context) => {
         const localTodos = db.get('todos') || []
         context.commit('SET_TODOS', localTodos)
      },

      addTodo: (context, payload) => {
         const newTodo = {
            id: payload.id,
            name: payload.name,
            tasks: payload.tasks,
         }
         context.commit('ADD_TODO', newTodo)
         db.set('todos', context.state.todos)
      },

      deleteTodo: (context, payload) => {
         context.commit('DELETE_TODO', payload)
         db.set('todos', context.state.todos)
         db.remove('todo')
      },

      selectTodo: (context, payload) => {
         context.commit('SELECT_TODO', payload)
         db.set('todo', payload)
      },

      setTodo: (context) => {
         const localTodo = db.get('todo') || {}
         context.commit('SELECT_TODO', localTodo)
      },

      confirmTodo: (context, payload) => {
         context.commit('CONFIRM_TODO', payload)
         db.set('todos', context.state.todos)
         db.remove('todo')
      },
   },
})
