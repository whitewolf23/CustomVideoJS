(function() {
    var vid1, progressed;
    var vid = document.getElementById('example-video');

    // create a really simple plugin
    // this one just logs the buffered percentage to the console whenever
    // more data is downloaded
    progressed = function(options) {
      this.on('progress', function(e) {
        console.log(this.bufferedPercent());
      });
    };

    // register the plugin
    videojs.registerPlugin('progressed', progressed);

    // initialize it
    vid1 = videojs(vid);
    vid1.progressed();


  })();