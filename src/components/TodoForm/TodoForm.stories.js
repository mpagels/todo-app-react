import React from 'react'

import TodoForm from './TodoForm'

export default {
  title: 'To-Do Component/Todo Input',
  component: TodoForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <TodoForm {...args} />

export const Form = Template.bind({})

Form.args = {
  onSubmit: undefined,
}
