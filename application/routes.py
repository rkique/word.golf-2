from flask import current_app as app
from flask import render_template, request, session, make_response
from .util import get_curve
import json

@app.route('/')
def index():
    start = 'taxi'
    target = 'alphabet'
    session['target'] = target
    results = get_curve(start, target)
    return render_template('index.html', data={'results':results})

@app.route('/', methods=['POST'])
def index_post():
    start = request.form['word']
    target = session.get('target')
    results = get_curve(start, target)
    return make_response(json.dumps({'results':results}))
    