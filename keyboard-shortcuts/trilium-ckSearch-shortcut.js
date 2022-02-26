api.bindGlobalShortcut("ctrl+f", async function(){
    api.getActiveTabTextEditor(function(){
        document.querySelector('.ck.ck-button.ck-off.ck-block-toolbar-button').click();
        document.querySelector('div.ck.ck-toolbar.ck-toolbar_floating.ck-toolbar_grouping > div > div:last-child > button').click();
    });
});