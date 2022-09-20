from trilium_py.client import ETAPI
from urllib.parse import unquote
import sys, time

server_url = 'https://TRILIUM_SERVER'
token = 'YOUR_TOKEN_HERE'
ea = ETAPI(server_url, token)
note_id = 'NOTE_ID'

raw_info = sys.argv[1]
raw_info = raw_info.replace('%0A', '<br>')
raw_info = unquote(raw_info)
info = raw_info.split('______________________')

url = info[0]
quote = info[1]
timestamp = time.strftime("%Y-%m-%d") + ' - ' + time.strftime("%-I:%M %p")

formatted_text = '<p><span class="text-tiny">' + timestamp + '</span></p><blockquote><p>' + quote + '</p><p><a href="' + url + '">' + url + '</a></p></blockquote><p>&nbsp;</p>'

old_content = ea.get_note_content(note_id)

# prepend
new_content = formatted_text + old_content

# update
ea.update_note_content(note_id, content=new_content)
