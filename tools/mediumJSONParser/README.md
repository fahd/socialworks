# Medium NodeJS Lambda Function
Lambda function built on NodeJS for use with parsing user's latests posts with a custom AWS API gateway and returning a JSON object.


## Introduction
Medium doesn't currently offer a way to retrieve a user's posts via an API call, so implementing functionality using a user's RSS / JSON feed is a great alternative for basic tasks. You can find your feed by going to https://medium.com/@username/latest?format=json

This repository is the working project for offering a simple solution to retrieve the user's latest post using Amazon Lambda with NodeJS connected by an Amazon API Gateway. This repository is all you need Google Cloud Functions.

You will find that Medium doesn't allow cross origin from an ajax call to this feed. In order to make it work, you would need to handle this from the server side.

https://cloud.google.com/nodejs/docs/setup

## Install into Lambda
To install, download this repository and include index.js and node_modules.
You may need to run the fullowing from the root of the folder:
```npm install```

Need to have gcloud installed
```gsutil mb -p socialworks-medium gs://socialworks-bucket```
Running gcloud updates on file changes
```gcloud beta functions deploy parseMedium --stage-bucket socialworks-bucket --trigger-topic parseMedium```





Once downloaded, make sure to update the variable username with your Medium username. Then, zip up the parent folder and login to your AWS account and go to Lambda.

In Lambda, select "Create a Lambda function" button. Select "Blank Function" under blueprint. The next section is configure triggers, just hit "next". Give your function a name. I usually give it the same name as the zip / folder name. Leave runtime as Node.js 4.3 and under Code Entry Type, select "upload a .ZIP file" and select your Function package. Make sure to specify your function role. I usually use "Choose an Existing Role" and select "lambda_basic_execution". After that, click next to finish setup.

## Testing the function
You can then run "Test" and if everything was setup correctly, it should return your formatted JSON object that can be retrieved using the API gateway and then returned to your Web app or AJAX call.
