from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from starlette.requests import Request

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/success", response_class=HTMLResponse)
def success(request: Request):
    return templates.TemplateResponse("success.html", {"request": request})


@app.get("/moments", response_class=HTMLResponse)
def moments(request: Request):
    return templates.TemplateResponse("moments.html", {"request": request})


@app.get("/input", response_class=HTMLResponse)
def input_page(request: Request):
    return templates.TemplateResponse("input.html", {"request": request})


@app.get("/letter", response_class=HTMLResponse)
def letter(request: Request):
    return templates.TemplateResponse("letter.html", {"request": request})
