from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main():
    return render_template("main.html")

@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/instructions')
def instructions():
    return render_template("instructions.html")

@app.route('/help')
def help():
    return render_template("help.html")





if __name__ == '__main__':
    app.run(debug=True,port=3000)


