export default {
  async fetch(request, env) {
    let helixPrompt = 'What did you learn from the fine-tuning data?';
    const auth = 'Bearer ' + env.helixauth;
    const sessionID = 'YourSessionIDHere';
    const helixURL = 'https://app.tryhelix.ai/api/v1/sessions/chat';

    let helixHeaders = {
      method: "POST",
      headers: {
        "Authorization": auth,
        "Accept": "application/json",
      },
      body: JSON.stringify({
        "model": "mistralai/Mistral-7B-Instruct-v0.1",
        "stream": false,
        "session_id": sessionID,
        "messages": [
            {
                "role": "user",
                "content": {
                    "content_type": "text",
                    "parts": [helixPrompt]
                }            
            }
        ]
      }),
    };

    let helixResponse = await fetch(helixURL,helixHeaders);
    let helixBody = await helixResponse.body;
    return new Response(helixBody, {status: 200});
  },
};
