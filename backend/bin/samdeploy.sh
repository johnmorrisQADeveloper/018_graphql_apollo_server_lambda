S3Bucket=graphqljjm-dev
aws s3 --region eu-west-2 rm s3://$S3Bucket --recursive 
aws s3 --region eu-west-2 rb s3://$S3Bucket 
aws s3 --region eu-west-2 mb s3://$S3Bucket 

sam package --template-file template.yaml --output-template-file pck.yml --s3-bucket $S3Bucket 

sam deploy --region eu-west-2 --capabilities CAPABILITY_NAMED_IAM --template-file pck.yml --stack-name $S3Bucket
