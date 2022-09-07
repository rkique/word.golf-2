from flask import current_app as app
from flask import render_template, request, session, make_response
from .util import get_curve, PROMPTS
import json
import random


#session['data'] will be the SSoT

@app.route('/')
def index():
    prompt = PROMPTS[0]
    start = prompt[0]
    target = prompt[1]
    results = get_curve(start, target)
    session['data'] = json.dumps({'prompt': prompt,'prompts': PROMPTS[0:9], 'results':results})
    return render_template('index.html', data=json.loads(session.get('data')))

def jump(start):
    _data = json.loads(session.get('data'))
    target = _data['prompt'][1]
    results = get_curve(start, target)
    _data['results'] = results
    session['data'] = json.dumps(_data)
    return json.dumps(_data)

@app.route('/', methods=['POST'])
def index_post():
    session['data'] = jump(request.form['word'])
    return make_response(session.get('data'))
