import Lexer from './Lexer';
import Parser from './Parser';

class Markdown2Html {
    lexer = new Lexer();
    parser = new Parser();

    render = (source: string) => {
        const tokens = this.lexer.lex(source);
        const out = this.parser.parse(tokens);
        return out;
    }
}

const marked = new Markdown2Html();
console.log(marked.render('# Heading\n## Test'));

export default Markdown2Html;