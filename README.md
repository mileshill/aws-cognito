# AWS Cognito Login-Signup-Call Authorized WebApiGateway

Basic implementation utilizing AWS Cloudformation to build the infrastructure required to construct
 1. Web Api Gateway linked to Lambda
 2. Lambda returning "hello from authorized user" message
 3. Cognito User Pool with automatic email verification
 
User interface consists of
 1. Landing page
 2. Signup
 3. Login
 4. Home (calls api gateway as authorized user)

# Deployment
**Must have aws profile setup**
Ensure config and credentials have been created

```shell
/home/$USER/.aws/config
/home/$USER/.aws/credentials
```


## Infrastructure
`$ cd serverless && sls deploy`
Once infrastructure has been deployed, everything in `cognito-ui/config.js` will require updating
except `REGION`.


## UI
`yarn start` or `npm install && npm run`
