import { createStore } from 'vuex'
import { clone } from '@/components/functions/clone'

export const store = createStore({
   state() {
      return {
         todos: [],
         todo: {},
         revertTodo: null,
      }
   },
   mutations: {
      // SET_TODOS: (state) => {
      //    localStorage.setItem('todos', JSON.stringify(state.todos))
      // },

      // GET_TODOS: (state, payload) => {
      //    payload === null ? (state.todos = []) : (state.todos = payload)
      // },

      ADD_TODO: (state, payload) => {
         // const newTodo = {
         //    id: payload.id,
         //    name: payload.name,
         //    tasks: payload.tasks,
         // }
         state.todos.push(payload)
      },

      DELETE_TODO: (state, payload) => {
         state.todos = state.todos.filter((key) => key.id !== payload.id)
      },

      SELECT_TODO: (state, payload) => {
         state.todo = payload
      },

      // SET_TODO: (state) => {
      //    localStorage.setItem('todo', JSON.stringify(state.todo))
      // },

      // GET_TODO: (state, payload) => {
      //    payload === null ? (state.todo = {}) : (state.todo = payload)
      // },

      CONFIRM_TODO: (state, payload) => {
         const todoIndex = state.todos.findIndex((t) => t.id === payload.id)
         state.todos[todoIndex] = payload
         state.todo = {}
         state.revertTodo = {}
      },

      // SET_REVERT_TODO: (state) => {
      //    if (state.revertTodo === null) {
      //       state.revertTodo = state.todo
      //    }

      //    localStorage.setItem('revertTodo', JSON.stringify(state.revertTodo))
      // },

      // GET_REVERT_TODO: (state, payload) => {
      //    if (payload !== null) {
      //       state.revertTodo = payload
      //    }
      // },

      CANSEL_EDITION: (state, payload) => {
         const todo = state.todos.find((todo) => todo.id === payload.id)
         state.todo = clone(todo)
      },

      REVERT_EDITION: (state) => {
         state.todo = clone(state.revertTodo)
      },

      // ADD_TASK: (state, payload) => {
      //    state.todo.tasks.push(payload)
      //    state.revertTodo = state.todo
      // },

      // DELETE_TASK: (state, payload) => {
      //    state.todo.tasks = state.todo.tasks.filter(
      //       (key) => key.id !== payload.id
      //    )
      //    state.revertTodo = state.todo
      // },

      // MARK_TASK: (state, payload) => {
      //    state.todo.tasks = state.todo.tasks.map((key) => {
      //       if (key.id === payload.id) {
      //          key.isDone = true
      //       }
      //       return key
      //    })
      //    state.revertTodo = state.todo
      // },

      // EDIT_TASK: (state, payload) => {
      //    state.todo.tasks = state.todo.tasks.map((key) => {
      //       if (key.id === payload.id) {
      //          key.text = payload.text
      //       }
      //       return key
      //    })
      //    state.revertTodo = state.todo
      // },
   },
   getters: {
      storeTodos: (state) => state.todos
   },
   actions: {
      // setTodos: (context) => {
      //    context.commit('SET_TODOS')
      // },

      // getTodos: (context, payload) => {
      //    context.commit('GET_TODOS', payload)
      // },

      // getTaskById: (context, payload) => {
      //    console.log(context)
      //    const todo = context.state.todos.find(todo => todo.id === payload)
      //    console.log(todo)
      //    context.commit('SET_TODO', todo)
      // },

      addTodo: (context, payload) => {
         const newTodo = {
            id: payload.id,
            name: payload.name,
            tasks: payload.tasks,
         }
         context.commit('ADD_TODO', newTodo)
      },

      deleteTodo: (context, payload) => {
         context.commit('DELETE_TODO', payload)
      },

      selectTodo: (context, payload) => {
         context.commit('SELECT_TODO', payload)
      },

      // setTodo: (context) => {
      //    context.commit('SET_TODO')
      // },

      // getTodo: (context, payload) => {
      //    context.commit('GET_TODO', payload)
      // },

      confirmTodo: (context, payload) => {
         context.commit('CONFIRM_TODO', payload)
      },

      // setRevertTodo: (context) => {
      //    context.commit('SET_REVERT_TODO')
      // },

      // getRevertTodo: (context, payload) => {
      //    context.commit('GET_REVERT_TODO', payload)
      // },

      canselEdition: (context, payload) => {
         context.commit('CANSEL_EDITION', payload)
      },

      revertEdition: (context) => {
         context.commit('REVERT_EDITION')
      },

      // addTask: (context, payload) => {
      //    context.commit('ADD_TASK', payload)
      // },

      // deleteTask: (context, payload) => {
      //    context.commit('DELETE_TASK', payload)
      // },

      // markTask: (context, payload) => {
      //    context.commit('MARK_TASK', payload)
      // },

      // editTask: (context, payload) => {
      //    context.commit('EDIT_TASK', payload)
      // },
   },
})
