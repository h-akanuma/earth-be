  function loadTweets(keyword, elementId){
    callback = "";
    if (elementId == 'tweets_left') {
        callback = "displayLeftTweets";
    } else {
        callback = "displayRightTweets";
    }

    twitterUrl = 'http://search.twitter.com/search.json?callback=' + callback + '&q=' + keyword;

    var sc = document.createElement("script");
    sc.setAttribute("type","text/javascript");
    sc.setAttribute("src", encodeURI(twitterUrl).replace('#', '%23'));
    document.getElementsByTagName("body").item(0).appendChild(sc);

  }
  function displayLeftTweets(data){
    document.getElementById('tweets_left').innerHTML = parseJSON(data);
  }
  function displayRightTweets(data){
    document.getElementById('tweets_right').innerHTML = parseJSON(data);
  }

  // JSONのデータを解析して表示
  function parseJSON(jsData){
    var data = jsData;
    var resultData = "";
    for(var i = 0; i < data.results.length; i++) {
      var tweet = data.results[i];
      resultData = resultData + "<div><a id='user_link' href='http://twitter.com/" + tweet.from_user + "'>"
          + "<img class='user_icon' src='" + tweet.profile_image_url + "' /></a>" 
          + "<a class='user_link' href='http://twitter.com/" + tweet.from_user + "'><strong>" + tweet.from_user + "</strong></a>" 
          + "&nbsp;" + tweet.text + "<br/>" 
          + "<span class='timestamp'>" + parseTimestamp(tweet.created_at) + "</span></div>"
          + "<hr class='tweet_border'>";
      parseTimestamp(tweet.created_at);
    }
    return resultData;
  }
  
  var weekdays = {
    'Sun' : '0',
    'Mon' : '1',
    'Tue' : '2',
    'Wed' : '3',
    'Thu' : '4',
    'Fri' : '5',
    'Sat' : '6'
  };
  
  var months = {
    'Jan' : '0',
    'Feb' : '1',
    'Mar' : '2',
    'Apr' : '3',
    'May' : '4',
    'Jun' : '5',
    'Jul' : '6',
    'Aug' : '7',
    'Sep' : '8',
    'Oct' : '9',
    'Nov' : '10',
    'Dec' : '11'
  };
  
  function parseTimestamp(timestamp) {
    matched = timestamp.match(/(\S{3}), (\d{1,2}) (\S{3}) (\d{4}) (\d{2}):(\d{2}):(\d{2}) \+0000/);
    parsedTimestamp = new Date(RegExp.$4, months[RegExp.$3], RegExp.$2, parseInt(RegExp.$5) + 9, RegExp.$6, RegExp.$7);
    now = new Date();
    difference = now - parsedTimestamp;
    if ((difference / 1000) < 60) {
      return "約" + Math.floor(difference / 1000) + "秒前";
    } else if ((difference / 1000 / 60) < 60) {
      return "約" + Math.floor(difference / 1000 / 60) + "分前";
    } else if ((difference / 1000 / 60 / 60) < 24) {
      return "約" + Math.floor(difference / 1000 / 60 / 60) + "時間前";
    } else {
      return "約" + Math.floor(difference / 1000 / 60 / 60 / 24) + "日前";
    }
    return parsedTimestamp;
  }
