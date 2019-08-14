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
// import { homePage } from "./homePage";
var expect = chai_1.default.expect;
class topMenu {
    constructor() {
        this.bankName = protractor_1.element(protractor_1.by.css("strong[class='mainHeading']"));
        this.homeButton = protractor_1.element(protractor_1.by.css("button[class='btn home']"));
    }
    verify_bankName(pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bankName.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                yield console.log("Bank name is displayed on " + pageName + " top menu as :" + text);
                yield expect(text).to.equal("XYZ Bank");
            }));
        });
    }
    click_on_Home_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeButton.click();
            yield console.log("Clicked on home button");
        });
    }
    verify_homeButton_is_displayed(pageName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeButton.isDisplayed();
            yield console.log("HOME button is displayed on " + pageName + " top menu");
        });
    }
}
exports.topMenu = topMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wTWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VzL3RvcE1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCxnREFBd0I7QUFDeEIseUNBQXlDO0FBQ3pDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFJekIsTUFBYSxPQUFPO0lBTWhCO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRWMsZUFBZSxDQUFDLFFBQWU7O1lBQzFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTSxJQUFJLEVBQUMsRUFBRTtnQkFDN0MsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFDLFFBQVEsR0FBRSxnQkFBZ0IsR0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakYsTUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QyxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztLQUFBO0lBRWEsb0JBQW9COztZQUNqQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRVksOEJBQThCLENBQUMsUUFBZTs7WUFFdkQsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBQyxRQUFRLEdBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUUsQ0FBQztLQUFBO0NBRUE7QUEvQkQsMEJBK0JDIn0=