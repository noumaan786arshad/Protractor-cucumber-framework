"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const topMenu_1 = require("./topMenu");
var expect = chai_1.default.expect;
class addCustomerPage extends topMenu_1.topMenu {
    constructor() {
        super();
        this.verify_bankName("addCustomerPage");
        this.verify_homeButton_is_displayed("addCustomerPage");
        this.firstName = protractor_1.element(protractor_1.by.model("fName"));
        this.lastName = protractor_1.element(protractor_1.by.model("lName"));
        this.postCode = protractor_1.element(protractor_1.by.model("postCd"));
        this.addCustomerButton = protractor_1.element(protractor_1.by.css("button[type='submit']"));
    }
    verify_alert_after_customer_is_added(customerID) {
        return __awaiter(this, void 0, void 0, function* () {
            let addCustomerAlertbc = protractor_1.browser.switchTo().alert();
            yield addCustomerAlertbc.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                console.log(text);
                yield expect(text).to.equal("Customer added successfully with customer id :" + customerID);
            }));
            yield addCustomerAlertbc.accept();
        });
    }
}
exports.addCustomerPage = addCustomerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ3VzdG9tZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZXMvYWRkQ3VzdG9tZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0Q7QUFDL0QsZ0RBQXdCO0FBRXhCLHVDQUFvQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLE1BQWEsZUFBZ0IsU0FBUSxpQkFBTztJQU94QztRQUVJLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFWSxvQ0FBb0MsQ0FBQyxVQUFpQjs7WUFFL0QsSUFBSSxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JELE1BQU8sa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFDLEVBQUU7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEdBQUMsVUFBVSxDQUFDLENBQUM7WUFFekYsQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUVILE1BQU0sa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFHdEMsQ0FBQztLQUFBO0NBR0E7QUFqQ0wsMENBaUNLIn0=