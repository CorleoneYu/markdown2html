import tokenizer, { Tokenizer } from './Tokenizer';
import Token from './Token';

class Lexer {
  public tokenizer: Tokenizer = tokenizer;
  private sourceCode: string = '';

  public lex = (source: string) => {
    this.sourceCode = source.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');

    const tokens = this.lexBlockToken();

    return tokens;
  };

  private lexBlockToken = () => {
    this.sourceCode = this.sourceCode.replace(/^ +$/gm, '');
    const tokens = [];
    let token: Token | null;

    while (this.sourceCode) {
      // heading
      token = this.tokenizer.heading(this.sourceCode);
      if (token) {
        this.sourceCode = this.sourceCode.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
    }

    return tokens;
  };
}

export default Lexer;
