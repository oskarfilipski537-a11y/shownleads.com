import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

if (fs.existsSync(distDir)) {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const templateHtml = fs.readFileSync(indexHtmlPath, 'utf8');

    // Prerendered content for SMS Terms & Conditions
    const termsStaticContent = `
<div id="root">
  <div class="min-h-screen bg-[#07080c] text-[#fffdf9] pt-24 pb-20 font-sans">
    <div class="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
      <div class="mb-12">
        <h1 class="text-3xl sm:text-5xl uppercase tracking-wider mb-4 font-bold">SMS Terms &amp; Conditions</h1>
        <p class="text-xs text-gray-400 font-mono">Last updated: November 12, 2026</p>
      </div>
      <div class="space-y-8 text-sm leading-relaxed text-gray-300">
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Program description</h2>
          <p class="text-base text-white mb-2">ShownLeads (operated by Oskar Jan Filipski) sends appointment-related text messages to business owners who book a strategy call with us through our booking form and agree to receive texts.</p>
          <p>Messages are confirmations and reminders about the call you booked, up to 5 per booking. <strong class="text-white font-semibold">We do not send marketing or promotional messages through this program, we do not text homeowners or consumers through it, and we do not send messages on behalf of other businesses.</strong></p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">How to opt in</h2>
          <p>You opt in by entering your mobile number on our booking form and ticking the unchecked consent box next to the text-message agreement. <strong class="text-white font-semibold">Consent is not a condition of any purchase.</strong></p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Message frequency</h2>
          <p>Message frequency varies. You will receive up to 5 messages per booking.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Costs</h2>
          <p>Message and data rates may apply, depending on your mobile plan.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Opt out</h2>
          <p>Reply <strong class="text-white font-mono font-bold">STOP</strong> to any message to cancel. You will receive one confirmation text and no further messages. You can opt back in at any time by booking again.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Help</h2>
          <p>Reply <strong class="text-white font-mono font-bold">HELP</strong> to any message, or contact us at <a href="mailto:info@shownleads.com" class="text-blue-400 underline">info@shownleads.com</a> or <a href="tel:+353830236881" class="text-white underline">+353 83 023 6881</a>.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Example Messages</h2>
          <div class="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 font-mono text-xs text-gray-200">
            <p>ShownLeads: Hi Mike, your strategy call is confirmed for Fri, Nov 13 at 3:00 PM CT. Reply STOP to opt out, HELP for help.</p>
            <p>ShownLeads: Reminder: your strategy call with us starts in 1 hour. Need to reschedule? Reply here. Reply STOP to opt out.</p>
          </div>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Carriers</h2>
          <p>Carriers and ShownLeads are not liable for delayed or undelivered messages.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Privacy</h2>
          <p class="mb-2">Your information is handled as described in our <a href="/privacy-policy" class="text-blue-400 underline">Privacy Policy</a>.</p>
          <p class="p-3.5 rounded-xl bg-white/[0.04] border border-blue-500/20 text-xs text-blue-100">No mobile information is shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are not shared with any third parties.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Contact</h2>
          <p><strong class="text-white">Oskar Jan Filipski trading as ShownLeads</strong></p>
          <p>2 Windmill Close, Cashel, Co. Tipperary, E25 AV62, Ireland.</p>
          <p>Phone: +353 83 023 6881 | Email: info@shownleads.com</p>
        </section>
      </div>
    </div>
  </div>
</div>`;

    // Prerendered content for Privacy Policy
    const privacyStaticContent = `
<div id="root">
  <div class="min-h-screen bg-[#07080c] text-[#fffdf9] pt-24 pb-20 font-sans">
    <div class="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
      <div class="mb-12">
        <h1 class="text-3xl sm:text-5xl uppercase tracking-wider mb-4 font-bold">Privacy Policy</h1>
        <p class="text-xs text-gray-400 font-mono">Last updated: November 12, 2026</p>
      </div>
      <div class="space-y-8 text-sm leading-relaxed text-gray-300">
        <section>
          <p class="text-base text-white">This policy explains how ShownLeads, a trading name of Oskar Jan Filipski (&ldquo;we&rdquo;, &ldquo;us&rdquo;), collects and uses personal information when you visit shownleads.com or our booking page, or book a strategy call through our booking form.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Who we are</h2>
          <p><strong class="text-white">Oskar Jan Filipski trading as ShownLeads</strong>, 2 Windmill Close, Cashel, Co. Tipperary, E25 AV62, Ireland. Contact: info@shownleads.com, +353 83 023 6881.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Information we collect</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Contact Data:</strong> Name, email address and mobile phone number you submit in our booking form.</li>
            <li><strong>Call Details:</strong> The date and time of the strategy call you book and the answers you give on the booking form.</li>
            <li><strong>Technical Data:</strong> Basic technical data such as browser type, operating system, and pages visited.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">How we use it</h2>
          <ul class="list-disc pl-5 space-y-1">
            <li>To book your strategy call and to contact you about it.</li>
            <li>To send confirmations and reminders about your booked call by text message, if you agreed to receive them.</li>
            <li>To answer your questions and to operate and improve our website.</li>
          </ul>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Text messaging (SMS)</h2>
          <p class="mb-2">If you tick the consent box on our booking form, we send text messages about the strategy call you booked, such as confirmations and reminders. Message frequency varies and is up to 5 messages per booking. Message and data rates may apply. Reply STOP at any time to opt out, or HELP for help. Consent to receive texts is not a condition of any purchase.</p>
          <p class="p-3.5 rounded-xl bg-white/[0.04] border border-blue-500/20 text-xs text-blue-100">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties. We use your mobile number only to send the messages described above.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Sharing</h2>
          <p>We do not sell your personal information. We share it only with service providers who host our systems, process bookings and deliver messages on our behalf, under confidentiality obligations. We may disclose information if the law requires it.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Retention and security</h2>
          <p>We keep your information only as long as needed for the purposes above or as the law requires, and protect it with reasonable technical and organisational measures.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Your rights</h2>
          <p>You can ask us to access, correct, or delete your personal information, or object to its use. We are based in Ireland and handle personal data in line with applicable data protection law, including GDPR where it applies. Email info@shownleads.com to make a request.</p>
        </section>
        <section>
          <h2 class="text-xl uppercase font-semibold text-white mb-2">Changes</h2>
          <p>We may update this policy. The date at the top shows when it last changed.</p>
        </section>
        <section>
          <p class="text-xs text-gray-400">ShownLeads is a trading name of Oskar Jan Filipski, 2 Windmill Close, Cashel, Co. Tipperary, E25 AV62, Ireland. Phone: +353 83 023 6881.</p>
        </section>
      </div>
    </div>
  </div>
</div>`;

    const routes = [
      { name: 'privacy-policy', staticHtml: templateHtml.replace('<div id="root"></div>', privacyStaticContent) },
      { name: 'privacy', staticHtml: templateHtml.replace('<div id="root"></div>', privacyStaticContent) },
      { name: 'terms-and-conditions', staticHtml: templateHtml.replace('<div id="root"></div>', termsStaticContent) },
      { name: 'terms', staticHtml: templateHtml.replace('<div id="root"></div>', termsStaticContent) },
      { name: 'sms-terms', staticHtml: templateHtml.replace('<div id="root"></div>', termsStaticContent) },
      { name: 'case-studies', staticHtml: templateHtml },
      { name: 'company', staticHtml: templateHtml },
      { name: 'appointments', staticHtml: templateHtml },
      { name: 'lead-gen', staticHtml: templateHtml },
      { name: 'our-companies', staticHtml: templateHtml },
      { name: 'our-services', staticHtml: templateHtml },
    ];

    for (const route of routes) {
      const targetDir = path.join(distDir, route.name);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), route.staticHtml);
      // Also provide a .html version for direct file servers
      fs.writeFileSync(path.join(distDir, `${route.name}.html`), route.staticHtml);
    }

    console.log('Post-build: static prerendered HTML generated for legal routes & SPA fallbacks created.');
  }
}
