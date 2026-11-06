import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

if (fs.existsSync(distDir)) {
  const indexHtml = path.join(distDir, 'index.html');
  if (fs.existsSync(indexHtml)) {
    const routes = [
      'privacy-policy',
      'terms-and-conditions',
      'privacy',
      'terms',
      'sms-terms',
      'case-studies',
      'company',
      'appointments',
      'lead-gen',
      'our-companies',
      'our-services',
    ];

    for (const route of routes) {
      const targetDir = path.join(distDir, route);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.copyFileSync(indexHtml, path.join(targetDir, 'index.html'));
      // Also provide a .html version for servers without trailing slash rewriting
      fs.copyFileSync(indexHtml, path.join(distDir, `${route}.html`));
    }

    console.log('Post-build: static SPA fallback pages generated for all routes.');
  }
}
