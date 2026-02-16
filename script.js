const feed = document.getElementById("feed");

const livePositions = [4,7,10,14,17];
const channelNames = ["Alexza xxmim","Mira Johans","Sophie L","Emma Stone","Olivia K","Liam M","Noah D","Ava H","Ethan P","Isla F"];
const videoTitles = [
  "Amazing Cricket Highlights",
  "Top 10 Goals",
  "Epic Fails Compilation",
  "Live Match Reaction",
  "Unbelievable Moments",
  "Funny Cricket Moments",
  "Best Sixes",
  "Insane Catches",
  "Match Analysis",
  "Top Plays Today"
];

// 🔥 ২০টা আলাদা thumbnail image placeholders
const thumbs = [
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg",
  "https://i.postimg.cc/FzTcpk2g/dsfsfdgfdgfdg.jpg"
];

for(let i=1;i<=20;i++){
  const card = document.createElement("div");
  card.className = "video-card";

  const thumbWrapper = document.createElement("div");
  thumbWrapper.className = "thumb-wrapper";

  const img = document.createElement("img");
  img.className = "video-thumb";
  img.src = thumbs[i-1]; // প্রতিটা আলাদা thumbnail

  const play = document.createElement("div");
  play.className = "play-btn";

  thumbWrapper.appendChild(img);
  thumbWrapper.appendChild(play);

  if(livePositions.includes(i)){
    const live = document.createElement("div");
    live.className = "live-badge";
    live.innerText = "LIVE";
    thumbWrapper.appendChild(live);
  }

  card.appendChild(thumbWrapper);

  const title = document.createElement("div");
  title.className = "video-title";
  title.innerText = videoTitles[Math.floor(Math.random()*videoTitles.length)];
  card.appendChild(title);

  const chInfo = document.createElement("div");
  chInfo.className = "channel-info";

  const chLeft = document.createElement("div");
  chLeft.className = "channel-left";

  const chLogo = document.createElement("img");
  chLogo.className = "channel-logo";
  chLogo.src = thumbs[i-1]; // logo এর জন্য একই image

  const chName = document.createElement("div");
  chName.className = "channel-name";
  chName.innerText = channelNames[Math.floor(Math.random()*channelNames.length)];

  chLeft.appendChild(chLogo);
  chLeft.appendChild(chName);
  chInfo.appendChild(chLeft);

  const stats = document.createElement("div");
  stats.className = "video-stats";
  const randomViews = Math.floor(Math.random()*900)+100;
  const randomHours = Math.floor(Math.random()*24)+1;
  stats.innerText = `${randomViews}K views • ${randomHours} hours ago`;
  chInfo.appendChild(stats);

  card.appendChild(chInfo);

  feed.appendChild(card);
}
