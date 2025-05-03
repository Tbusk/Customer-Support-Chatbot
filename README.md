# Customer Support Chatbot
A ChatGPT-powered customer support assistant that provides automated responses to customer inquiries.

## Overview
This open-source tool creates a customizable AI customer assistant that can be integrated into any website.
It leverages OpenAI's ChatGPT to provide intelligent, context-aware responses to customer questions based on your company's specific information and guidelines.

### Features
- **AI-Powered Responses**: Utilizes ChatGPT to generate human-like, helpful responses.
- **Fully Customizable**: Configure company details, response templates, and models used.
- **Real-Time Chat Interface**: Modern, responsive chat window for customer interaction.
- **Easy Integration**: Simple setup process to add to any website. Configured for desktop and mobile.

### Tech Stack
#### Frontend
- React with TypeScript
- Vite for fast development and building
- TailwindCSS for styling
- Radix UI for easy-to-extend components.

#### Backend
- Spring Boot framework
- Spring AI OpenAI Integration
- Spring Web with REST API endpoints

### Getting Started

#### Prerequisites
- Java 21 + (earlier versions likely are supported)
- Node.js (v16+)
- OpenAPI key

#### Installation
1. Clone the repository.
2. Setup the backend.
  - Open `application.properties` in `src/resources` folder and enter your company name, website, email, and phone number.
  - Open the document `Customer_Support_Instruction_Template.md` and look it over. See if there is any instruction you would like to adjust.
    Your company name, website, email, phone number, and the guidance document from info in `application.properties` will be added to the template upon bulding.
  - Open the document `Customer_Support_Guidance_Document_Template.md` and add any websites you want the assistant to use for reference.  Adjust the response templates as desired.
    Also, add any additional information not otherwise found on the websites or may help speed up the interaction and save tokens.
    Product information, locations, business hours, and whatever else you can think of can be added.
    Also, if any of the queries are coming up as incorrect, add the correct information to the template and adjust as needed.
  - Run the application and be sure to supply your OpenAI key via environment variables `SPRING_AI_OPENAI_API_KEY=your-key`. Easiest way to run is via IDE. 
    You can also provide the key via properties in `application.properties`. It is not recommended as it is easy to leak. See docs https://docs.spring.io/spring-ai/reference/api/chat/openai-chat.html.
3. Setup the frontend.
  - Open `.env` and configure the api url based on need. Also, adjust the rest method used based on need to `POST` or `GET`.
  - run `npm install`.
  - run `npm run dev`

#### Use in Production
There are additional considerations to be weary of before using in any production environment.  
1. To prevent undue OpenAPI costs, add rate limiting.
2. Add tests to verify responses meet your requirements in the backend.
3. Ensure your OpenAI API settings are configured so bad actors won't leave you with a substantial bill.
4. Add obfuscation to the frontend. It is easy to do by adding `javascript-obfuscator` and configuring it in `package.json`.
5. Place the backend behind either a API Gateway to secure it or add something like Spring Security to the backend. 

#### Customer Support Guidance Document Template
This document is the primary source of information for the model to go off of. 
To have the most accurate responses, add necessary information to this document.  
The format of the document is up to you, but the default is markdown.  
Add any additional websites you want the chatbot to use. 
It is not permitted to search the web outside of the specified websites and information in this document. 
You may customize the response templates as needed.  

