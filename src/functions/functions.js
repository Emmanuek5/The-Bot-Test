const ytdl = require("ytdl-core");

function sleep(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve();
        }, params);
    });
}


function rand(min,max) {
   //create a random number between min and max and convert it to a string
    let random = Math.floor(Math.random() * (max - min + 1) + min).toString();
    //return the random number
    return random;
        
    
    
}

function mute(client, id, guild, channel, username, message) {
  
  
}
  




function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  } else {
    next();
  }
}


async function getYoutubeDownloadLink(url) {
   ytdl.getInfo(videoUrl, (err, info) => {
     if (err) throw err;

     console.log("Video Title:", info.title);
     console.log("Video Description:", info.description);
     console.log("Video Duration:", info.length_seconds, "seconds");
   });
  
}



module.exports = {
    sleep,
    rand,
    checkAuthenticated,
    checkNotAuthenticated,
    getYoutubeDownloadLink
}