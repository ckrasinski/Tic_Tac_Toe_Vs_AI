import os
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
db = SQL("sqlite:///tic_tac_toe.db")
db.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username TEXT NOT NULL, hash TEXT NOT NULL)")

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    else:
        sign = request.form.get("selectSign")
        return render_template("game.html", sign=sign)

@app.route("/game")
def game():
    return render_template("game.html")

@app.route("/register", methods = ["GET", "POST"])
def register():
    if request.method == "GET":
        return render_template("register.html")
    else:
        if not request.form.get("username"):
            flash("Must provide username")
            return render_template("register.html")
        if not request.form.get("password"):
            flash("Must provide password")
            return render_template("register.html")
        if not request.form.get("confirmation"):
            flash("Must confirm password")
            return render_template("register.html")
        username = request.form.get("username")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")
        if password != confirmation:
            flash("Passwords must be the same")
            return render_template("register.html")
        db_username = db.execute("SELECT * FROM users WHERE username = ?", username)
        if db_username:
            flash("User with this name already exists")
            return render_template("register.html")
        hash = generate_password_hash(password)
        db.execute("INSERT INTO users (username, hash) VALUES (?, ?)", username, hash)
        return render_template("login.html")



@app.route("/login", methods = ["GET", "POST"])
def login():
    session.clear()
    if request.method == "POST":
        if not request.form.get("username"):
            flash("Must provide username")
            return render_template("login.html")
        if not request.form.get("password"):
            flash("Must provide password")
            return render_template("login.html")
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            flash("Invalid username and/or password")
            return render_template("login.html")
        session["user_id"] = rows[0]["id"]
        return render_template("index.html")
    return render_template("login.html")

