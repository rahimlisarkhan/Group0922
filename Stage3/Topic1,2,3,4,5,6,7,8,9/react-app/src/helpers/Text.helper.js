
export class TextHelper {

  static truncate(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.trim().slice(0, maxLength) + '...';
  }

}