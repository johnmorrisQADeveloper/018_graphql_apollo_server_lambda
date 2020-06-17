S3Bucket=john-lambda-deploy


echo "create a AWS S3 Bucket"
aws s3 --region eu-west-2 mb s3://$S3Bucket

zip -rq dist-latest.zip backend package.json 
zipinfo dist-latest.zip

aws s3 cp dist-latest.zip s3://$S3Bucket/dist-latest.zip

aws s3 ls s3://$S3Bucket

aws cloudformation deploy \
  --template-file ./cloudformation.yml \
  --stack-name apollo-server-lambda-nodejs \
  --region eu-west-2 \
  --parameter-overrides BucketName=$S3Bucket Version=latest \
  --capabilities CAPABILITY_IAM

aws cloudformation describe-stacks \
--stack-name=apollo-server-lambda-nodejs \
--region eu-west-2 \
--query "Stacks[0].Outputs[?OutputKey=='ApiUrl'].OutputValue" \
--output text

curl -d '{}' https://fzmx17r87f.execute-api.eu-west-2.amazonaws.com/v1/graphql