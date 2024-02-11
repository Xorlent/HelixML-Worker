# HelixML-Worker
Helix.ml / tryhelix.ai CloudFlare Worker Starter Code  
### What is this?
This CloudFlare Worker example allows you to access, via API, a fine-tuned Mistral7B model that was created using Helix's guided training platform.  Helix makes fine-tuning simple and easy even for folks with no ML background or previous knowledge.  
### How is this different than other GPT chat tools?  
Helix allows you to simply and easily integrate your own training data into a model.  This can be very powerful for creating ML solutions that run on specific, even proprietary data that online models don't (and should not) have access to.  
### How do I use this?
1. Create a free CloudFlare account if you do not already have one [CloudFlare](https://cloudflare.com)  
2. Create a Helix account at [tryhelix.ai](https://tryhelix.ai)  
3. In the Helix console, ensure "TEXT" is selected and flick the top slider to "Fine tune."
4. Here you can feed Helix a publicly-accessible web URL or plaintext or a PDF document for training.
   - Please ensure the data you submit is not covered under a confidentiality or non-disclosure agreement!
   - If you have questions or concerns, I recommend reaching out to the Helix.ml team for further guidance.
   - (Note: I'm not a lawyer, so seek council before deciding to process sensitive data)
6. At this stage it's helpful to understand a little about training a model so you can dial in your training data by selecting, "Manually review training data before fine-tuning."
   - Helpful reading: [Guide to Fine-Tuning Open Source LLM Models on Custom Data](https://stackabuse.com/guide-to-fine-tuning-open-source-llms-on-custom-data/)  
7. Once fine-tuning is complete, you can ask the model a few questions to see if you get the expected output.
   - It's likely you will need to go through the fine-tuning process a few times to get everything working satisfactorily for your specific use case.
8. Click on the "i" icon at the top right corner of the Helix chat window to display information about your session.  
10. Keeping the Helix tab open, log into CloudFlare and create a new CloudFlare Worker.  
11. Open the code editor and paste the example code in this repo, replacing everything in the editor window.  
12. Click back to the Helix tab and copy the id value at the very top of the page:  
   - Example id: 809b87ba-50f2-c671-da93-809b87ba2315
13. Paste the id value into the CloudFlare Worker code in place of the text "YourSessionIDHere"  
14. Click Save and Deploy and exit the code editor.  
14. Edit Settings -> Variables  
15. In the Helix tab, select My Account from the user menu at the bottom left of the window.  Copy the Helix API Key.  
16. Create a Worker environment variable called, "helixauth" and paste the Helix API key into this field, checking "Encrypt" before saving the value.  
17. Open the Worker code editor again and hit "Send" to ensure you receive a response indicating the model will only use training data for responses.
18. Now, explore, extend, invent!  
