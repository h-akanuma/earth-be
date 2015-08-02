function gotoTop() {
	window.location.href="index.html";
}

var topUrl = "http://www.earth-be.com/";
var title = "DANCE TROUPE Earth-Be official website*";
function addBookmark() {
	if (window.sidebar) {
		window.sidebar.addPanel(title, topUrl,"");
	} else if( document.all ) {
		window.external.addFavorite( topUrl, title);
	} else if( window.opera && window.print ) {
		return true;
	}
}

function outputGlobalNavi() {
	var homeClass = '';
	var stageClass = '';
	var aboutClass = '';
	var instructorClass = '';
	var galleryClass = '';
	var tweetsClass = '';
	var linksClass = '';
	var subTitleImgTag = '';
	
	var path = location.pathname;
	if(path.indexOf('stage.html') != -1) {
		stageClass = 'active';
		subTitleImgTag = '<img src="images/earth-be_logo_stage.gif" />';
	} else if (path.indexOf('about.html') != -1) {
		aboutClass = 'active';
	} else if (path.indexOf('instructor.html') != -1) {
		instructorClass = 'active';
	} else if (path.indexOf('gallery') != -1) {
		galleryClass = 'active';
	} else if (path.indexOf('tweets') != -1) {
		tweetsClass = 'active';
	} else if (path.indexOf('links.html') != -1) {
		linksClass = 'active';
	} else {
		homeClass = 'active';
	}
	
	document.write('<a href="index.html"><img id="headerLogo" src="images/earth-be_logo.gif" /></a>');
	// document.write(subTitleImgTag);
	document.write('<span id="headerAd"><a href="http://ameblo.jp/earth-be1996/">稽古日誌（アメブロ）</a> ＆<br /><a href="http://www.facebook.com/pages/DANCE-TROUPE-Earth-Be/212201995459752">Facebookページ</a> も公開中!!</span>');
	if(isTop) {
		document.write('<div><a href="stage.html"><img id="topBanner" src="images/ad/time_of_memory_page1_head_w900.jpg" /></a></div>');
		document.write('<iframe width="900" height="506" src="//www.youtube.com/embed/UZoxxZge8l8?showinfo=0" frameborder="0" allowfullscreen></iframe>')
		document.write('<div><img id="topBanner" src="images/ad/time_of_memory_page2_head_w900.jpg" /></div>');
	}
	document.write('<ul class="menu">');
	document.write('  <li title="トップページへ"><a href="index.html" class="' + homeClass + '"><span>トップ</span></a></li>');
	document.write('  <li title="舞台情報"><a href="stage.html" class="' + stageClass + '"><span>舞台情報</span></a></li>');
	document.write('  <li title="Earth-Beとは"><a href="about.html" class="' + aboutClass + '"><span>Earth-Beとは</span></a></li>');
	document.write('  <li title="講師紹介"><a href="instructor.html" class="' + instructorClass + '"><span>講師紹介</span></a></li>');
	document.write('  <li title="ギャラリー"><a href="gallery.html" class="' + galleryClass + '"><span>ギャラリー</span></a></li>');
	document.write('  <li title="つぶやき"><a href="tweets.html" class="' + tweetsClass + '"><span>つぶやき</span></a></li>');
	document.write('  <li title="リンク集"><a href="links.html" class="' + linksClass + '"><span>リンク集</span></a></li>');
	document.write('  <li title="稽古日誌（アメブロ）"><a href="http://ameblo.jp/earth-be1996/" target="_blank"><span>稽古日誌</span></a></li>');
	document.write('  <li title="Facebookページ"><a href="http://www.facebook.com/pages/DANCE-TROUPE-Earth-Be/212201995459752" target="_blank"><span>Facebookページ</span></a></li>');
	document.write('</ul>');
}

