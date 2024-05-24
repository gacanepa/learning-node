import fs from 'fs';

const temples = [
    {
        name: 'Aba Nigeria Temple',
        continent: 'Africa',
        dedicated: '2005-07-25',
    },
    {
        name: 'Accra Ghana Temple',
        continent: 'Africa',
        dedicated: '2004-01-11',
    },
    {
        name: 'Adelaide Australia Temple',
        continent: 'Australia',
        dedicated: '2000-06-15',
    },
    {
        name: 'Albuquerque New Mexico Temple',
        continent: 'North America',
        dedicated: '2000-03-05',
    },
    {
        name: 'Anchorage Alaska Temple',
        continent: 'North America',
        dedicated: '1999-01-09',
    },
    {
        name: 'Apia Samoa Temple',
        continent: 'Australia',
        dedicated: '1983-08-05',
    },
    {
        name: 'Arequipa Peru Temple',
        continent: 'South America',
        dedicated: '2019-12-15',
    },
    {
        name: 'Asunción Paraguay Temple',
        continent: 'South America',
        dedicated: '2002-05-19',
    }
];

/* First alternative: fs.writeFile
fs.writeFile('temples.json', JSON.stringify(temples), (err) => {
    if (err) {
        throw err;
    }
    console.log('File has been created');
});
*/

// Second alternative: fs.createWriteStream
const options = {
    flags: 'w',
    encoding: 'utf8',
    autoClose: true,
};
const file = fs.createWriteStream('temples.json', options);

file.on('open', () => {
    console.log('Stream opened');
});

file.on('ready', () => {
    console.log('Stream ready');
});

file.on('drain', () => {
    console.log('Stream drained');
});

file.on('error', (err) => {
    console.error('Stream error: ', err);
});

file.on('close', () => {
    console.log('Stream closed');
});

file.on('finish', () => {
    console.log('All data has been written');
});

file.write(JSON.stringify(temples), (err) => {
    if (err) {
        throw err;
    }
});

file.end();
