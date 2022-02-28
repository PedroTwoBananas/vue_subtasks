<template>
   <TodoList :todos="todos"/>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
   data() {
      return {
         todos: [
            {
               id: Date.now(),
               name: 'Понедельник',
               tasks: [
                  {
                     id: 1,
                     isDone: false,
                     text: 'Отжуманя'
                  },
                  {
                     id: 2,
                     isDone: false,
                     text: 'Прес качат'
                  },
                  {
                     id: 3,
                     isDone: false,
                     text: 'Атдыхат'
                  },
               ]
            },
            {
               id: Date.now(),
               name: 'Вторник',
               tasks: [
                  {
                     id: 4,
                     isDone: false,
                     text: 'Ауе'
                  },
                  {
                     id: 5,
                     isDone: false,
                     text: 'Жизнь'
                  },
                  {
                     id: 6,
                     isDone: false,
                     text: 'Ворам'
                  },
               ]
            }
         ]
      }
   },

   components: {
      TodoList
   }
}

</script>

<style scoped>

</style>
