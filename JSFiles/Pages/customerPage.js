"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const topMenu_1 = require("./topMenu");
const protractor_1 = require("protractor");
class customerPage extends topMenu_1.topMenu {
    constructor() {
        super();
        this.verify_bankName("customerPage");
        this.verify_homeButton_is_displayed("customerPage");
        this.customerDropdown = protractor_1.element(protractor_1.by.id("userSelect"));
        this.loginButton = protractor_1.element(protractor_1.by.css("button[class='btn btn-default']"));
    }
    select_customer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerDropdown.all(protractor_1.by.tagName('option')).each(function (item) {
                item.getText().then(function (customers) {
                    console.log(customers);
                });
            });
        });
    }
}
exports.customerPage = customerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZXMvY3VzdG9tZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBb0M7QUFDcEMsMkNBQXdEO0FBR3hELE1BQWEsWUFBYSxTQUFRLGlCQUFPO0lBTXJDO1FBRUksS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFWSxlQUFlLENBQUMsUUFBZTs7WUFFeEMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUVwRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztvQkFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUdQLENBQUM7S0FBQTtDQUNKO0FBM0JELG9DQTJCQyJ9