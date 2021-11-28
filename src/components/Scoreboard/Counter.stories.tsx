import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Counter, CounterProps } from './Counter';

export default {
	title: 'Scoreboard/Counter',
	component: Counter,
} as Meta;

const Tepmplate: Story<CounterProps> = args => <Counter {...args} />;

export const CounterExample = Tepmplate.bind({});

CounterExample.args = {
	children: '010',
};
