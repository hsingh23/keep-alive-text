This is a simple keep alive app that sends predefined texts to a list of numbers at desired freqencies using twilio.

### How to use with docker:  
1. Create keep-alive/config.json - use the example_config.json as a template  
2. `docker build -t  keepalive-texts .`  
3. `docker run -d --name=keepalive-texts keepalive-texts`  


When you change the config you need to do steps 2 and 3. You may need to `docker rm -f keepalive-texts`

### How to use standalone:  
1. Create keep-alive/config.json - use the example_config.json as a template  
2. npm install -g twilio  
3. cd keep-alive; nohup node keepalive.js   
4. exit  

### Additional details:

It sends texts with twilio - you need to have an account and number and token - the free trial should work.

Different numbers can have different frequencies.
