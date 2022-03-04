<template>
   <EditItem :key='task.id' v-for='task in tasks' :task='task'/>
</template>

<script>
import EditItem from '@/components/pageEditTask/EditItem'

export default {
   props: {
      tasks: {
         type: Array,
      },
   },
   components: {
      EditItem,
   },
}
</script>

<style scoped></style>
