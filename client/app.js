var web2images = require('webrtc2images')
var record = document.getElementById('record');

const rtc = new web2images({
	width: 250,
	height: 230,
	frames: 10,
	type: 'image/jpeg',
	quality: 0.4,
	interval: 200
})

rtc.startVideo(function(err){
	if(err){
		return logError(err)
	}
})



record.addEventListener('click', function(e){
	e.preventDefault();

	rtc.recordVideo(function(err, frames){
		if(err){
			return logError(err)
		}	
		console.log(frames)
	});
});


function logError(err){
	console.error(err);
}