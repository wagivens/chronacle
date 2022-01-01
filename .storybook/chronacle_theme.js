import { create } from '@storybook/theming';

export default create({
    // General Styling
    base: 'light',
    brandTitle: 'Chronacle',
    brandUrl: 'https://www.chronacle.app',
    brandImage: 'https://github.com/wagivens/chronacle/blob/main/assets/images/chronacle_logo.png?raw=true',
    colorPrimary: '#409D44',
    colorSecondary: '#0074DF',
    
    // Content Styling
    appBg: '#F2F2F2',
    appContentBg: '#FFFFFF',
    
    // Toolbar Styling
    barBg: '#004686',
    barSelectedColor: '#F2F2F2',
    barTextColor: '#D5D5D5',
});