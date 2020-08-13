import React from 'react'
import TodoList from './TodoList'

export default {
  title: 'To-Do Component/TodoList',
  component: TodoList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <TodoList {...args} />

export const OneListeItem = Template.bind({})

OneListeItem.args = {
  deleteButton: undefined,
  todos: [{ completed: true, todo: 'Martin', id: '1' }],
}

export const ListOfListItems = Template.bind({})

ListOfListItems.args = {
  todos: [
    { completed: false, todo: 'Martin', id: '1' },
    { completed: true, todo: 'Martin', id: '1' },
    { completed: false, todo: 'Martin', id: '1' },
  ],
  deleteButton: undefined,
}
