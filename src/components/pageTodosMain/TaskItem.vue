<template>
   <div class="item">
      <input disabled v-if="!task.isDone" type="checkbox" />
      <span>{{ task.text }}</span>
   </div>
</template>

<script>
export default {
   props: {
      task: {
         type: Object,
         required: true,
      },
   },
}
</script>

<style scoped>
.item {
   display: flex;
   flex-direction: row;
   gap: 10px;
}
</style>
