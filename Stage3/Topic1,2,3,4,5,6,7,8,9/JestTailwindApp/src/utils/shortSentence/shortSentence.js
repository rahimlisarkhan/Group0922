export const shortSentence = (sentence, maxLength) => {
  if (sentence.length <= maxLength) {
    return sentence;
  }

  const result = sentence.slice(0, maxLength).trim();

  return result + '...';
};
