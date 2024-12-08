package stepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import pageObjects.loginPage;

public class loginSteps extends BaseClass{
	
	//public WebDriver driver;
	//public loginPage loginpage;
	@Before
	public void Setup() throws IOException
	{
		configProp = new Properties();
		FileInputStream fileInput = new FileInputStream("config.properties");
		configProp.load(fileInput);
		logger = Logger.getLogger("CucemberFramework Demo");
		PropertyConfigurator.configure("log4j.properties");
		logger.setLevel(Level.DEBUG);
		String br = configProp.getProperty("browser");
		if (br.equals("Chrome"))
		{
			logger.info("****** Launching the chrome browser ****************");
			System.setProperty("webdriver.chrome.driver",configProp.getProperty("chromeDriverPath"));		
			driver = new ChromeDriver();
			
		}
		else if(br.equals("Firefox"))
		{
			logger.info("****** Launching the FireFox browser ****************");
			System.setProperty("webdriver.gecko.driver",configProp.getProperty("firefoxDriverPath"));		
			driver = new FirefoxDriver();
		}
		else if(br.equals("IE"))
		{
			logger.info("****** Launching the Internet Explorer browser ****************");
			System.setProperty("webdriver.ie.driver",configProp.getProperty("ieDriverPath"));		
			driver = new ChromeDriver();
		}
		
	}
	
	@Given("^User launches the Google Chrome browser\\.$")
	public void user_launches_the_Google_Chrome_browser() throws Throwable {
		logger.info("****** Launching the browser ****************");
	    // Write code here that turns the phrase above into concrete actions
		lpPage = new loginPage(driver);
	 
	}

	@When("^User opens the URL \"([^\"]*)\"$")
	public void user_opens_the_URL(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		logger.info("****** Opening the URL ****************");
		driver.get(url);
		driver.manage().window().maximize();
	
	}

	@When("^User enters Email as \"([^\"]*)\" and Password is \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_is(String email, String pass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		logger.info("****** Users enters the email and password ****************");
		lpPage.enterEmail(email);
		lpPage.enterPassword(pass);
	  
	}

	@When("^User clicks on Login button\\.$")
	public void user_clicks_on_Login_button() throws Throwable {
		logger.info("****** Clicks on the login buton ****************");
	    // Write code here that turns the phrase above into concrete actions
		lpPage.clickLogin();
	    Thread.sleep(5000);
	}

	@Then("^Page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String title) throws Throwable {
		logger.info("****** Getting the titile of the page ****************");
	    // Write code here that turns the phrase above into concrete actions
	    if (driver.getPageSource().contains("Login was unsuccessful")){
	       driver.close();
	       Assert.assertTrue(false);
	    }
	       else{
	    	   
	    	   Assert.assertEquals(title,driver.getTitle());
	       }
	}

	@When("^User clicks on the Logout button$")
	public void user_clicks_on_the_Logout_button() throws Throwable {
		logger.info("****** Click on the logout button ****************");
	    // Write code here that turns the phrase above into concrete actions
	   lpPage.clickLogOut();
	   Thread.sleep(3000);
	}

	@Then("^Close the Browser\\.$")
	public void close_the_Browser() throws Throwable {
		logger.info("****** Close the URL ****************");
	    // Write code here that turns the phrase above into concrete actions
	    driver.quit();
	}

	
	// searching the customers in the application
	
	@Then("^user can view the Dashboard page\\.$")
	public void user_can_view_the_Dashboard_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("Inside the click to Dasboard page");
	}

	@When("^user clicks on the Customers menu$")
	public void user_clicks_on_the_Customers_menu() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Click on the customer menu");
	}

	@When("^user click on the customer sub menu\\.$")
	public void user_click_on_the_customer_sub_menu() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Click on the customer submenu menu");
	}

	@When("^user enter the customer Email\\.$")
	public void user_enter_the_customer_Email() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Enter the email of the customer for search");
	}

	@When("^user clicks on the Search button$")
	public void user_clicks_on_the_Search_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Click on the search button");
	    
	}

	@Then("^user should found the email in the search table$")
	public void user_should_found_the_email_in_the_search_table() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("get the data in the search result tree");
	}

	@When("^user enter the customer name\\.$")
	public void user_enter_the_customer_name() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("You enter the customer Name");
	}

}
