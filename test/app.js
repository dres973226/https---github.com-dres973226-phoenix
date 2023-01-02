const Koa = require('koa');
var fs = require('fs');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = Router();

const position = 'C:/Users/User/Desktop/pineapple/test';//可更改

app.use(bodyParser());

// Router -> /
router.get('/main.html', async (ctx, next) => {
    console.log("Rsponse main page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/main.html`);
});

router.get("/bootstrap.css", async (ctx, next) => {
    console.log("Load bootstrap.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/css/bootstrap.css`);
});

// Router -> /login
router.get('/', async (ctx, next) => {
    console.log("Rsponse log page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/login.html`);
});

// Router -> /register
router.get('/register.html', async (ctx, next) => {
    console.log("Rsponse register page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/register.html`);
});

// Router -> /face
router.get('/face.html', async (ctx, next) => {
    console.log("Rsponse face page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/face.html`);
});

// Router -> /history
router.get('/history.html', async (ctx, next) => {
    console.log("Rsponse history page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/history.html`);
});

// Router -> /post_history
router.get('/post_history.html', async (ctx, next) => {
    console.log("Rsponse post_history page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/post_history.html`);
});

// Router -> /donate
router.get('/donate.html', async (ctx, next) => {
    console.log("Rsponse donate page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/donate.html`);
});

// Router -> /postme
router.get('/postme.html', async (ctx, next) => {
    console.log("Rsponse postme page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/postme.html`);
});

// Router -> /person
router.get('/personal.html', async (ctx, next) => {
    console.log("Rsponse personal page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/personal.html`);
});

// Router -> /success
router.get('/success.html', async (ctx, next) => {
    console.log("Rsponse success page");
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/success.html`);
});

router.get('/log.css', async (ctx, next) => {
    console.log("Load log.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/css/log.css`);
});

router.get('/postme.css', async (ctx, next) => {
    console.log("Load postme.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/css/postme.css`);
});

router.get('/1.jpg', async (ctx, next) => {
    ctx.type = "image/jpg";
    ctx.body = fs.createReadStream(`${position}/img/1.jpg`);
    console.log("Output card image1");
});

router.get('/2.jpg', async (ctx, next) => {
    ctx.type = "image/jpg";
    ctx.body = fs.createReadStream(`${position}/img/2.jpg`);
    console.log("Output card image2");
});

router.get('/3.jpg', async (ctx, next) => {
    ctx.type = "image/jpg";
    ctx.body = fs.createReadStream(`${position}/img/3.jpg`);
    console.log("Output card image3");
});

router.get('/qrcode.jpg', async (ctx, next) => {
    ctx.type = "image/jpg";
    ctx.body = fs.createReadStream(`${position}/img/qrcode.jpg`);
    console.log("Output card qrcode");
});

router.get('/main.css', async (ctx, next) => {
    console.log("Load main.css");
    ctx.type = "css";
    ctx.body = fs.createReadStream(`${position}/css/main.css`);
});

router.get("/showmore.js", async (ctx, next) => {
    console.log("Rsponse showmore.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/js/showmore.js`);
});

router.get("/readURL.js", async (ctx, next) => {
    console.log("Rsponse readURL.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/js/readURL.js`);
});

router.get("/giveup.js", async (ctx, next) => {
    console.log("Rsponse giveup.js");
    ctx.type = "js";
    ctx.body = fs.createReadStream(`${position}/js/giveup.js`);
});

router.post('/submission.html', async (ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/submission.html`);
    console.log("Output register page");
    var content = ctx.request.body;
    console.log(content);
});

router.post('/success.html', async (ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/success.html`);
    console.log("Output text/pic page");
    var content = ctx.request.body;
    console.log(content);
});

//pic的post沒跑出資料
router.post('/submission2.html', async (ctx, next) => {
    ctx.type = "html";
    ctx.body = fs.createReadStream(`${position}/html/submission2.html`);
    console.log("Output login page");
    var content = ctx.request.body;
    console.log(content);
});

app.use(router.routes()).use(router.allowedMethods());
console.log("Server started!");

app.listen(3000);