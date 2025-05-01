package edu.ferris.seng355.tbusk.final_project;

import edu.ferris.seng355.tbusk.final_project.chatgpt.CustomerSupportController;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * This test checks that the application is set up correctly and can respond to a question.
 * It does not check the accuracy of the response, just that the system is operational.
 * If this passes, it indicates the templates have been found and an API key is configured correctly.
 */
@SpringBootTest
public class AppSetupCorrectlyTests {

    @Autowired
    private CustomerSupportController customerSupportController;

    @Test
    @DisplayName("Test that the application is set up correctly and can respond to a question")
    void testAppIsSetupCorrectly() throws IOException {
        Map<String, String> response = customerSupportController.askQuestion("question");
        assertNotNull(response);
        assertNotNull(response.get("response"));
    }
}
