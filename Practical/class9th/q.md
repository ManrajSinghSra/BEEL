Limitations of GET Method

1. 🔐 Security
Query parameters are visible in the URL, like:
 
http://example.com/login?username=manraj&password=1234

✅ Anyone can see them in:
Browser history
Server logs
Network sniffers (if not using HTTPS)

❌ Not safe for sending sensitive information (e.g., passwords, tokens)

2. 📦 Limited Data Size
Browsers and servers typically limit URLs to around 2048 characters (varies by browser).
This restricts the amount of data you can send via GET.
✅ Use POST for large payloads like forms, files, or JSON.


3. 🧠 No Request Body
GET cannot have a request body.
You're limited to using URL parameters (e.g., /api?name=manraj).


4. 📁 Caching Issues
GET responses are often cached by browsers and proxies.

If data should always be fresh, GET may not be ideal unless caching is explicitly controlled.

5. 🧼 Not Suitable for Sensitive Operations
GET is intended for retrieving data, not modifying it.

Making state-changing operations (like deleting or creating resources) via GET is a bad practice (violates REST principles).



action contain the path of url which will be handled by server,
we write the end point that handle the form data


      
        x-www-form-urlencoded = normal data

        2nd multipart if larger data


how to save data in json file


req is an object=  header method body url



how to handle the data from post method 
ans post must be in capital