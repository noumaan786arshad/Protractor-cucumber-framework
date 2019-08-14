import { ElementFinder, element, by } from "protractor";
import chai from "chai";
// import { homePage } from "./homePage";
var expect = chai.expect;



export class topMenu
{
    bankName:ElementFinder;
    homeButton:ElementFinder;    
    

    constructor()
    {
        this.bankName=element(by.css("strong[class='mainHeading']"));
        this.homeButton=element(by.css("button[class='btn home']"));          
    }

    public   async verify_bankName(pageName:String) {
        await this.bankName.getText().then(async(text)=>{
           await console.log("Bank name is displayed on "+pageName +" top menu as :"+text);
          await  expect(text).to.equal("XYZ Bank");
           
           });
   }

   public  async click_on_Home_button() {
    await this.homeButton.click();
    await console.log("Clicked on home button");
}

public async verify_homeButton_is_displayed(pageName:String)
{
    await this.homeButton.isDisplayed();
    await console.log("HOME button is displayed on "+pageName +" top menu");
}

}