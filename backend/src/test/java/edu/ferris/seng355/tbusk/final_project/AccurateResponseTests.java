package edu.ferris.seng355.tbusk.final_project;

import edu.ferris.seng355.tbusk.final_project.chatgpt.CustomerSupportController;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Tests to ensure that the customer support agent responds accurately to queries
 * about the company's contact information and website.
 */
@SpringBootTest
public class AccurateResponseTests {

    @Autowired
    private CustomerSupportController customerSupportController;

    @Value("${agent.customer-support.company-website}")
    private String companyWebsite;

    @Value("${agent.customer-support.company-name}")
    private String companyName;

    @Value("${agent.customer-support.support-email}")
    private String companySupportEmail;

    @Value("${agent.customer-support.support-phone}")
    private String companySupportPhone;

    @Test
    @DisplayName("Test that the agent responds correctly to the configured company website query.")
    void testProvidesCompanyWebsite() throws IOException {
        assertTrue(customerSupportController.askQuestion("What is the company website?").get("response").contains(companyWebsite));
    }

    @Test
    @DisplayName("Test that the agent responds correctly to the configured support phone number query.")
    void testProvidesSupportPhoneNumber() throws IOException {
        assertTrue(customerSupportController.askQuestion("What is the support phone number?").get("response").contains(companySupportPhone));
    }

    @Test
    @DisplayName("Test that the agent responds correctly to the configured support email query.")
    void testProvidesSupportEmail() throws IOException {
        assertTrue(customerSupportController.askQuestion("What is the support email?").get("response").contains(companySupportEmail));
    }

    @Test
    @DisplayName("Test that the agent responds correctly to the configured company name query.")
    void testProvidesCompanyName() throws IOException {
        assertTrue(customerSupportController.askQuestion("What is the company name?").get("response").contains(companyName));
    }

}
