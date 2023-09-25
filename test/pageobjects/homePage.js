import { $ } from '@wdio/globals'
import Page from './page.js';

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
    get socialSecurity () { return $('//input[@id="yes-social-benefits"]/following-sibling::*');    }
    get maritalStatus () { return $('//input[@id="married"]/following-sibling::*');    }
    get socialSecuityOverride () { return $('#social-security-override');    }
    get calculateBtn () { return $('//button[text()="Calculate"]');    }
    get resultMsg () { return $('#result-message');    }
    
}

export default new HomePage();
