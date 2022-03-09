<template>
   <EditItemBlock :key='task.id' v-for='task in tasks' :task='task'/>
</template>

<script>


import EditItemBlock from '@/components/pageEditTask/EditItemBlock'
export default {
   props: {
      tasks: {
         type: Array,
      },
   },
   components: {
      EditItemBlock,

   },
}
</script>

<style scoped></style>
