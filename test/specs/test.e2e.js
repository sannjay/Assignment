import { expect } from '@wdio/globals'
import homePage from '../pageobjects/homePage.js'
import data from '../../test_data/test.json' assert { type: "json" };

describe('E2E Retirement Calculation', () => {
    it('check retirement savings with social security income', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,0);
        // Select social security number
        await homePage.selectSocialSecurityIncome(data);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(true);
    })

    it('check retirement savings with default calculator values', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,0);
        // Select Default Calculator link and Fill the data
        await homePage.fillDefaultCalculatorData(data);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(true);
    })

    it('check retirement savings without social security income', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,0);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(true);
    })

    it('check retirement savings without Filling any Data', async () => {
        // Click on Calculate Button and validate message
        await homePage.calculateResult(false);
    })

    it('check boundary value Errors for lower limit', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,1);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(false);
        // Validate boundary Error Messages
        await homePage.validateBoundaryErrors();
    })

    it('check boundary value Errors for Upper limit', async () => {
        // Enter data for pre retirement calculator fields
        await homePage.fillPreRetirementFormData(data,2);
        // Click on Calculate Button and validate message
        await homePage.calculateResult(false);
        // Validate boundary Error Messages
        await homePage.validateBoundaryErrors();
    })
})

