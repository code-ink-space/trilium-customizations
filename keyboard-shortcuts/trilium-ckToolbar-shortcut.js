api.bindGlobalShortcut("ctrl+shift+p", function(){
    let button_off = document.querySelector('.ck.ck-button.ck-off.ck-block-toolbar-button');
    if (button_off)
        button_off.click();
    else
        document.querySelector('.ck.ck-button.ck-on.ck-block-toolbar-button').click();
});