function parseTags(str = '') {

  if(!str?.trim()) return [];

  return str
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

export default parseTags;
