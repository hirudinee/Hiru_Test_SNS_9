let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-2.amazonaws.com/480964559519/hiru_test',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			console.log("success",message);
		})
	}, function (error) {
		console.log("error ", error);
	});

	callback(null, 'Successfully executed');
}