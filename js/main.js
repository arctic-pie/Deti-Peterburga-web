    var content = document.querySelector('#elem');
    var contentTop = content.getBoundingClientRect().top;
    var contentBottom = content.getBoundingClientRect().bottom;
    var heightContent = contentBottom - contentTop;

    function myFunction() {
        var parent = document.getElementById("parent");
        var header = document.getElementsByTagName("header")[0];
        var heightHeader = parseInt(window.getComputedStyle(header, null).height);
        var footer = document.getElementsByTagName("footer")[0];
        var heightFooter = parseInt(window.getComputedStyle(footer, null).height);
        var mainHight = window.innerHeight - heightHeader - heightHeader;

        var elem = document.querySelector('#elem');
        var topElem = elem.getBoundingClientRect().top;
        var bottomElem = elem.getBoundingClientRect().bottom;
        var heightElem = bottomElem - topElem;

        if (heightContent + heightHeader + heightHeader > window.innerHeight){
            parent.style.height = 'auto';
            elem.style.height = 'auto';
        } else if (heightElem < mainHight) {
            parent.style.height = mainHight + 'px';
            elem.style.height = '100%';
        } else {
            if (heightElem > heightContent) {
                parent.style.height = mainHight + 'px';
                elem.style.height = '100%';
            } else {
                parent.style.height = 'auto';
                elem.style.height = 'auto';
            }
        }
    }

    
    window.onload = function () { myFunction() }
    window.onresize = function () { myFunction() }
