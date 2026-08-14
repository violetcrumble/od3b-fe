// Inserts Cloudinary's auto-quality/auto-format transform into a stored media URL.
// Needed anywhere a Cloudinary URL is used directly (og:image, JSON-LD) since those
// bypass next/image's own optimizer, which only re-compresses images it serves itself.
export default function cloudinaryOptimize(url) {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url;
  return url.replace('/upload/', '/upload/q_auto,f_auto/');
}

// Social cards expect 1.91:1 (1200×630); recipe photos are stored square, so crop
// to the top band — rim and garnish live there, stems don't matter. (g_auto tested
// worse: its subject detection picked the glass stem over the drink.)
export function cloudinarySocialImage(url) {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url;
  return url.replace('/upload/', '/upload/c_fill,g_north,w_1200,h_630,q_auto,f_auto/');
}
