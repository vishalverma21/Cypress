import {locators} from '../ObjectRepository/AppLocators';
import DataSet from './DataSet';

let dataSet = new DataSet();

type userType = {
  user: string;
};
class CommonObject {
  private static instance: CommonObject;

  private constructor() {}

  static getInstance(): CommonObject {
    if (!CommonObject.instance) {
      CommonObject.instance = new CommonObject();
    }

    return CommonObject.instance;
  }

  concat(add: string) {
    add = '[class="' + add + '"]';
    return add;
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addition(count: number) {
    cy.log('Addition will start now'+count);
    let a=[];
    for (var i = 0; i < count; i++) {      
      a.push(this.randomNumber(1,9));
      dataSet.setNumbers = a;
      cy.get(this.concat(locators.commonLocators.numbers)).contains(a[i]).click();
      cy.get(locators.commonLocators.additionButton).click();
    }
  }

  verifyAddition() {
    cy.log('Verifying Addition');
    let a=[];
    let sum=0;
    a=dataSet.getNumbers;
    cy.log("::::; "+a)
    for (var i = 0; i < a.length; i++) {      
      sum=sum+a[i];
    }
    cy.log('Sum is ::::: '+sum);
    cy.get(this.concat(locators.commonLocators.display)).should('have.text',sum);
  }

  substraction(count: number) {
    cy.log('Substraction will start now'+count);
    let a=[];
    for (var i = 0; i < count; i++) {      
      a.push(this.randomNumber(1,9));
      dataSet.setNumbers = a;
      cy.get(this.concat(locators.commonLocators.numbers)).contains(a[i]).click();
      cy.get(locators.commonLocators.substractButton).click();
    }
  }

  verifySubstraction() {
    cy.log('Verifying Substraction');
    let a=[];
    a=dataSet.getNumbers;
    let sub=a[0];
    cy.log("::::; "+a);
    for (var i = 1; i < a.length; i++) {      
      sub=sub-a[i];
    }
    cy.log('Substraction is ::::: '+sub);
    cy.get(this.concat(locators.commonLocators.display)).should('have.text',sub);
  }

  multiply(count: number) {
    cy.log('Multiply will start now'+count);
    let a=[];
    for (var i = 0; i < count; i++) {      
      a.push(this.randomNumber(1,9));
      dataSet.setNumbers = a;
      cy.get(this.concat(locators.commonLocators.numbers)).contains(a[i]).click();
      cy.get(locators.commonLocators.multiplyButton).click();
    }
  }

  verifyMultiply() {
    cy.log('Verifying Substraction');
    let a=[];
    a=dataSet.getNumbers;
    let mul=1;
    cy.log("::::; "+a);
    for (var i = 0; i < a.length; i++) {      
      mul=mul*a[i];
    }
    cy.log('Multiply is ::::: '+mul);
    cy.get(this.concat(locators.commonLocators.display)).should('have.text',mul);
  }

  divide(count: number) {
    cy.log('Divide will start now'+count);
    let a=[];
    for (var i = 0; i < count; i++) {      
      a.push(this.randomNumber(1,9));
      dataSet.setNumbers = a;
      cy.get(this.concat(locators.commonLocators.numbers)).contains(a[i]).click();
      cy.get(locators.commonLocators.divideButton).click();
    }
  }

  verifyDivide() {
    cy.log('Verifying Substraction');
    let a=[];
    a=dataSet.getNumbers;
    let div=a[0];
    cy.log("::::; "+a);
    for (var i = 1; i < a.length; i++) {      
      div=div/a[i];
    }
    cy.log('Multiply is ::::: '+div);
    cy.get(this.concat(locators.commonLocators.display)).should('have.text',div);
  }

}
export default CommonObject;
