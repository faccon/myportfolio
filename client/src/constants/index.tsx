export const CERTIFICATION = "Certifications";
export const RECENT_PROJECT = "Recent project";
export const SKILLS = "Skills";
export const LUWT = "Let's work together";
export const WEB = "WEB";
export const MOBILE = "MOBILE";
export const AUTOMATION = "AUTOMATION";
export const SCENARIO = "SCENARIO";
export const SCENARIO_CONTENT = `
As an Automation engineer in a fruits store, I need to develop a system that will update the catalog information with data provided by our suppliers. The suppliers will send the data as large images with an associated description of the products in two files (.TIF for the image and .txt for the description). However, these images need to be converted to smaller jpeg image sizes and the text needs to be turned into an HTML file that shows the image and the product description. The contents of the HTML file need to be uploaded to a web service that is already running using Django. Additionally, I need to gather the name and weight of all fruits from the .txt files. and use a Python request to upload it to your Django server.
Since this will be a large list, automation would be the best bet! I would probably make typos just like thiss one if I do the renaming and resizing one after the other and moreover, it would be so boring.

I will be writing a python script instead to process all the images and descriptions, as received, and update the catalogs by sending a post request to the company’s API with the description as a payload.

I will also want to generate a PDF of all the foods uploaded, including their weight, and also send a confirmation email of the upload to my boss and me as bcc, you know why right? Always have backup 😉
You will create a Python script that will process the images and descriptions and then update your company's online website to add the new products.

I like automation!

`;
