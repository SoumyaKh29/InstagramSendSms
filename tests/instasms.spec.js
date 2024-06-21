const {test, expect} = require('@playwright/test');
const { LoginPage, Confirmations, OptionPanel, SmsFriend } = require('../pageobjects/Index');
const dataset = JSON.parse(JSON.stringify(require('../utils/instasmsTestData.json')));


test('first test Playwright test', async ({browser})=>
    {
    const context = await browser.newContext();
    const page = await context.newPage();
   
    //login  
    const loginPage = new LoginPage(page); 
    await loginPage.goToPage();
    await loginPage.validLogin(dataset.username,dataset.password);
    
    //Give confirmations for not saving login and turning off notifications
    const conf = new Confirmations(page);
    await conf.skipSaveLogin();
    await conf.keepNotificationOff();

    //Go to Message Panel
    const panel = new OptionPanel(page);
    await panel.messagePanel();
    
    //Go to friends chat window on sms field and send message
    const friend = new SmsFriend(page);
    await friend.findFriend(dataset.userFriend);
    await friend.sendSms(dataset.smsString);

    });