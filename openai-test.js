const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const endpoint = "https://prft-openai.openai.azure.com/";
const azureApiKey = "591ef217d0814ec4b104d015f4cf386c" ;

const prompt = ["When was Microsoft founded?"];

async function main() {
  console.log("== Get completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "text-davinci-003";
  const result = await client.getCompletions(deploymentId, prompt);

  for (const choice of result.choices) {
    console.log(choice.text);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };