
export class TextHelper {

  static truncate(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.trim().slice(0, maxLength) + '...';
  }

  static capitalize(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  static toTitleCase(text) {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static toSentenceCase(text) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

}