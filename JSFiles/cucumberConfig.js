"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//var reporter = require('cucumber-html-reporter');
const reporter = __importStar(require("cucumber-html-reporter"));
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    // setlto "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    allScriptsTimeout: 10000,
    //restartBrowserBetweenTests: true,
    Capabilities: [{
            "browserName": "chrome",
        }],
    // require feature files
    specs: ['../features/CustomerLogin.feature'],
    cucumberOpts: {
        //tags:"",
        format: 'json:./cucumberReports/cucumberreport.json',
        // require step definitions
        require: [
            './stepDefinitions/*.js',
            './hooks/*.js'
        ]
    },
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    }),
    onComplete: () => __awaiter(this, void 0, void 0, function* () {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberReports/cucumberreport.json',
            output: './cucumberReports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUFtRDtBQUNuRCxpRUFBbUQ7QUFDbkQsMkNBQW1DO0FBR3hCLFFBQUEsTUFBTSxHQUFXO0lBRXhCLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLHVDQUF1QztJQUN2QyxTQUFTLEVBQUUsUUFBUTtJQUNuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixtQ0FBbUM7SUFDdkMsWUFBWSxFQUFFLENBQUM7WUFDYixhQUFhLEVBQUUsUUFBUTtTQUFFLENBQUM7SUFFNUIsd0JBQXdCO0lBQ3BCLEtBQUssRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0lBRTVDLFlBQVksRUFBRTtRQUNWLFVBQVU7UUFDVixNQUFNLEVBQUMsNENBQTRDO1FBQ3JELDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7WUFDeEIsY0FBYztTQUNmO0tBQ0Y7SUFDRCxTQUFTLEVBQUUsR0FBTyxFQUFFO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7SUFDNUYsQ0FBQyxDQUFBO0lBQ0QsVUFBVSxFQUFFLEdBQU8sRUFBRTtRQUVuQixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1Q0FBdUM7WUFDakQsTUFBTSxFQUFFLHdDQUF3QztZQUNoRCxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUdKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQTtDQUNGLENBQUMifQ==