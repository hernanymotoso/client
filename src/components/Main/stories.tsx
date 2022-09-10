import Main, { MainProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

const meta: Meta<MainProps> = {
  title: 'Main',
  component: Main,
  args: {
    title: 'React avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components',
  },
};

export default meta;

export const Basic: Story<MainProps> = args => <Main {...args} />;
