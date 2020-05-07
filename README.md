## 1: API Base URL

Add https://asia-east2-socialapp-32fb9.cloudfunctions.net/api as the 'proxy' value in package.json

## 2: Install packages

run `npm install` to get all the latest package. npm install must the run in both front end and functions(backend) folder to get all necessary packages

## 3: Run project

run `npm start` to test the front end

## 4: Open it

go to [http://localhost:3000](http://localhost:3000)

## 5: Test API

cd to functions folder
run `firebase serve` to test the endpoint url
some functions are require to be deployed defore testing. Use the API base above to test.

Note: The `firebase serve` cli will notify what functions require to use API Base Url

## 6: Demo App on AWS S3 and Amplify

http://socialapp-demoapp.s3-website-ap-southeast-1.amazonaws.com

with SSL Certificate: 
