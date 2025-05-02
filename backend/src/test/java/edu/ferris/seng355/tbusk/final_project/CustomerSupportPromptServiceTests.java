package edu.ferris.seng355.tbusk.final_project;

import edu.ferris.seng355.tbusk.final_project.automated_customer_support.CustomerSupportPromptService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.junit.jupiter.api.Assertions.*;

/**
 * This test class verifies the functionality of the CustomerSupportPromptService.
 * It checks that the service can retrieve guidance document text, system instruction text,
 * and build customer support instructions and prompts without exceptions.
 */
@SpringBootTest
public class CustomerSupportPromptServiceTests {

    @Autowired
    private CustomerSupportPromptService customerSupportPromptService;

    @Value("${agent.customer-support.instructions.file-path}")
    private String instructionsTemplateFilePath;

    @Value("${agent.customer-support.guidance-document.file-path}")
    private String guidanceDocumentFilePath;

    /**
     * Tests that the guidance document text can be retrieved without exceptions.
     * It checks that the text is not null and matches the expected content from the file.
     */
    @Test
    @DisplayName("Test that the guidance document text can be retrieved without exceptions")
    public void testGetGuidanceDocumentText() throws IOException {
        assertDoesNotThrow(() -> customerSupportPromptService.getGuidanceDocumentText());
        String systemInstructionText = customerSupportPromptService.getGuidanceDocumentText();
        assertNotNull(systemInstructionText);

        String expectedText = Files.readString(Path.of(guidanceDocumentFilePath));
        assertEquals(expectedText, systemInstructionText);
    }

    /**
     * Tests that the system instruction text can be retrieved without exceptions.
     * It checks that the text is not null and matches the expected content from the file.
     */
    @Test
    @DisplayName("Test that the system instruction text can be retrieved without exceptions")
    public void testGetSystemInstructionText() throws IOException {
        assertDoesNotThrow(() -> customerSupportPromptService.getSystemInstructionText());
        String systemInstructionText = customerSupportPromptService.getSystemInstructionText();
        assertNotNull(systemInstructionText);

        String expectedText = Files.readString(Path.of(instructionsTemplateFilePath));
        assertEquals(expectedText, systemInstructionText);
    }

    /**
     * Tests that the customer support instructions template is built correctly.
     * It checks that the template does not contain placeholders and is not null.
     */
    @Test
    @DisplayName("Test that the customer support instructions template is built correctly")
    public void testTemplateBuiltCorrectly() throws IOException {

        assertDoesNotThrow(() -> customerSupportPromptService.buildCustomerSupportInstructions());

        String builtInstructions = customerSupportPromptService.buildCustomerSupportInstructions().getText();
        assertNotNull(builtInstructions);

        assertFalse(builtInstructions.contains("{companyName}"));
        assertFalse(builtInstructions.contains("{companyWebsite}"));
        assertFalse(builtInstructions.contains("{companySupportEmail}"));
        assertFalse(builtInstructions.contains("{companySupportPhone}"));
        assertFalse(builtInstructions.contains("{guidanceDocument}"));
    }

    /**
     * Tests that the customer support instructions can be built without exceptions and is not null.
     * It also checks that the instructions contain the expected system message (instructions).
     */
    @Test
    @DisplayName("Test that the support instructions can be built without exceptions and is not null")
    public void testBuildCustomerSupportInstructions() throws IOException {
        assertDoesNotThrow(() -> customerSupportPromptService.buildCustomerSupportInstructions());

        SystemMessage instructions = customerSupportPromptService.buildCustomerSupportInstructions();
        assertNotNull(instructions);

        SystemMessage expectedInstructions = new SystemMessage(customerSupportPromptService.buildSupportTemplate());
        assertEquals(expectedInstructions, instructions);
    }

    /**
     * Tests that the prompt can be built without exceptions and is not null.
     * It also checks that the prompt contains the expected system message and user message.
     */
    @Test
    @DisplayName("Test that the prompt can be built without exceptions and is not null")
    public void testBuildPrompt() throws IOException {
        String userQuestion = "What is the return policy?";

        assertDoesNotThrow(() -> customerSupportPromptService.buildPrompt(userQuestion));

        Prompt prompt = customerSupportPromptService.buildPrompt(userQuestion);
        assertNotNull(prompt);
        Prompt expectedPrompt = new Prompt(new SystemMessage(customerSupportPromptService.buildSupportTemplate()), new UserMessage(userQuestion));
        assertEquals(expectedPrompt, prompt);
    }


}
