<template>
   <EditedTaskItem :key="task.id" v-for="task in tasks" :task="task" />
</template>

<script>
import EditedTaskItem from '@/components/EditedTaskItem'

export default {
   props: {
      tasks: [],
   },
   methods: {},
   components: {
      EditedTaskItem,
   },
}
</script>

<style scoped></style>
