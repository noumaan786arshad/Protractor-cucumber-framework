import {After,Status,Before} from "cucumber";
import { browser } from "protractor";
import { async } from "q";

// Before(async function () {
//     // This hook will be executed before scenarios tagged with @foo
//     console.log("Before Hook is executed");
//     browser.restart();
    
//   });


  After(async function(scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if (scenario.result.status=== Status.FAILED)
    {
      //code to take screesnhot
     const screenshot= await browser.takeScreenshot();
   
          await this.attach(screenshot,"image/png");
    }
  
  });