import { createAction, props } from "@ngrx/store";
import { Todo } from "../models/todo.model";

export const crearTodo = createAction('[TODO INS] Crea TODO', props<{ texto: string }>());
export const toggleTodo = createAction('[TODO TOGGLE] Toggle TODO', props<{ id: number }>());
export const editarTodo = createAction('[TODO UPD] Editar TODO', props<{ id: number, texto: string }>());
export const borrarTodo = createAction('[TODO DEL] Borrar TODO', props<{ id: number }>());
export const borrarAllCompleteTodo = createAction('[TODO DEL ALL COMPLETE] Borrar All Completed TODO');
export const toggleAllTodo = createAction('[TODO TOGGLE ALL] Toggle All TODO', props<{ all: boolean }>());
