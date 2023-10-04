import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get currentAge () { return $('#current-age');    }
    get retirementAge () { return $('#retirement-age');    }
    get annualIncome () { return $('#current-income');    }
    get annualIncomeSpouse () { return $('#spouse-income');    }
    get currentSavingsBalance () { return $('#current-total-savings');    }
    get currentContribution () { return $('#current-annual-savings');    }
    get contributionIncreaseRate () { return $('#savings-increase-rate');    }
    get socialSecurityYes () { return $('//input[@id="yes-social-benefits"]/following-sibling::*');    }
    get maritalStatusYes () { return $('//input[@id="married"]/following-sibling::*');    }
    get socialSecurityNo () { return $('//input[@id="no-social-benefits"]/following-sibling::*');    }
    get maritalStatusNo () { return $('//input[@id="single"]/following-sibling::*');    }
    get socialSecuityOverride () { return $('#social-security-override');    }
    get calculateBtn () { return $('//button[text()="Calculate"]');    }
    get resultMsg () { return $('#result-message');    }
    get resultErrorMsg () { return $('#calculator-input-alert');    }
    get defalutCalculatorLink () { return $('//a[text()="Adjust default values"]')}
    get additionalIncome () { return $('#additional-income'); }
    get retirementDuration () { return $('#retirement-duration'); }
    get includeInflation () { return $('//input[@id="include-inflation"]/following-sibling::*'); }
    get expectedInflationRate () { return $('#expected-inflation-rate'); }
    get retirementIncome () { return $('#retirement-annual-income'); }
    get preRetirementRoi () { return $('#pre-retirement-roi'); }
    get postRetirementRoi () { return $('#post-retirement-roi'); }
    get saveBtn () { return $('//button[text()="Save changes"]'); }
    get invalidCurrentAge () { return $('#invalid-current-age-error'); }
    get invalidRetirementAge () { return $('#invalid-retirement-age-error'); }

    /**
     * To Enter field value
     * @param {*} element 
     * @param {*} data data value
     * @author Sanjay Rathore
     */
    async setFieldValue (element, data) {
        await (await element).waitForDisplayed();
        await (await element).scrollIntoView();
        await (await element).click();
        try {
            await (await element).setValue(data);
            console.log("Entered field value :"+data);
        }
        catch(err) {
            console.log(err);
        }
    }

    async clickElement(element) {
        await (await element).waitForClickable();
        await (await element).click();
        console.log("Clicked on Element");
    }

    async validateSuccessMsg () {
        await (await this.resultMsg).waitForDisplayed();
        await expect(await (await this.resultMsg).isDisplayed()).toBeTruthy();
        console.log("Success message validated");
    }

    async validateErrorMsg() {
        await (await this.resultErrorMsg).waitForDisplayed();
        await expect(await (await this.resultErrorMsg).isDisplayed()).toBeTruthy();
        console.log("Error message validated");
    }

    /**
     * To fill the pre retirement data
     * @param {*} data Data object
     * @author Sanjay Rathore
     */
    async fillPreRetirementFormData(data,index) {
        try{
            // Set value for current age
            await this.setFieldValue(await this.currentAge, (data.currentAge)[index]);
            // Set value for retirement age
            await this.setFieldValue(await this.retirementAge, (data.retirementAge)[index]);
            // Set value for annual income
            await this.setFieldValue(await this.annualIncome, (data.annualIncome)[index]);
            // Set value for spouse annual income
            await this.setFieldValue(await this.annualIncomeSpouse, (data.annualIncomeSpouse)[index]);
            // Set value for current savings balance
            await this.setFieldValue(await this.currentSavingsBalance, (data.currentSavingsBalance)[index]);
            // Set value for current contribution
            await this.setFieldValue(await this.currentContribution, (data.currentContribution)[index]);
            // Set value for contribution increase rate
            await this.setFieldValue(await this.contributionIncreaseRate, (data.contributionIncreaseRate)[index]);
        }
        catch(err) {
            console.log(err);
        }
    }

    async selectSocialSecurityIncome(data){
        try{
            if(data.socialSecurityIncome){
            await this.clickElement(await this.socialSecurityYes);
            console.log("Social Security selected as Yes");
            // Select marital status
            if(data.maritalStatus){
                await this.clickElement(await this.maritalStatusYes);
                console.log("Marital Status selected as Yes");
            } else {
                await this.clickElement(await this.maritalStatusNo);
                console.log("Marital Status selected as No");
            }
            // Set value for social security override
            await this.setFieldValue(await this.socialSecuityOverride, data.socialSecuityOverride);
        }else {
            await this.clickElement(await this.socialSecurityNo);
            console.log("Social Security selected as No");
        }
    }catch(err){
        console.log(err);
    }    
    }

    async calculateResult(result) {
        try {
            await this.clickElement(await this.calculateBtn);
            console.log("Calculate btn");
        }
        catch(err) {
            console.log(err);
        }
        if(result) {
            await this.validateSuccessMsg();
        } else {
            await this.validateErrorMsg();
        }
    }

    async fillDefaultCalculatorData(data) {
        try {
        await this.clickElement(await this.defalutCalculatorLink);
        console.log("Clicked on Default Calculator link");
        //Fill fields data
        await this.setFieldValue(await this.additionalIncome, data.additionalIncome);
        await this.setFieldValue(await this.retirementDuration, data.retirementDuration);
        await this.clickElement(await this.includeInflation);
        await this.setFieldValue(await this.expectedInflationRate, data.expectedInflationRate);
        await this.setFieldValue(await this.retirementIncome, data.retirementIncome);
        await this.setFieldValue(await this.preRetirementRoi, data.preRetirementRoi);
        await this.setFieldValue(await this.postRetirementRoi, data.postRetirementRoi);
        }
        catch(err) {
            console.log(err);
        }
        await this.clickElement(await this.saveBtn);
        console.log("Clicked on Save button");
    }
    
    async validateBoundaryErrors() {
        await expect((await this.invalidCurrentAge).isExisting).toBeTruthy();
        await expect((await this.invalidRetirementAge).isExisting).toBeTruthy();
        console.log("Validated Boundary error messages");
    }
    
}

export default new HomePage();
