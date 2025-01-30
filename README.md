# Next.js 15 router.push Issue

This repository demonstrates a problem encountered when using the `router.push` method in Next.js 15 to navigate back to the homepage.  The issue manifests as incomplete page rendering or a blank screen after clicking the button on the About page.

The issue likely stems from Next.js 15's improved routing and optimizations which may cause timing issues or unexpected behavior with immediate redirects. The solution attempts to address this using async/await to ensure the navigation is complete before further actions.