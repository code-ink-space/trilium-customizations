# trilium-customizations
Scripts and codes for Trilium Notes
[https://github.com/zadam/trilium/](https://github.com/zadam/trilium/)

---

## A. Frontend customizations in action using [Midnight - Trilium Dark Mode Theme](https://github.com/cwilliams5/Midnight-Trilium-Dark-Mode)

![Trilium Customizations Screenshot](/screenshots/midnight-fhd.jpg?raw=true "Trilium Customizations Screenshot")

---

## B. Trilium ETAPI Python scripts for collecting links, quotes using Firefox Bookmarklets

### Requirements:
- Trilium with the Sync Server and ETAPI configured
- [github.com/Nriver/trilium-py](https://github.com/Nriver/trilium-py) - tested on v0.6.1
- custom HTTP URL handler as used in: [github.com/code-ink-space/firefox-open-tab-another-browser](https://github.com/code-ink-space/firefox-open-tab-another-browser)

![Trilium Bookmarklets](/screenshots/trilium-bookmarklets.jpg?raw=true "trilium-bookmarklets")

### **trilium-etapi-linklogger.py**
- Copies the current Firefox tab's page title and URL then sends it to a predefined Trilium note with some formatting.
- Able to send to a different note based on the domain name.

![trilium-etapi-linklogger.py](/screenshots/trilium-etapi-linklogger.jpg?raw=true "trilium-etapi-linklogger.py")

### **trilium-etapi-quotecollector.py**
- Sends the currently selected/highlighted text in Firefox in plain text format with line breaks preserved.

![trilium-etapi-quotecollector.py](/screenshots/trilium-etapi-quotecollector.jpg?raw=true "trilium-etapi-quotecollector.py")

The links and quotes are saved in reverse chronological order.