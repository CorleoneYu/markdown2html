import { HeaderToken } from './Token';

export default class Renderer {
  public heading = (token: HeaderToken) => {
    const level = token.level;
    return `<h${level}>${token.text}</h${level}>\n`;
  };
}
