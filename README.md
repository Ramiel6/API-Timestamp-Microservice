# API-Timestamp-Microservice
 **Usage**: https:<i></i>//time-stamp-ramiel.glitch.me/timestamp?time=&lt;Your Time&gt;    
**Your Time:** Can be a unix timestamp (in seconds) or a natural language date.  
**Returns:** { "unix": unix timestamp, "natural": natural language date }

**Example:**
```
https://time-stamp-ramiel.glitch.me/timestamp?time=15 December 2015
https://time-stamp-ramiel.glitch.me/timestamp?time=1450137600
Returns: { "unix": 1450137600, "natural": "15 December 2015" }
```
