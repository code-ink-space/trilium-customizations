$(document).on({
    keydown: debounce(function() {
        let activeEditorDOM = $("div.note-detail-editable-text-editor.ck-focused")[0];
        if (activeEditorDOM) {
            let clientHeight = activeEditorDOM.parentNode.children[1].clientHeight;
            let scrollHeight = activeEditorDOM.parentNode.children[1].scrollHeight;
            let paddingBottom = parseInt(window.getComputedStyle(activeEditorDOM).paddingBottom.replace('px',''));
            let ypos = getCaretTopPosition();
            let offsetTop = activeEditorDOM.offsetTop;
            if ((scrollHeight - ypos - offsetTop < paddingBottom + 50) && scrollHeight - clientHeight) {
                let activeEditor = $("div.note-detail-editable-text-editor.ck-focused");
                activeEditor.stop().animate({
                  scrollTop:(activeEditor.scrollTop() + (paddingBottom / 2))
                }, 250);
            }
        }
    }, 500)
});
/* https://stackoverflow.com/a/17328941 */
function getCaretTopPosition() {
    document.execCommand('insertHTML', false, '<span id="hidden"></span>');
    var hiddenNode = document.getElementById('hidden');
    if (!hiddenNode) {
        return 0;
    }
    var topPosition = hiddenNode.offsetTop;
    hiddenNode.parentNode.removeChild(hiddenNode);
    return topPosition;
}
/* https://stackoverflow.com/a/18177235 */
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