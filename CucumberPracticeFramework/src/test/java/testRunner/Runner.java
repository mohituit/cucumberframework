package testRunner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)                
@CucumberOptions(features=".//Features/Login.feature",glue="stepDefinitions",dryRun=false,plugin={"pretty","html:test-output"},monochrome=true,tags={"@sanity"})
public class Runner {

}

