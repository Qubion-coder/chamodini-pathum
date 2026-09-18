type SheetName = 'rsvp' | 'wishes';

type SheetPayload = Record<string, string | number>;

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8ZTJJSpbs2wlor5nHmfXzB0INA-Q1Tm_DngU1pMy4Akf7QJPSRXPxyMNDaJjWUVk2Ng/exec";

export async function submitToGoogleSheet(sheet: SheetName, payload: SheetPayload): Promise<void> {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error('Missing GOOGLE_SCRIPT_URL');
  }

  const body = new URLSearchParams();
  body.append('sheet', sheet);
  body.append('payload', JSON.stringify(payload));

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
  
  // Simulate network delay for UI preview
  await new Promise(resolve => setTimeout(resolve, 800));
}
