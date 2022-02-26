/*
	Trilium JS code to auto-hide/toggle the editor ribbon
	for a less cluttered interface.
	tested on Trilium v0.50.2
*/
$(document).ready(function(){
    /* auto-hide ribbon toolbar on startup */
    var ribbons = document.querySelectorAll('div.ribbon-container.component');
    [].forEach.call(ribbons, function(ribbon) {
        ribbon.style.display='none';
    });
    var timer;
    var notetitle = $("#center-pane > div.component.split-note-container-widget > div > div.component.title-row > div.note-title-widget.component > input");
    var headerarea = "div.component.title-row, div.ribbon-container.component, div.tab-row-widget.component";

    /* show/hide ribbon when mousing over/out the top of editor content */
    $(headerarea).hover(
        function(){ // mouse-in
            if (!(notetitle.is(":focus"))) {
                if(timer) { clearTimeout(timer); timer = null; }
                timer = setTimeout(function() {
                    [].forEach.call(ribbons, function(ribbon) {
                        ribbon.style.display='block';
                    });
                }, 700)
            }
        },
        function(){ // mouse-out
            if (!(notetitle.is(":focus"))) {
                if(timer) { clearTimeout(timer); timer = null; }
                timer = setTimeout(function() {
                    [].forEach.call(ribbons, function(ribbon) {
                        ribbon.style.display='none';
                    });
                }, 1500)
            }
        }
    );

    /* show ribbon if note title input or note content area is in focus */
    $("div.note-detail.component").on("click", function() {
        var foundfocus = false;
        notetitle.each(function() {
            if ($(this).is(':focus')) {
                [].forEach.call(ribbons, function(ribbon) {
                    ribbon.style.display='block';
                });
                foundfocus = true;
            }
        });
        if (!foundfocus) {
            [].forEach.call(ribbons, function(ribbon) {
                ribbon.style.display='none';
            });
        }
    });
});

