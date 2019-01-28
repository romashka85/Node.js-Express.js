module.exports = function notFound(res, errHandleCb){
    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });

    res.write('404 not found');
    res.end();

    let errorText = res.pathname + ' 404 snot found';

    if(errHandleCb){
        errHandleCb(errorText);
    }else {
        console.log(errorText);
    }
};