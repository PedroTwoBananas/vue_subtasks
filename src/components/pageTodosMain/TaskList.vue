<template>
   <TaskItem :key='task.id' v-for='task in tasks' :task='task'/>
</template>

<script>
import TaskItem from '@/components/pageTodosMain/TaskItem'

export default {
   props: {
     tasks: {
        type: Array,
     }
   },
   components: {
      TaskItem,
   },
}
</script>

<style scoped></style>
