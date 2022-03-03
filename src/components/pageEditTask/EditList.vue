<template>
   <EditItem :key="task.id" v-for="task in tasks" :task="task" />
</template>

<script>
import EditItem from '@/components/pageEditTask/EditItem'

export default {
   props: {
      tasks: [],
   },
   methods: {},
   components: {
      EditItem,
   },
}
</script>

<style scoped></style>
