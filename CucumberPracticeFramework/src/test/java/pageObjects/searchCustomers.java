package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import Utilites.WaitHelper;

public class searchCustomers {
	
	public WebDriver driver;
    public WaitHelper wait;
    
    public searchCustomers(WebDriver driver)
    {
    	this.driver = driver;
    	PageFactory.initElements(driver,this);
    	wait = new WaitHelper(driver);
    }
    
    @FindBy(how=How.ID,using = "SearchEmail")
    @CacheLookup
    WebElement email;
    
    @FindBy(how=How.ID,using = "SearchFirstName")
    @CacheLookup
    WebElement firstName;
    
    @FindBy(how=How.ID,using = "SearchLastName")
    @CacheLookup
    WebElement lastName;
    
    @FindBy(how=How.ID,using = "SearchMonthOfBirth")
    @CacheLookup
    WebElement monthOfBirth;
    
    @FindBy(how=How.ID,using = "SearchDayOfBirth")
    @CacheLookup
    WebElement dayOfBirth;
    
    @FindBy(how=How.ID,using = "SearchCompany")
    @CacheLookup
    WebElement companyName;
    
    @FindBy(how=How.ID,using = "SearchIpAddress")
    @CacheLookup
    WebElement ipAddress;
    
    @FindBy(how=How.XPATH,using ="//div[@class='k-multiselect-wrap k-floatwrap']")
    @CacheLookup
    WebElement customerRoles;
    
    @FindBy(how=How.XPATH,using ="//li[contains(text(),'Administrators')]")
    @CacheLookup
    WebElement administrators;
    
    @FindBy(how=How.XPATH,using ="//li[contains(text(),'Forum Moderators')]")
    @CacheLookup
    WebElement forumModerators;
    
    @FindBy(how=How.XPATH,using ="//div[@class='Guests']")
    @CacheLookup
    WebElement guests;
    
    @FindBy(how=How.XPATH,using ="//div[@class='Vendeors']")
    @CacheLookup
    WebElement venderos;
    
    @FindBy(how=How.ID,using ="search-customers")
    @CacheLookup
    WebElement btnSearchCustomers;
    
    @FindBy(how = How.XPATH,using="//*[@id='customers-grid']/tbody/tr[1]/td[2]")
    @CacheLookup
    WebElement tableData;
    
    public void setEmail(String emailAdd)
    {
    	//wait.waitForElement(email,30);
    	email.clear();
    	email.sendKeys(emailAdd);
    	
    }
    
    public void searchClick()
    {
    	
    	btnSearchCustomers.click();
    	wait.waitForElement(btnSearchCustomers, 30);
    }
    
    public boolean getTableData()
    {
    	boolean status = tableData.isDisplayed();
    	return status;
    }
    
}
