<script>
  import { toDoList, isAdding } from './store.js';

  let taskName = ""
  

  const addTask = () =>{
    toDoList.update(old => {
      old.push({
        name: taskName,
        done: false
      })
      return old
    })

    isAdding.set(false)
    taskName = ""
  }

</script>

<div class="flex flex-col items-center">
    

  
  <div class="grid-cols-2">
    Task: <input class="input input-sm max-w-xs m-2" type="text" bind:value={taskName}/>
  
    <button class="btn btn-primary btn-sm" disabled={!taskName} on:click={addTask}>Add</button>  
  </div>
  <br><br>
</div>



