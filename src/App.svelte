<script>
	import AddTask from './lib/AddTask.svelte';
  import TaskList from './lib/TaskList.svelte'
  import { toDoList, isAdding } from './lib/store.js';

  let filter = ""

  function setIsAdding(){
    isAdding.update(old => !old)
  }
</script>

<main>
  <h1 class="text-purple-600 uppercase text-7xl flex-nowrap font-thin leading-tight m-8 max-w-xs">To-do List</h1>

  {#if !$isAdding}
    <button class="btn btn-sm m-5" on:click={setIsAdding}>Add new task</button><br>
  {:else}
    <AddTask/>
  {/if}


  
  Filtro: <input class="input input-sm m-2" type="text" bind:value={filter}/>

  {#each $toDoList as task, index}
    <TaskList {task} {index}/>
  {/each}

</main>
