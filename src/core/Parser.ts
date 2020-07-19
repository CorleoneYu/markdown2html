import Token, { TokenType, HeaderToken } from './Token';
import Renderer from './Renderer';

class Parser {
  private renderer = new Renderer();

  public parse = (tokens: Token[]) => {
    let out = '';

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      switch (token.type) {
        case TokenType.heading:
          out += this.renderer.heading(token as HeaderToken);
          break;
        default:
          break;
      }
    }

    return out;
  };
}

export default Parser;
