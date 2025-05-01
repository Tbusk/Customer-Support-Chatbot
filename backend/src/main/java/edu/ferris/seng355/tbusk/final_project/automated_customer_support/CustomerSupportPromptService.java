package edu.ferris.seng355.tbusk.final_project.automated_customer_support;

import org.springframework.ai.chat.messages.SystemMessage;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * Service for building prompts for customer support interactions.
 * This service reads configuration properties and builds prompts
 * based on user questions and predefined templates.
 */
@Service
public class CustomerSupportPromptService {

    // Configuration properties from application.properties
    @Value("${agent.customer-support.instructions.file-path}")
    private String instructionFilePath;

    @Value("${agent.customer-support.guidance-document.file-path}")
    private String guidanceDocumentFilePath;

    @Value("${agent.customer-support.company-name}")
    private String companyName;

    @Value("${agent.customer-support.company-website}")
    private String companyWebsite;

    @Value("${agent.customer-support.support-email}")
    private String companySupportEmail;

    @Value("${agent.customer-support.support-phone}")
    private String companySupportPhone;

    @Value("${agent.customer-support.output-format}")
    private String responseFormat;

    /**
     * Builds a prompt for customer support based on the user's question.
     *
     * @param userQuestion The question asked by the user.
     * @return A Prompt object containing the system instructions and user message.
     * @throws IOException If there is an error reading the instruction or guidance document files.
     */
    public Prompt buildPrompt(String userQuestion) throws IOException {
        return new Prompt(buildCustomerSupportInstructions(), new UserMessage(userQuestion));
    }

    /**
     * Builds the system message containing customer support instructions.
     *
     * @return A SystemMessage object with the formatted instructions.
     * @throws IOException If there is an error reading the instruction or guidance document files.
     */
    public SystemMessage buildCustomerSupportInstructions() throws IOException {
        String instructions = buildSupportTemplate();

        return new SystemMessage(instructions);
    }

    /**
     * Builds the support template by replacing placeholders with actual values.
     *
     * @return A string containing the built support template.
     * @throws IOException If there is an error reading the instruction or guidance document files.
     */
    public String buildSupportTemplate() throws IOException {
        return getSystemInstructionText()
                    .replaceAll("\\{guidanceDocument}", getGuidanceDocumentText())
                    .replaceAll("\\{responseFormat}", responseFormat)
                    .replaceAll("\\{companyName}", companyName)
                    .replaceAll("\\{companyWebsite}", companyWebsite)
                    .replaceAll("\\{companySupportEmail}", companySupportEmail)
                    .replaceAll("\\{companySupportPhone}", companySupportPhone);
    }

    /**
     * Reads the system instruction text from the specified file.
     *
     * @return The content of the instruction file as a string.
     * @throws IOException If there is an error reading the file.
     */
    public String getSystemInstructionText() throws IOException {
        return Files.readString(Path.of(instructionFilePath));
    }

    /**
     * Reads the guidance document text from the specified file.
     *
     * @return The content of the guidance document file as a string.
     * @throws IOException If there is an error reading the file.
     */
    public String getGuidanceDocumentText() throws IOException {
        return Files.readString(Path.of(guidanceDocumentFilePath));
    }
}
