import {automation} from '../common/HelperUtils';

export const locators = {
  commonLocators: {
    display: 'component-display',
    acButton: ':nth-child(1) > :nth-child(1) > button',
    comboButtons: ':nth-child(1) > :nth-child(2) > button',
    modulasButton: ':nth-child(1) > :nth-child(3) > button',
    divideButton: ':nth-child(1) > .orange > button',
    multiplyButton: ':nth-child(2) > .orange > button',
    substractButton: ':nth-child(3) > .orange > button',
    additionButton: ':nth-child(4) > .orange > button',
    equalButton: ':nth-child(5) > .orange > button',
    numbers: 'component-button',
    decimal: ':nth-child(5) > :nth-child(2) > button',
  },
};
