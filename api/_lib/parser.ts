import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';
import { AID_PROGRAMS_COLORS, AidColorPaletteName } from './scholarshipColors'

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { query, pathname } = parse(req.url || '/', true);
    if(!pathname) {
        throw new Error("wrong path")
    }
    console.log(pathname)
    const [,color, award] = pathname.split('/')



    console.log({ color, award })
    const { fontSize } = (query || {});

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
    const colors = AID_PROGRAMS_COLORS[color as AidColorPaletteName]
    console.log({...colors})
    const parsedRequest: ParsedRequest = {
        fileType: extension === 'jpeg' ? extension : 'png',
        fontSize: fontSize || '120px',
        award: formattedAward, 
        colors

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
