const express = require('express');
const path = require('path');

const app = express();
const PORT = 8008;

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Serve the map.html file
app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, './public/pricing.html'));
});


// Serve the map.html file
app.get('/sincerely-aubrey', (req, res) => {
    res.sendFile(path.join(__dirname, './public/sincerely-aubrey.html'));
});

// Serve the map.html file
app.get('/sincerely-aubrey-download', (req, res) => {
    res.sendFile(path.join(__dirname, './public/sincerely-aubrey-download.html'));
});

// Serve the map.html file
app.get('/im-saian', (req, res) => {
    res.sendFile(path.join(__dirname, './public/im-saian.html'));
});


// Serve the map.html file
app.get('/liberty-title', (req, res) => {
    res.sendFile(path.join(__dirname, './public/liberty-title.html'));
});

// Serve the city.html file
app.get('/ai-the-label', (req, res) => {
    res.sendFile(path.join(__dirname, './public/ai-the-label.html'));
});

// Serve the city.html file
app.get('/features', (req, res) => {
    res.sendFile(path.join(__dirname, './public/features.html'));
});

// Serve the city.html file
app.get('/lander', (req, res) => {
    res.sendFile(path.join(__dirname, './public/lander.html'));
});

// Serve the city.html file
app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, './public/sign-in.html'));
});


// Serve the city.html file
app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, './public/sign-up.html'));
});

app.get('/create-account', (req, res) => {
    res.sendFile(path.join(__dirname, './public/create-account.html'));
});

// Serve the city.html file
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, './public/profile.html'));
});


app.get('/aitunes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/aitunes.html'));
});

app.get('/dronepong', (req, res) => {
    res.sendFile(path.join(__dirname, './public/dronepong.html'));
});

app.get('/daria', (req, res) => {
    res.sendFile(path.join(__dirname, './public/daria.html'));
});

app.get('/lyoko', (req, res) => {
    res.sendFile(path.join(__dirname, './public/lyoko.html'));
});

app.get('/lyoko-dev', (req, res) => {
    res.sendFile(path.join(__dirname, './public/lyoko-dev.html'));
});

app.get('/dronepong', (req, res) => {
    res.sendFile(path.join(__dirname, './public/dronepong.html'));
});

//TITLE
app.get('/dash-title', (req, res) => {
    res.sendFile(path.join(__dirname, './public/dash-title.html'));
});

//MAIN APPLICATION
app.get('/protect', (req, res) => {
    res.sendFile(path.join(__dirname, './public/protect.html'));
});


// Serve the R.U.B.I.N. application file
//TITLE
app.get('/rubin-title', (req, res) => {
    res.sendFile(path.join(__dirname, './public/rubin-title.html'));
});
//MAIN APPLICATION
app.get('/rubin', (req, res) => {
    res.sendFile(path.join(__dirname, './public/rubin.html'));
});


// Serve the D.E.S.E.R.V.E. application file
//TITLE
app.get('/deserve-title', (req, res) => {
    res.sendFile(path.join(__dirname, './public/deserve-title.html'));
});
//MAIN APPLICATION
app.get('/joesclubdc', (req, res) => {
    res.sendFile(path.join(__dirname, './public/joesclubdc.html'));
});


// Serve the ORM Ranking file
app.get('/orm-ranking', (req, res) => {
    res.sendFile(path.join(__dirname, './public/orm-ranking.html'));
});

app.get('/sweep-title', (req, res) => {
    res.sendFile(path.join(__dirname, './public/sweep-title.html'));
});

app.get('/yo-no-se', (req, res) => {
    res.sendFile(path.join(__dirname, './public/yo-no-se.html'));
});

app.get('/avatar-sam', (req, res) => {
    res.sendFile(path.join(__dirname, './public/avatar-sam.html'));
});

app.get('/tgl-translator', (req, res) => {
    res.sendFile(path.join(__dirname, './public/tgl-translator.html'));
});

app.get('/sam', (req, res) => {
    res.sendFile(path.join(__dirname, './public/sam.html'));
});

app.get('/network', (req, res) => {
    res.sendFile(path.join(__dirname, './public/network.html'));
});

app.get('/park-preview', (req, res) => {
    res.sendFile(path.join(__dirname, './public/park-preview.html'));
});

app.get('/9-ai', (req, res) => {
    res.sendFile(path.join(__dirname, './public/9-ai-compilation-album.html'));
});

app.get('/pong-title', (req, res) => {
    res.sendFile(path.join(__dirname, './public/pong-title.html'));
});

app.get('/js/:scriptId/', (req, res) => {
    let scriptId = req.params.scriptId;
    res.sendFile(path.join(__dirname, './public/js/'+scriptId));
})

app.get('/css/:stylesheetId/', (req, res) => {
    let stylesheetId = req.params.stylesheetId;
    res.sendFile(path.join(__dirname, './public/css/'+stylesheetId));
})

app.get('/css/Fonts/:fontId/', (req, res) => {
    let fontId = req.params.fontId;
    res.sendFile(path.join(__dirname, './public/css/Fonts/'+fontId));
})

app.get('/media/img/:imgId/', (req, res) => {
    let imgId = req.params.imgId;
    res.sendFile(path.join(__dirname, './public/media/img/'+imgId));
})

app.get('/media/img/favicon/:faviconId/', (req, res) => {
    let faviconId = req.params.faviconId;
    res.sendFile(path.join(__dirname, './public/media/img/favicon'+faviconId));
})

app.get('/media/texture/:textureId/', (req, res) => {
    let textureId = req.params.textureId;
    res.sendFile(path.join(__dirname, './public/media/texture/'+textureId));
})

app.get('/media/aud/SincerelyAubrey/:audId/', (req, res) => {
    let audId = req.params.audId;
    res.sendFile(path.join(__dirname, './public/media/aud/SincerelyAubrey/'+audId));
})

app.get('/media/book/:bookId/', (req, res) => {
    let bookId = req.params.bookId;
    res.sendFile(path.join(__dirname, './public/media/book/'+bookId));
})

app.get('/media/vid/:vidId/', (req, res) => {
    let vidId = req.params.vidId;
    res.sendFile(path.join(__dirname, './public/media/vid/'+vidId));
})

app.get('/service/:serviceId/', (req, res) => {
    let serviceId = req.params.service
    res.sendFile(path.join(__dirname, './public/service/'+serviceId));
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});