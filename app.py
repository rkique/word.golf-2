from application import create_app
from waitress import serve
app = create_app()

if __name__ == "__main__": 
    serve(app, host="localhost", port=5000)
    #app.run(host='localhost', port=5050, debug=True)
