# Resettable — original website with Phase 4 app integration

The professional-services website remains a single page (`index.html`) with its
original photographic hero, services, Quick/Full Reset, How It Works, FAQs,
combined About/enquiry section and original Formspree form. The About section
retains its Islington/North London location badge; its DBS badge is removed.
The compact footer has Get in Touch (email and telephone) on the left and
Follow Us (Instagram, Facebook and WhatsApp icons) on the right, stacked on mobile,
with a centred copyright line below.
The compact cream-and-green app panel sits immediately above the footer,
with Learn More and Open the App links.

`get-the-app.html` explains checklists, goals, timed Reset Sessions and progress,
browser access, and expandable iPhone/Android installation instructions.
The shared original navigation adds only Resettable App. Inner-page links return
to the Home sections; all enquiry links go to Home `#request`. The PWA remains
https://sinphz.github.io/resettable-app/.

## Preview locally

```sh
cd /home/odinsinphz/repos/Resettable
python3 -m http.server 8098 --bind 127.0.0.1
```

Open http://127.0.0.1:8098/ and http://127.0.0.1:8098/get-the-app.html.
Stop with Ctrl+C. No packages or build process are needed.

Check desktop/tablet/phone, landscape, the 850/851px drawer transition, text zoom,
keyboard focus/Tab/Escape, disclosures, and reduced motion. Visit each Home anchor
(`#top`, `#services`, `#process`, `#faq`, `#request`, `#resettable-app`) directly,
refresh it, and check Back/Forward. Quick/Full cards preselect the original form
field on Home. Test the app-page logo, services and enquiry return links.
Physical iPhone Safari and Android Chrome installation testing remains necessary.
Do not submit a real enquiry during local review.

## Form, links and publication

The original form fields, choices, required attributes, subject and POST endpoint
are unchanged: `https://formspree.io/f/mnpalzwv`. No automatic submission or
cross-page enquiry-selection code is used. The original Home URL/anchors and
existing external/social links are retained. No restructuring redirects remain.

Only Home and the app information page are in the sitemap. The unwanted separate
About/enquiry pages and custom restructuring 404 page are excluded from publication.
The historical `index.html.backup-20261011-before-restore` remains in Git history
but is excluded from published files because its introductory offer is exclusively
for social media. Do not reintroduce that offer on the website.

`CNAME`, `robots.txt`, domain settings, Firebase and the separate Resettable app
repository remain unchanged. Ignored `future/` files are unrelated and untouched.

## Preserved local versions

- Original Phase 4 checkpoint: `backup/before-four-page-redesign`,
  `4948fefeaf8f543d3692e621c8ea24834ff4e522`.
- Unfinished redesign: `preserve/unfinished-four-page-redesign`,
  `d34baf6e8e3c3668862460fe4cedc133ab77db64`.
- Complete state immediately before this restoration:
  `preserve/before-phase4-original-restoration`,
  `27751e0041ab0b90a2bd8057c27a176b10a40ed2`.

The final Phase 4 website design is approved for publication from `main` through
the existing GitHub Pages workflow. Preserve all backup branches and keep the
separate Resettable app repository, Firebase and domain settings unchanged.
