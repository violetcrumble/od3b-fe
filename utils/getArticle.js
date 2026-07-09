export default function getArticle(word) {
  return /^[aeiou]/i.test(word.trim()) ? 'an' : 'a';
}
