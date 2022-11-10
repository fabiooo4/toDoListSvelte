<script>
  import { toDoList } from './store.js';
  export let task = {}
  export let index

  function deleteTask(){
    toDoList.update(old => {
      old.splice(index, 1)
      return old
    })
  }

</script>

<div class="flex justify-between m-0 font-thin text-lg">
  {task.name}
  <button class="btn btn-secondary btn-xs btn-circle" on:click={deleteTask}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</div>
<div class="divider"></div> 
