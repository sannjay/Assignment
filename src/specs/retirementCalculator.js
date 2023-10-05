import homePage from '../pageobjects/homePage.js'
import data from '../../testDatamanagement/test.json' assert { type: "json" };

describe('Retirement Calculation Scenario 1', () => {
    it('Should check retirement savings with social security income', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,0);
        // Select social security number
        await homePage.selectSocialSecurityIncome(data);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(true);
    })
})

describe('Retirement Calculation Scenario 2', () => {
    it('Should check retirement savings with default calculator values', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,0);
        // Select Default Calculator link and Fill the data
        await homePage.fillDefaultCalculatorData(data);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(true);
    })
})

describe('Retirement Calculation Scenario 3', () => {
    it('Should check retirement savings with out social security income', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,0);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(true);
    })
})

describe('Retirement Calculation Error Scenario 1', () => {
    it('Should check the error messages with out filling the data and click the calculate button', async () => {
        // Click on Calculate Button and validate message
        await homePage.calculateResult(false);
    })
})

describe('Retirement Calculation Error Scenario 2', () => {
    it('Should check the error messages by filling the min allowed data values', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,1);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(false);
        // Validate boundary Error Messages
        await homePage.validateBoundaryErrors();
    })
})

describe('Retirement Calculation Error Scenario 3', () => {
    it('Should check the error messages by filling the max allowed data values', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,2);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(false);
        // Validate boundary Error Messages
        await homePage.validateBoundaryErrors();
    })
})

