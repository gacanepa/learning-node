const simpleServerFunction = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

export default simpleServerFunction;
