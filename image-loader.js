// Custom next/image loader: serves responsive sizes directly from Cloudinary
// instead of Vercel's image optimizer (which bills per optimized image).
//
// - Cloudinary URLs get a CHAINED transformation appended after any transforms
//   already stored in the URL (e.g. the e_trim/w_300 affiliate bottle photos),
//   so existing crops are preserved. c_limit prevents upscaling beyond the
//   source or an earlier derived size.
// - Local assets (/logo.svg etc.) and non-Cloudinary remotes (Amazon product
//   images) pass through untouched — they never needed optimizing.
export default function cloudinaryImageLoader({ src, width }) {
  if (!src.includes('res.cloudinary.com') || !src.includes('/upload/')) {
    return src;
  }

  const [prefix, rest] = src.split('/upload/');
  const transform = `w_${width},c_limit,q_auto,f_auto`;

  // rest is "[existing/transforms/]v12345/filename.ext" — append our
  // transform as the last chained component, just before the version segment.
  const versionMatch = rest.match(/(^|\/)(v\d+\/[^/]+)$/);
  if (!versionMatch) {
    // Unexpected URL shape; transform-first is still valid Cloudinary.
    return `${prefix}/upload/${transform}/${rest}`;
  }

  const tail = versionMatch[2];
  const existing = rest.slice(0, rest.length - tail.length).replace(/\/$/, '');
  return `${prefix}/upload/${existing ? `${existing}/` : ''}${transform}/${tail}`;
}
