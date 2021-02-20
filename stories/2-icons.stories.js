import React from 'react';

import { Button } from './Button'
import My_Button from '../components/button'
import * as icons from '../components/icons'
      export default {
  title: 'icons',

  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
export const fatci = () => <My_Button>Merhaba</My_Button>
export const fatci2 = () => <My_Button>Merhaba2</My_Button>
export const icon = () => (
    <div>
<icons.ArrowBottom style ={{ color: 'red'}}/>


    </div>
)

