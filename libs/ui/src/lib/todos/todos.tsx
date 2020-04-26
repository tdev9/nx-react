import React from 'react';
import { Todo } from '@myworkspace/data';

import './todos.scss';


export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map(t => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </ul>
  );
};
