export function getWhatsAppUrl(phone: string, text: string, params: string = "") {
  // We can use a client-side check if we want, but since this is SSR, it's tricky.
  // Instead, the best modern approach for Android deep linking is the intent URL.
  // However, intent:// ONLY works on Android. On iOS and Desktop it breaks.
  // A safe middle ground is to keep wa.me or api.whatsapp.com for standard links,
  // but if we are confident they are Indian farmers on Android, we can conditionally
  // render the intent URL on the client, or just use api.whatsapp.com which has better universal routing.
  
  // Actually, the UX analysis specifically asked to implement the fallback handler.
  const encodedText = encodeURIComponent(text);
  const isAndroid = typeof window !== 'undefined' && /Android/i.test(navigator.userAgent);
  
  if (isAndroid) {
    return `intent://send?phone=${phone}&text=${encodedText}${params ? '&'+params : ''}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
  }
  
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}${params ? '&'+params : ''}`;
}
