import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const simpleServerFunction = (req, res) => {
    const userAgent = req.headers['user-agent'];
    res.writeHead(StatusCodes.OK, ReasonPhrases.OK, {
        // Tells the browser how to interpret the response body
        'Content-Type': 'text/html',
        'X-Powered-By': 'Node.js',
    });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><title>Simple Web Server</title></head>');
    res.write('<body>');
    res.write('<h1>This is a simple HTML page</h1>');
    res.write(`<p>You have browsed to ${req.url} using ${userAgent}.</p>`);
    res.write('</body>');
    res.write('</html>');
    res.end();
};

export default simpleServerFunction;
