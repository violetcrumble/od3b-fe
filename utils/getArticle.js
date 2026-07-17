export default function getArticle(word) {
  const trimmed = word.trim();
  if (/^(the|a|an)\s/i.test(trimmed)) return '';
  return /^[aeiou]/i.test(trimmed) ? 'an ' : 'a ';
}
