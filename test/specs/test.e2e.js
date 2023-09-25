import { expect } from '@wdio/globals'
import homePage from '../pageobjects/homePage.js'

describe('Retirement Calculation', () => {
    it('check for retirement savings', async () => {
        await (await homePage.currentAge).scrollIntoView();
        await (await homePage.currentAge).setValue(40);
        await (await homePage.retirementAge).setValue(68);
        await (await homePage.annualIncome).click();
        await (await homePage.annualIncome).setValue(100000);
        await (await homePage.annualIncomeSpouse).click();
        await (await homePage.annualIncomeSpouse).setValue(75000);
        await (await homePage.currentSavingsBalance).scrollIntoView();
        await (await homePage.currentSavingsBalance).click();
        await (await homePage.currentSavingsBalance).setValue(500000);
        await (await homePage.currentContribution).setValue(10);
        await (await homePage.contributionIncreaseRate).setValue(2);
        await (await homePage.contributionIncreaseRate).scrollIntoView();
        await (await homePage.socialSecurity).waitForClickable();
        await (await homePage.socialSecurity).click();
        await (await homePage.maritalStatus).waitForClickable();
        await (await homePage.maritalStatus).click();
        await (await homePage.socialSecuityOverride).waitForDisplayed();
        await (await homePage.maritalStatus).scrollIntoView();
        await (await homePage.socialSecuityOverride).click();
        await (await homePage.socialSecuityOverride).setValue(4000);

        await (await homePage.calculateBtn).click();
        await (await homePage.resultMsg).waitForDisplayed();
        await expect(await (await homePage.resultMsg).isDisplayed()).toBeTruthy();
    })
})

