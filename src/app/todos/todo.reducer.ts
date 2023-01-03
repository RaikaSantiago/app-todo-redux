import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al Mundo'),
    new Todo('Salvar al Mundo1'),
    new Todo('Salvar al Mundo2'),
    new Todo('Salvar al Mundo3'),
];

export const _todoReducer = createReducer(initialState,
    on(actions.crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
    on(actions.toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        })
    }),
    on(actions.editarTodo, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        })
    }),
    on(actions.borrarTodo, (state, { id}) => state.filter(todo => todo.id !== id)),
    on(actions.borrarAllCompleteTodo, state => state.filter(todo => !todo.completado)),
    on(actions.toggleAllTodo, (state, { all }) => state.map( todo => {
        return {
            ...todo,
            completado: all
        }
    })),
);

export function todoReducer(state: Todo[] = initialState, action: Action) {
    return _todoReducer(state, action);
}
