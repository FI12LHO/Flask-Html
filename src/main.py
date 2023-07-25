from flask import Flask, send_file, redirect


app = Flask(__name__)

@app.route('/open/<folder>/<file>')
def read_file(folder: str, file: str):
    path = f'./{folder}/{file}'
    
    try:
        return send_file(path)
    except:
        return {
            'error': 'File not found',
            'path': path
        }
        
@app.route('/home')
def home():
    return send_file('../public/index.html')

@app.route('/')
def start():
    return redirect('http://127.0.0.1:5000/home?pageTitle=Python%20Flask%20Html')