#!/usr/bin/env python

import os
from bottle import route, run, static_file, template, view


"""@route('/blockly/<filename>')
def sofuspy_static(filename):
    return static_file(filename, root='./static/')
"""

@route('/<filepath:path>')
def index(filepath):
    return static_file(filepath, root='./static')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8105))
    run(
        host='0.0.0.0',
        port=port,
        server='paste',
	    reloader = True,
        debug=False,
    )

