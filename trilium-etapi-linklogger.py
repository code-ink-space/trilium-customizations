from trilium_py.client import ETAPI
from urllib.parse import unquote, urlparse
import sys, time

server_url = 'https://TRILIUM_SERVER'
token = 'YOUR_TOKEN_HERE'
ea = ETAPI(server_url, token)

raw_info = unquote(sys.argv[1])
info = raw_info.split('______________________')

url = info[0]
pagetitle = info[1]
timestamp = time.strftime("%Y-%m-%d") + ' - ' + time.strftime("%-I:%M %p")

domain = urlparse(url).netloc
if domain == 'www.youtube.com':
    note_id = 'YT_NOTE_ID'
else:
    note_id = 'LINK_NOTE_ID'

formatted_text = '<p><span class="text-tiny">' + timestamp + '</span><br><strong>' + pagetitle + '</strong><br><a href="' + url + '">' + url + '</a></p><p>&nbsp;</p>'

old_content = ea.get_note_content(note_id)

# prepend
new_content = formatted_text + old_content

# update
ea.update_note_content(note_id, content=new_content)
