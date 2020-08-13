import React from 'react'

import Button from './Button'

export default {
  title: 'To-Do Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Button {...args} />

export const AddButton = Template.bind({})

AddButton.args = {
  make: 'add',
  children: 'Add',
}

export const DeleteButton = Template.bind({})

DeleteButton.args = {
  make: undefined,
  children: 'X',
}
