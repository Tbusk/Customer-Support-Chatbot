package edu.ferris.seng355.tbusk.final_project.chatgpt;

import edu.ferris.seng355.tbusk.final_project.automated_customer_support.CustomerSupportPromptService;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

/**
 * This class handles incoming chat requests and processes them using the OpenAI chat model.
 * It uses the CustomerSupportPromptService to generate prompts based on user input.
 * It is designed to provide automated customer support by responding to user questions.
 */
@RestController
@RequestMapping("/api/v1/chat")
@CrossOrigin(origins = "*") // Allow all origins for development purposes. Adjust as needed for production.
public class CustomerSupportController {

    private final OpenAiChatModel chatModel;
    private final CustomerSupportPromptService promptService;

    // Constructor injection for dependencies
    public CustomerSupportController(OpenAiChatModel chatModel, CustomerSupportPromptService promptService) {
        this.chatModel = chatModel;
        this.promptService = promptService;
    }

    /**
     * Endpoint to handle chat requests.
     * <p>
     * Expects a JSON body with a "message" field containing the user's question.
     * <p>
     * Processes the question using the configured openai chat model in application.properties and returns the response.
     *
     * @param message The user's question as a JSON string.
     * @return A map containing the response from the chat model.
     * @throws IOException If there is an error processing the request.
     * Typically, this occurs when the template file paths are invalid or the files cannot be read.
     * <p>
     * Go to application.properties and make sure the instructions template and guidance document are set up correctly.
     *
     */
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> askQuestion(@RequestBody String message) throws IOException {
        Prompt prompt = promptService.buildPrompt(message);
        String response = this.chatModel.call(prompt).getResult().getOutput().getText();

        return Map.of("response", response);
    }
}
