export enum TokenType {
  heading = 'header',
  table = 'table',
}

export interface ITokenProps {
  type: TokenType;
  raw: string;
  text: string;
}

class Token {
  public type: TokenType;
  public raw: string;
  public text: string;
  public tokens: Token[] = [];

  constructor(props: ITokenProps) {
    this.type = props.type;
    this.raw = props.raw;
    this.text = props.text;
  }
}

export interface IHeaderProps extends ITokenProps {
  level: number;
}
export class HeaderToken extends Token {
  level: number;

  constructor(props: IHeaderProps) {
    super(props);
    this.level = props.level;
  }
}

export default Token;
