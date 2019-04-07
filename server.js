const bs = require('browser-sync');

// .init starts the server
bs.init({
    server: ".",
    files: ['*.css','*.js', '*.html']
});
