<template>
   <TaskItem :key="task.id" v-for="task in tasks" :task="task"/>
</template>

<script>
import TaskItem from "@/components/TaskItem";

export default {
   props: {
      tasks: []
   },
   components: {
      TaskItem
   }
}
</script>

<style scoped>

</style>