import { ElementFinder,element,by } from "protractor";


export class loginPage
{
userName:ElementFinder;
password:ElementFinder;
email:ElementFinder;
submitButton:ElementFinder;

constructor()
{
    this.userName=element(by.model("Auth.user.name"));
    this.password=element(by.model("Auth.user.password"));
    this.email=element(by.model("model[options.key]"));
    this.submitButton=element(by.css("button[class='btn btn-danger']"));

}



}