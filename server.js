const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files with proper font MIME types
app.use(express.static(path.join(__dirname, "public"), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith(".woff2")) {
            res.setHeader("Content-Type", "font/woff2");
        } else if (filePath.endsWith(".woff")) {
            res.setHeader("Content-Type", "font/woff");
        } else if (filePath.endsWith(".ttf")) {
            res.setHeader("Content-Type", "font/ttf");
        }
    }
}));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
