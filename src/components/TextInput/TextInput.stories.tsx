import type { Meta, Story } from '@storybook/react';
import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Text input';
Default.args = {};
