from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")  # Looks for index.html inside templates folder

if __name__ == "__main__":
    app.run(debug=True)
