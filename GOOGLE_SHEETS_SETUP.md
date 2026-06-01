# 📊 Google Sheets Setup — KrishiGears Lead Capture

Capture every **Product Enquiry** and **Dealer Application** into your own Google Sheets — no developer needed. Total setup: ~10 minutes.

You'll create **two separate Google Sheets** so leads stay organised:
1. **KrishiGears – Enquiries** (product enquiries from website)
2. **KrishiGears – Dealer Applications** (Become-a-Dealer form)

Repeat the same steps for each sheet. The Apps Script code below works for both — just keep them in separate sheets.

---

## ▶️ Step 1 — Create Sheet #1: Enquiries

1. Open https://sheets.new (creates a blank Google Sheet)
2. Rename it: **KrishiGears – Enquiries**
3. In **Row 1** (header), paste these column titles:

```
Received At	Lead ID	Name	Phone	Email	Location	Product	Message
```

> Tip: Copy the line above, click on cell **A1** in your Sheet, and paste — Google Sheets will split it into separate columns automatically.

---

## ▶️ Step 2 — Add the Apps Script

1. In the open Sheet, click **Extensions → Apps Script**
2. Delete any default code, then paste this exactly:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(data.created_at || new Date()),
      data.id || "",
      data.name || data.full_name || "",
      data.phone || "",
      data.email || "",
      data.location || (data.city ? (data.city + (data.state ? ", " + data.state : "")) : ""),
      data.product || data.business_name || "",
      data.message || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the **floppy-disk save icon** (or `Ctrl+S`). Name the project: *KrishiGears Webhook*.

---

## ▶️ Step 3 — Deploy as Web App

1. Top-right click **Deploy → New deployment**
2. Click the **gear icon** ⚙️ next to "Select type" → choose **Web app**
3. Settings:
   - **Description**: `KrishiGears enquiry webhook`
   - **Execute as**: *Me (your-email@gmail.com)*
   - **Who has access**: **Anyone** ← important so our website can post
4. Click **Deploy**
5. The first time, Google asks you to **authorize**. Click "Authorize access" → choose your Google account → click "Advanced" → "Go to KrishiGears Webhook (unsafe)" → "Allow". (This is normal — Google warns for unverified personal apps.)
6. Copy the **Web app URL** that appears. It looks like:
   ```
   https://script.google.com/macros/s/AKfycb…………/exec
   ```
   👉 Save this URL — you'll send it to us. Let's call it **URL_ENQUIRY**.

---

## ▶️ Step 4 — Repeat for Sheet #2: Dealer Applications

1. Open https://sheets.new again
2. Rename: **KrishiGears – Dealer Applications**
3. In **Row 1** header:

```
Received At	Lead ID	Full Name	Phone	Email	Business Name	City	State	Pincode	Years in Business	Current Products	Message
```

4. Extensions → Apps Script → paste **this** code (slightly different so dealer fields land in correct columns):

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(data.created_at || new Date()),
      data.id || "",
      data.full_name || data.name || "",
      data.phone || "",
      data.email || "",
      data.business_name || "",
      data.city || "",
      data.state || "",
      data.pincode || "",
      data.years_in_business || "",
      data.current_products || "",
      data.message || ""
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Save → Deploy → New deployment → Web app → Anyone access → Deploy → Authorize.
6. Copy the URL. This is **URL_DEALER**.

---

## ▶️ Step 5 — Send the URLs to me

Reply with both URLs, like this:

```
URL_ENQUIRY = https://script.google.com/macros/s/AKfycb………/exec
URL_DEALER  = https://script.google.com/macros/s/AKfycb………/exec
```

I'll paste them into the backend config and from that moment on:
- Every **Product Enquiry** form submission → appended as a new row to your *KrishiGears – Enquiries* sheet
- Every **Become-a-Dealer** form submission → appended as a new row to your *KrishiGears – Dealer Applications* sheet

Mongo + admin dashboard continue to work exactly as before, so you have **two backups** of every lead.

---

## 🧪 How to test
After I configure your URLs, submit a test enquiry on the website. Within ~5 seconds the row should appear in your Sheet. If you ever change your mind, **redeploy = New version** in Apps Script and send me the new URL.

## ❓ FAQ

**Q: Is "Anyone" access dangerous?**
No — the URL is unguessable and only accepts POSTed JSON; the script only does `appendRow()`. Worst case anyone with the URL could spam-add rows, which we mitigate by validating shape and never executing input.

**Q: Will it slow down the form?**
No. The webhook runs in the background (fire-and-forget). The user's form submits in ~200ms regardless.

**Q: Can I see leads even if Sheets is down?**
Yes — every lead is also stored in MongoDB and visible in the **Admin Dashboard** at `/admin`.
