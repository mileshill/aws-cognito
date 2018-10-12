# aws-cognito
AWS Cognito Login
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


## Move into `serverless` directory
`sls deploy`

## Move into project directory
`yarn start` or `npm run`
