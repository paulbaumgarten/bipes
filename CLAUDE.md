# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BIPES (Block-based Integrated Platform for Embedded Systems) is a fully web-based IDE for visual block programming of embedded systems (ESP32, ESP8266, Arduino, STM32, Raspberry Pi Pico, etc.). It requires no local installation — users open it in a browser. Blocks generate MicroPython code sent directly to devices via WebSerial, WebSocket, or WebBluetooth.

## Common Commands

```bash
# Initialize git submodules (Blockly, Freeboard, Databoard) — required after fresh clone
make submodules

# Build the offline version (single self-contained HTML file, no server needed)
make offline
# Output: ui/index_offline.html and bipes_offline.zip

# Build documentation (requires: pip install sphinx sphinx-js furo)
make doc
# Runs: cd docs && make html

# Copy updated Blockly build artifacts into ui/core/
make copy

# Copy bipes_blocks/block_definitions.js into ui/
make copy-bipes-blocks
```

There is no linting or automated test framework configured.

## Architecture

### Core JavaScript Modules (`ui/core/`)

The application is structured around several global namespaces/classes that collaborate:

- **`Code`** (`code.js`) — Main app controller. Manages the Blockly workspace, language/locale, block loading/saving, and code generation. Entry point is `Code.init()`.
- **`UI`** (`ui.js`) — UI panels and components (account panel, project management, channel selection, responsive layout).
- **`Channel.mux`** (`channel.js`) — Communication multiplexer. Detects available protocols based on the serving protocol (file:/https: → WebSerial/WebBluetooth; http: → WebSocket only; localhost → all three). Handles connect/disconnect/send across protocols.
- **`Storage`** (`storage.js`) — Persistence layer using `localStorage`/`sessionStorage` for projects, with optional App Engine cloud sync.
- **`Queue`** (`queue.js`) — Command execution queue for sequencing device interactions.

### Block System

Blocks are defined in two places:
- **`ui/block_definitions.js`** — Custom BIPES block definitions (shapes, fields, inputs)
- **`ui/generator_stubs.js`** — Python code generators for each custom block
- **`bipes_blocks/`** — Source for block definitions (copy to `ui/` via `make copy-bipes-blocks`)
- **`bipes_block_generator/`** — Tool to auto-generate blocks from MicroPython documentation

### Device / Toolbox Configuration

- **`ui/devinfo/devinfo.json`** — Defines each supported device: board ID, baud rate, pinout array, toolbox XML filename, and media path.
- **`ui/toolbox/*.xml`** — Per-device Blockly toolbox definitions. Each XML file lists which block categories/blocks are available for that device.

Adding a new device requires entries in both `devinfo.json` and a new toolbox XML.

### Backend (`appengine/bipes-271213/`)

Python 3.7 App Engine app with:
- `main.py` — WSGI router
- `storage.py` — Block project storage/retrieval API
- `listK.py` — Project listing API

### MQTT / IoT Bridge (`easymqtt/server/`)

PHP-based server providing MQTT pub/sub APIs for IoT connectivity. Not required for core block programming functionality.

### Git Submodules

- `blockly/` — Google Blockly core library
- `ui/freeboard/` — Freeboard dashboard visualization
- `databoard/` — Databoard visualization

## Key Patterns

### Adding a New Block

1. Define the block shape in `bipes_blocks/block_definitions.js` (Blockly JSON/JS format)
2. Add the Python code generator in `generator_stubs.js`
3. Reference the block in the appropriate `ui/toolbox/*.xml` file(s)
4. Run `make copy-bipes-blocks` to copy definitions to `ui/`

### Communication Protocol Selection

`Channel.mux` automatically restricts available protocols based on `window.location.protocol`:
- `file:` or `https:` → WebSerial + WebBluetooth
- `http:` → WebSocket only
- `localhost` → all three

### Offline Mode

`make offline` concatenates all toolbox XML files and `devinfo.json` inline into `ui/index_offline.html` so it runs without a server. MQTT/WebSocket features won't work in offline mode due to CORS restrictions.
