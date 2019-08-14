import { ElementFinder,element,by } from "protractor";

export class homePage
{
    pageHeader:ElementFinder;
    successfulLoginMessage:ElementFinder;

    constructor()
    {
        this.pageHeader=element(by.css("h1[class='ng-scope']"));
        this.successfulLoginMessage=element(by.css("p[class='ng-scope']"));
    }
}