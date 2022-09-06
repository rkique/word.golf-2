from flask import Flask
import logging

def create_app(): 
    app = Flask(__name__, instance_relative_config=False)
    app.config['SECRET_KEY'] = 'apple'
    with app.app_context():
        from . import routes
        log = logging.getLogger('werkzeug')
        log.setLevel(logging.ERROR)
    return app
