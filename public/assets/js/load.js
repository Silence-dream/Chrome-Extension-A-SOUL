!function(){
    function injectCustomJs(jsPath,cb)
    {
        var temp = document.createElement('script');
        temp.setAttribute('type', 'text/javascript');
        temp.src = chrome.extension.getURL(jsPath);
        temp.onload = function()
        {
            this.parentNode.removeChild(this);
            if(cb)cb();
        };
        document.body.appendChild(temp);
    }

    injectCustomJs('/assets/js/a-soul.js',function(){

      injectCustomJs('/assets/js/move.js',function(){
          console.log(11111111111111111111111)
      });
   });
}()
