/// <reference types="Cypress" />
import CommonObject from '../../common/CommonObject';

const comObj = CommonObject.getInstance();

describe('Add Employee Test Suite', function () {
  beforeEach(function () {
    cy.fixture('Calculator').then(function (data) {
      this.data = data;
      cy.visit(data.url);
    });
  });

  it('Verify Addition Flow', function () {
    comObj.addition(this.data.additionCount);
    comObj.verifyAddition();
  });

  it('Verify Substraction Flow', function () {
    comObj.substraction(this.data.additionCount);
    comObj.verifySubstraction();
  });

  it('Verify multiply Flow', function () {
    comObj.multiply(this.data.additionCount);
    comObj.verifyMultiply();
  });

  it('Verify divide Flow', function () {
    comObj.divide(this.data.divideCount);
    comObj.verifyDivide();
  });

});