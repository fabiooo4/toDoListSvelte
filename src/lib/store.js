import { writable } from "svelte/store";

export const toDoList = writable([])
export const isAdding = writable(false)