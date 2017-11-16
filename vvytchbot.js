//define dependencies
const twit = require('twit');
const emoji = require('node-emoji');

const config = {
	consumer_key: process.env.consumer_key,
	consumer_secret: process.env.consumer_secret,
	access_token: process.env.access_token,
	access_token_secret: process.env.access_token_secret
}
const Twitter = new twit(config);


var emoji_list = ['new_moon', 'waxing_crescent_moon', 'first_quarter_moon', 'waxing_gibbous_moon', 'full_moon', 'waning_gibbous_moon', 'third_quarter_moon', 'old_key', 'coffin', 'spider', 'bee', 'rose', 'hearts', 'diamonds', 'spades', 'clubs', 'rainbow', 'cherry_blossom', 'mushroom', 'apple', 'tea', 'ear_of_rice', 'scales', 'knife', 'wine_glass', 'spider_web', 'japanese_ogre', 'skull'];

function composeTweet(){
	var tweetLength = Math.floor(Math.random() * 20) + 1;
	var tweetText = '';
	console.log(tweetLength);
	for(var i=0; i < tweetLength; i++) {
		tweetText += ':' + getEmoji() + ': ';
	}
	return emoji.emojify(tweetText);
}

function getEmoji() {
	var emojiIndex = Math.floor(Math.random() * (emoji_list.length - 1))
	console.log(emoji_list[emojiIndex]);
	return emoji_list[emojiIndex];
}

let tweet = function() {
	var thisTweet = composeTweet();
	Twitter.post('statuses/update', {status: thisTweet }, function(err, data) {
	if (err) {console.log(err)}
	console.log(data);
	})
};

tweet();
setInterval(tweet, 6000000);
