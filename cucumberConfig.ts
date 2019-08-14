import {Config} from "protractor";
//var reporter = require('cucumber-html-reporter');
import * as reporter from "cucumber-html-reporter";
import {browser} from "protractor";
import { async } from "q";

export let config: Config = {

    directConnect:true,
    // setlto "custom" instead of cucumber.
    framework: 'custom',   
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    allScriptsTimeout: 10000,
    //restartBrowserBetweenTests: true,
Capabilities :[{
  "browserName": "chrome",}],

// require feature files
    specs: ['../features/CustomerLogin.feature'],
   
    cucumberOpts: {
        //tags:"",
        format:'json:./cucumberReports/cucumberreport.json',
      // require step definitions
      require: [
        './stepDefinitions/*.js', 
        './hooks/*.js'
      ]
    },
    onPrepare: async()=>{
        await browser.manage().window().maximize();
        await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    },
    onComplete: async()=>{

      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberReports/cucumberreport.json',
        output: './cucumberReports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }

   
    };
 
    reporter.generate(options);
    }  
  };
