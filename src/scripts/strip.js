import he from 'he';

export default (text) => {
  const decoded = he.decode(text);

  const bbcodeLess = decoded
    .replace(/\[quote(=\\?"?(.+?)\\?"?)?(:[a-z0-9]+)?]/g, ">> ") // first quote
    .replace(/\[url=(.+?)]/g, '') // urls have all sorts of symbols
    .replace(/\[\/?[a-zA-Z0-9=#]+:[a-z0-9]+\]/g, ' ') // rest of tags
    .replace(/\[\/?(url|color|size|move|font)(=(.+?))?]/g, '') // other shit im so tired of this

  const htmlLess = bbcodeLess
    .replace(/<!-- (.+?) -->/g, '') // comment tags
    .replace(/<img src="{SMILIES_PATH}\/(.+?)" alt="(.+?)" title="(.+?)" \/>/g, '$2') // emoji images
    .replace(/<br>/g, '') // line breaks (they already have \n)
    .replace(/<a href="mailto:REDACTED@REDACTED">(REDACTED@REDACTED)<\/a>/g, '$1') // emails
    .replace(/<a class=\\?"(.*?)\\?" href=\\?"(.*?)\\?">(.*?)<\/a>/g, '$2') // other links

  return htmlLess;
};
