S3Bucket=john-lambda-deploy


echo "create a AWS S3 Bucket"
aws s3 --region eu-west-2 mb s3://$S3Bucket

zip -rq dist-latest.zip src package.json 
zipinfo dist-latest.zip

aws s3 cp dist-latest.zip s3://$S3Bucket/dist-latest.zip

aws s3 ls s3://$S3Bucket

aws cloudformation deploy \
  --template-file ./cloudformation.yml \
  --stack-name apollo-server-lambda-nodejs \
  --region eu-west-2 \
  --parameter-overrides BucketName=$S3Bucket Version=latest \
  --capabilities CAPABILITY_IAM