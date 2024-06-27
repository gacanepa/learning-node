import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const simpleServerFunction = (req, res) => {
    const userAgent = req.headers['user-agent'];
    res.statusCode = StatusCodes.OK;
    res.statusMessage = ReasonPhrases.OK;
    // Tells the browser how to interpret the response body
    res.setHeader('Content-Type', 'text/html');
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
