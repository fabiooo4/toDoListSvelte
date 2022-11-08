<script>
  import TaskBuild from './lib/TaskBuild.svelte'

  let tasks = [{
    name: "task1",
  },
  {
      name: "task2",
  }]

  let filter=""
  let taskName= ""
  $: filteredTasks = tasks.filter(el => el.name.includes(filter))
  $: deleteComponent = (index) => {
    tasks.splice(index, 1)
  }

  const addNewComponent = () =>{
    tasks.push({
      name: taskName,
    })
    tasks = tasks
  }

  let index

  const deleteTask = (index) => {
    // tasks.splice(index, 1)
    console.log(index)
  }
</script>

<main>
  <h1 class="text-orange-600 uppercase text-7xl flex-nowrap font-thin leading-tight m-8 max-w-xs">To-do List</h1>

  <div class="flex flex-col items-center">
    
    <h3 class="font-bold text-xl">Aggiungi una task</h3><br>
    
    <div class="grid-cols-2">
      Task: <input class="rounded bg-zinc-600 w-60 overflow-auto" type="text" bind:value={taskName}/>
    
      <button class="rounded bg-orange-700 text-white w-20 h-8 m-2 hover:bg-orange-800" on:click={addNewComponent}>Add</button>  
    </div>
    
  </div><br><br>
  
  Filtro: <input class="rounded bg-zinc-600" type="text" bind:value={filter}/>

  <div id="taskList">
    {#each filteredTasks as task, i}
      <TaskBuild {task}/>
    {/each}
  </div>
</main>
