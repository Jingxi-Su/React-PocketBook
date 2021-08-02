//type InputString = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | '删除' | '清空'
//后期可以强制设定text类型，使代码更加严s谨
//const generateOutput = (text: InputString, output = '0') => {
const generateOutput = (text: string, output = '0') => {
    switch (text) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (output === '0') {
                return text;
            } else {
                return output + text;
            }
        case '.':
            if (output.indexOf('.') >= 0) {
                return output;
            }
            return output + '.';
        case'删除':
            if (output.length === 1) {
                return '';

            } else {
                return output.slice(0, -1)||''//等于output.slice(start:0,end:output-1)，或运算防止undefined
            }
        case'清空':
            return '';
        default:
            return '';
    }
}

export {generateOutput}
