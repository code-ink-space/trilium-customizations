api.bindGlobalShortcut("alt+t", async function(){
    const todayNote = await api.getTodayNote();
    await api.waitUntilSynced();
    api.activateNote(todayNote.noteId);
});
api.bindGlobalShortcut("alt+y", async function(){
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    // getDateNote() needs str in YYYY-MM-DD format.
    const yesterdayNote = await api.getDateNote(dayjs().subtract(1, 'day').format('YYYY-MM-DD'));
    await api.waitUntilSynced();
    api.activateNote(yesterdayNote.noteId);
});
api.bindGlobalShortcut("alt+w", async function(){
    let tommorrow = new Date();
    tommorrow.setDate(tommorrow.getDate() - 1);
    const tommorrowNote = await api.getDateNote(dayjs().add(1, 'day').format('YYYY-MM-DD'));
    await api.waitUntilSynced();
    api.activateNote(tommorrowNote.noteId);
});
api.bindGlobalShortcut("ctrl+alt+y", async function(){
    let lastyear = new Date();
    lastyear.setDate(lastyear.getDate() - 1);
    const lastyearNote = await api.getDateNote(dayjs().subtract(1, 'year').format('YYYY-MM-DD'));
    await api.waitUntilSynced();
    api.activateNote(lastyearNote.noteId);
});