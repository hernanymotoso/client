import GlobalStyles from '../src/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'gray',
    values: [{ name: 'gray', value: '#c9c9c9' }],
  },
};

export const decorators = [
  (Story) => (
    <> 
      <GlobalStyles />
      <Story />
    </>
  ),
];
