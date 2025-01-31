package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class loginPage {

	public WebDriver Iwebdriver;
	
	public loginPage(WebDriver webdriver)
	{
		Iwebdriver = webdriver;
		PageFactory.initElements(webdriver,this);
	}
	
	@FindBy(id="Email")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(id="Password")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(xpath = "//input[@value='Log in']")
	@CacheLookup
	WebElement btnLogin;
	
	@FindBy(linkText = "Logout")
	@CacheLookup
	WebElement btnLogout;
	
	public void enterEmail(String Text)
	{
		txtEmail.clear();
		txtEmail.sendKeys(Text);
	}
	
	
	public void enterPassword(String passWord)
	{
		txtPassword.clear();
		txtPassword.sendKeys(passWord);
	}
	
	public void clickLogin()
	{
		btnLogin.click();
	}
	
	public void clickLogOut()
	{
		btnLogout.click();
	}
}
