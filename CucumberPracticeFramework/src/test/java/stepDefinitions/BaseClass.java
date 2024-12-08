package stepDefinitions;

import java.util.Properties;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;

import pageObjects.loginPage;
import pageObjects.searchCustomers;

public class BaseClass {
   public WebDriver driver;
   public loginPage lpPage;
   public searchCustomers searchC;
   public static Logger logger;
   public Properties configProp;
   
   }
