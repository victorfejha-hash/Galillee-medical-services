Galillee Medical Center

«Modern healthcare website for Galillee Medical Center»

A professional, mobile-first medical website designed to provide visitors with information about Galillee Medical Center, its services, contact options, location, and appointment/inquiry channels.

The project should prioritize trust, accessibility, reliability, performance, and professional healthcare design.

---

Project Vision

Galillee Medical Center should have a website that feels like a legitimate modern healthcare facility rather than a basic static webpage.

The experience should combine:

- Professional healthcare branding
- Smooth animations
- Modern responsive design
- Fast performance
- Accessible navigation
- Clear contact options
- Reliable WhatsApp integration
- Mobile-first usability
- Professional loading and transition effects

The website should feel:

Trustworthy + Modern + Professional + Human + Technological

---

1. Brand

Business Name

Galillee Medical Center

Website Purpose

The website should help visitors:

- Learn about the medical center
- Understand available services
- Contact the facility
- Contact the responsible representative
- Make inquiries
- Request appointments where supported
- Find the facility
- Access WhatsApp easily
- Understand important healthcare information

---

2. Personal Contact

For website inquiries and direct communication, visitors should be able to identify the responsible contact person.

Contact Person: Mataa

The website should clearly indicate the appropriate contact person where relevant.

Do not expose private information unnecessarily.

If a phone number or WhatsApp number is stored in the application's configuration, use that configured value rather than hard-coding different numbers throughout the application.

---

3. Website Opening Experience

Create a professional opening animation when the website first loads.

Sequence

1. Display the Galillee Medical Center logo.
2. Use a clean healthcare-themed background.
3. Animate the logo using a subtle fade and scale effect.
4. Add a subtle medical animation such as:
   - heartbeat line
   - medical cross
   - soft pulse
   - gentle light movement
5. Play the welcome message:

«"Welcome to Galillee Medical Center, your health is our priority."»

6. Transition smoothly into the homepage.
7. Keep the intro approximately 2–4 seconds.
8. Provide a Skip Intro button.
9. Do not replay unnecessarily during normal navigation.

The animation must feel premium and healthcare-oriented.

Avoid excessive effects.

---

4. Voice / Audio

The welcome voice should be:

- Clear
- Calm
- Friendly
- Professional
- Suitable for a healthcare facility

Browser autoplay restrictions must be respected.

If the browser prevents automatic audio:

- Do not break the website.
- Provide a suitable fallback.
- Allow the visitor to enable audio manually.

Include:

- Mute/unmute control
- Audio preference storage
- Accessibility-friendly behavior

The voice must never interfere with screen readers.

---

5. Animation System

Use a consistent animation system throughout the website.

Recommended animations:

- Fade-in
- Slide-up
- Scale-in
- Smooth page transitions
- Scroll reveal
- Button micro-interactions
- Card hover effects
- Image reveal effects
- Navigation transitions
- Loading animations
- Subtle medical-themed background motion

Use "IntersectionObserver" for scroll-triggered animations where appropriate.

Prefer CSS animations where possible.

Avoid unnecessary animation libraries.

---

6. Reduced Motion

Respect users who prefer reduced motion.

Implement:

@media (prefers-reduced-motion: reduce) {
  /* simplify or disable non-essential animations */
}

Users who disable animations should still receive the complete website functionality.

---

7. Homepage Hero

Create a strong healthcare-focused hero section.

It should include:

- Galillee Medical Center branding
- Clear headline
- Supporting description
- Primary contact/appointment CTA
- Services CTA
- Professional medical imagery
- Subtle animated background
- Responsive layout

The visitor should understand what the website is about within a few seconds.

---

8. Navigation

Create a responsive navigation system.

Recommended sections:

- Home
- About
- Services
- Staff/Doctors, if information exists
- Contact
- Location
- Appointment/Inquiry

On mobile:

- Use a clean hamburger menu.
- Animate the menu opening and closing.
- Make all navigation links easy to tap.

Do not allow navigation elements to overlap content.

---

9. Medical Services

Display existing medical services using professional cards.

Each card may contain:

- Medical icon
- Service name
- Description
- Optional CTA

Cards should have subtle interactions.

Do not invent medical services.

Only display services supported by the existing application/business information.

---

10. Trust & Professionalism

Create a section that communicates the facility's professional character.

Possible information:

- Patient-focused care
- Professional environment
- Healthcare services
- Convenient communication
- Accessibility

Do not invent:

- Certifications
- Awards
- Doctors
- Statistics
- Qualifications
- Medical claims
- Partnerships
- Accreditations

Only use verified information already provided by the project.

---

11. WhatsApp Integration

IMPORTANT

The WhatsApp button currently needs to be audited and fixed.

It must work correctly when someone receives and opens the website through a shared link.

Use a proper WhatsApp URL structure:

https://wa.me/INTERNATIONAL_NUMBER

For example:

https://wa.me/256XXXXXXXXX

Use the actual configured Galillee Medical Center number.

Do not invent or hard-code an unrelated number.

---

WhatsApp Requirements

The WhatsApp button must:

- Be fully clickable
- Work on Android
- Work on iPhone
- Work when WhatsApp is installed
- Gracefully fall back to the browser/WhatsApp Web where appropriate
- Work when the website is opened from a shared URL
- Not depend on localhost
- Not depend on a development server
- Use the correct international phone-number format
- Avoid malformed URLs
- Avoid broken JavaScript handlers

If a pre-filled message is used, URL-encode it correctly.

Example:

https://wa.me/256XXXXXXXXX?text=Hello%20Galillee%20Medical%20Center

The entire floating WhatsApp button should be clickable, not only the icon.

---

12. Contact Section

Provide clear contact options.

Where information exists, include:

- WhatsApp
- Phone
- Email
- Location
- Opening hours
- Appointment/inquiry form

Make contact buttons particularly easy to use on mobile devices.

Clearly identify:

Contact Person: Mataa

Do not expose private information that is not intended for public visitors.

---

13. Location

If the correct physical location is available, provide:

- Address
- Map/location button
- Directions
- Optional Google Maps integration

Never invent the medical center's address.

---

14. Appointment / Inquiry System

Where technically appropriate, provide a simple inquiry or appointment interface.

Potential fields:

- Name
- Phone number
- Service/inquiry
- Preferred date
- Preferred time
- Message

Do not collect unnecessary sensitive medical information.

The form should clearly explain how submitted information will be used.

---

15. Mobile-First Design

The website must work properly on:

- Android phones
- iPhones
- Tablets
- Laptops
- Desktop computers

Prioritize mobile usability.

Check:

- Button sizes
- Text readability
- Navigation
- Image scaling
- Section spacing
- Animation performance
- Floating buttons
- Forms
- Horizontal overflow

There must be no accidental horizontal scrolling.

---

16. Loading Screen

Create a lightweight branded loading experience.

Example:

Galillee Medical Center Logo
        ↓
Subtle pulse
        ↓
Loading indicator
        ↓
Homepage

Do not make the loading screen unnecessarily long.

The website should become interactive as quickly as possible.

---

17. Footer

Create a professional footer containing:

- Galillee Medical Center
- Navigation links
- Contact information
- WhatsApp
- Location
- Social media links if available
- Contact person where appropriate
- Copyright information

---

18. Accessibility

Follow accessibility best practices.

Implement:

- Semantic HTML
- Proper heading hierarchy
- Image alt text
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Accessible forms
- ARIA labels where appropriate
- Good color contrast
- Reduced-motion support

Do not rely on color alone to communicate information.

---

19. Performance

Animations must never make the website slow.

Optimize:

- Images
- JavaScript
- CSS
- Fonts
- Assets
- Animation performance
- Loading behavior

Avoid unnecessary dependencies.

Prefer:

CSS → lightweight JavaScript → libraries only when necessary

The website should perform well on lower-end Android phones and slower internet connections.

---

20. SEO

Improve the website's SEO.

Include:

- Proper page title
- Meta description
- Correct heading structure
- Favicon
- Theme color
- Open Graph metadata
- Social sharing metadata
- Descriptive image alt text

When the website is shared on WhatsApp or social media, the preview should look professional.

---

21. Security & Reliability Audit

Before considering the upgrade complete, inspect the entire application.

Check for:

- Broken links
- Broken buttons
- JavaScript errors
- Console errors
- Missing assets
- Incorrect file paths
- Invalid URLs
- Localhost references
- Broken forms
- Broken WhatsApp links
- Broken social links
- Mobile layout problems

Fix discovered problems instead of simply reporting them.

---

22. Code Quality

Keep the code:

- Organized
- Readable
- Maintainable
- Responsive
- Modular where appropriate
- Properly commented where useful

Do not duplicate large blocks of code unnecessarily.

Do not introduce dependencies unless they provide real value.

Preserve existing functionality.

---

23. Existing Information Rule

Before adding new content:

1. Inspect the existing project.
2. Identify existing business information.
3. Reuse existing content.
4. Do not invent medical claims.
5. Do not invent doctors.
6. Do not invent certifications.
7. Do not invent addresses.
8. Do not invent statistics.
9. Do not invent services.

If information is missing, use a neutral placeholder or leave the section out rather than creating fictional business information.

---

24. Responsive Testing

Test the website at different screen sizes.

At minimum test:

- Small Android phone
- Large Android phone
- Tablet
- Desktop

Check:

- Navigation
- Hero section
- Services
- Forms
- Footer
- WhatsApp button
- Animations
- Images
- Typography

---

25. Final Design Direction

The final design should feel like:

«Modern private healthcare facility + trustworthy medical brand + premium technology»

Use:

- Clean layouts
- Professional typography
- Consistent icons
- Soft shadows
- Professional cards
- Subtle gradients
- Smooth transitions
- Carefully controlled animations
- Strong visual hierarchy

Avoid:

- Gaming-style effects
- Excessive neon
- Excessive glassmorphism
- Flashing animations
- Unnecessary 3D effects
- Cluttered layouts
- Generic AI-looking designs

---

26. Development Workflow

Before modifying the project:

Step 1

Inspect the complete existing application.

Step 2

Identify:

- Framework
- Entry points
- Components
- CSS
- JavaScript
- Assets
- Configuration
- Contact information

Step 3

Create a safe backup before major modifications.

Step 4

Upgrade the design systematically.

Step 5

Implement the animation system.

Step 6

Implement the opening experience.

Step 7

Fix WhatsApp.

Step 8

Improve mobile responsiveness.

Step 9

Audit accessibility.

Step 10

Audit performance.

Step 11

Test all major links and buttons.

Step 12

Remove errors and unused code.

Step 13

Test the production/shared version of the website.

---

27. Definition of Done

The upgrade is complete only when:

- [ ] Website loads correctly
- [ ] Logo intro works
- [ ] Welcome experience works
- [ ] Audio fallback works
- [ ] Skip Intro works
- [ ] Animations work smoothly
- [ ] Reduced-motion mode works
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] Services display correctly
- [ ] Contact information works
- [ ] WhatsApp works from a shared/public URL
- [ ] Phone links work
- [ ] Forms work
- [ ] Location links work if configured
- [ ] No console errors remain
- [ ] No broken assets remain
- [ ] No localhost dependencies remain
- [ ] Website works on mobile
- [ ] Website works on desktop
- [ ] SEO metadata exists
- [ ] Social sharing preview is configured
- [ ] Accessibility has been checked
- [ ] Performance has been checked

---

Final Objective

Build Galillee Medical Center into a polished, trustworthy, modern healthcare web experience.

The visitor should be able to:

Open → Understand → Trust → Contact → Act

The design should be impressive without becoming distracting.

The animations should enhance the experience rather than slow it down.

The website should work reliably even when opened from a link shared through WhatsApp or another platform.

Primary contact person: Mataa

Business: Galillee Medical Center
