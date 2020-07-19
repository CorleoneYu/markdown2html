import Token, { TokenType, HeaderToken } from './Token';

export class Tokenizer {
  heading = (src: string) => {
    const res = /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/.exec(src);
    console.log('res: ', res);
    /**
     * 例：src => # Heading
     * res => [
     *  0: '# Heading',
     *  1: '#',
     *  2: 'Heading'
     * ]
     */
    if (res) {
      return new HeaderToken({
        type: TokenType.heading,
        level: res[1].length,
        raw: res[0],
        text: res[2],
      });
    }

    return null;
  };
}

const tokenizer = new Tokenizer();
export default tokenizer;
