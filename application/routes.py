from flask import current_app as app
from flask import render_template, request, session, make_response
from .util import get_curve, PROMPTS
import json
import random


#session['data'] will be the SSoT

def jump(start):
    _data = json.loads(session.get('data'))
    target = _data['prompt'][1]
    results = get_curve(start, target)
    _data['results'] = results
    session['data'] = json.dumps(_data)
    return json.dumps(_data)

def shift_to(i):
    prompt = PROMPTS[i]
    results = get_curve(prompt[0], prompt[1])
    return json.dumps({'i': i, 'prompt': prompt,'prompts': PROMPTS[i:9], 'results':results})

@app.route('/')
def index():
    session['i'] = 0
    session['data'] = shift_to(session['i'])
    return render_template('index.html', data=json.loads(session.get('data')))

@app.route('/', methods=['POST'])
def index_post():
    try:
        if request.form['end'] is not None:
            session['i'] = session['i']+1
            session['data'] = shift_to(session['i'])
            print(session['data'])
    except:
        session['data'] = jump(request.form['word'])
    return make_response(session.get('data'))
