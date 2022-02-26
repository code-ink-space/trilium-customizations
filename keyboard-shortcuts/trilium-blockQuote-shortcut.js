api.bindGlobalShortcut("ctrl+shift+q", function(){
    api.getActiveTabTextEditor(function(editor){
        editor.execute('blockQuote');
    });
});