/*
	Trilium JS code to auto-hide/toggle the left launcher sidebar
	for a less cluttered interface.
	Also adds keyboard shortcut for the launcher.
	tested on Trilium v0.50.2
*/
api.bindGlobalShortcut("alt+m", function(){
    var launcher = document.querySelector('#launcher-pane');
    if (launcher.style.display == 'none' || launcher.style.opacity == '0')
        $('#launcher-pane').css({"display":"flex","opacity":"1"});
    else
        launcher.style.display='none';
});
$(document).ready(function(){
    $('#launcher-pane').addClass('stickylauncher');
    $(document).on({
        mousemove: debounce(function (e) { toggleLauncher(e.pageX); }, 200),
        click: debounce(function (e) { toggleLauncher(e.pageX); }, 200)
    });
});
function toggleLauncher(x) {
    if (x <= 7)
        $('#launcher-pane').show().css({"display":"flex","opacity":"1"});
    else if ( x <= 55 && $("#launcher-pane").css('display') == 'flex' )
        $('#launcher-pane').show().css("display","flex");
    else if ($('div.dropdown.right-dropdown-widget.dropright.component.show > button').attr("aria-expanded") == "true") {
        $('#launcher-pane').show().css("display","flex");
    } else {
        document.querySelector('#launcher-pane').style.display='none';
    }
}
function debounce(func, interval) {
    var lastCall = -1;
    return function() {
        clearTimeout(lastCall);
        var args = arguments;
        var self = this;
        lastCall = setTimeout(function() {
            func.apply(self, args);
        }, interval);
    };
}
