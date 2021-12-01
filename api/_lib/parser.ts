import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { query } = parse(req.url || '/', true);
    const { fontSize, award, primaryColor, 
        secondaryColor, textColor } = (query || {});

    if (Array.isArray(fontSize)) {
        throw new Error('Expected a single fontSize');
    }
    const formattedAward = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseInt(getArray(award)[0], 10))

    let extension = '';
    console.log({primaryColor, secondaryColor, textColor})
    const parsedRequest: ParsedRequest = {
        fileType: extension === 'jpeg' ? extension : 'png',
        fontSize: fontSize || '120px',
        award: formattedAward, 
        colors: {
            primaryColor: getArray(primaryColor)[0],
            secondaryColor: getArray(secondaryColor)[0],
            textColor: getArray(textColor)[0],
        }

    };

    return parsedRequest;
}5

function getArray(stringOrArray: string[] | string | undefined): string[] {
    if (typeof stringOrArray === 'undefined') {
        return [];
    } else if (Array.isArray(stringOrArray)) {
        return stringOrArray;
    } else {
        return [stringOrArray];
    }
}
