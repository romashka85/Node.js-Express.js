function homeHandler(req, res) {
    if (req.path === '/' || req.path === '/index.html') {
        res.sendHtml('./index.html');
    } else {
        return true;
    }
}

module.exports = homeHandler;