import React from 'react'
import Todo from './Todo'

export default {
  title: 'To-Do Component/Todo',
  component: Todo,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

const Template = (args) => <Todo {...args} />

export const Primary = Template.bind({})
