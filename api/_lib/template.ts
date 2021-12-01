
import { readFileSync } from 'fs';
import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';



const medium = readFileSync(`${__dirname}/../_fonts/Everett-Medium.woff2`).toString('base64');

function getCss(fontSize: string, colors: any) {
    return `
    @font-face {
        font-family: 'Everett';
        font-weight: 500;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${medium}) format('woff2');
    }

    body {
        background: #${colors.primaryColor};
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .spacer {
        margin: 150px;
    }
    
    .heading {
        font-family: 'Everett', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        
        color: #${colors.textColor};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    span {
        width: fit-content;
        background: #${colors.secondaryColor};
        padding: 15px;
    }
    .withoutBottomPadding {
        padding-bottom: 0px;
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { award, fontSize, colors} = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(fontSize, colors)}
    </style>
    <body>
        <div>
            <div class="heading">
            <span class="withoutBottomPadding">UP TO</span>
            <span>
                ${award}
            </span>
            </div>
        </div>
    </body>
</html>`;
}
