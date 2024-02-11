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
8. Click on the "i" icon at the top right corner of the Helix chat window to display information about your session.  Copy the id value at the very top of the page.
   - Example id: 809b87ba-50f2-c671-da93-809b87ba2315
10. Create a new CloudFlare Worker  
11. Edit Settings -> Variables  
12. Create a variable called, " and paste the Helix API key into this field, checking "Encrypt" before saving the value.  
13. Edit the Worker code in the web editor and copy the example code into this Worker.  
14. Save and Deploy.  
