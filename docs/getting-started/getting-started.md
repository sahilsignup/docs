---
layout: default
title: Getting Started
description: Complete, flexible, extensible, and easy-to-use page transition library for your server-side rendered website
has_children: true
nav_order: 1
permalink: /getting-started
has_toc: false
---

# Getting Started

Swup is an extensible and easy-to-use page transition library for server-side rendered websites. It
handles the complete lifecycle of a page visit by intercepting link clicks, loading the new page in the
background, replacing the content and transitioning between the old and the new page.

Its goal is to make adding transitions to a site as simple as possible, while providing lots of
other quality-of-life improvements.

## Features

- 🎯 Extremely [easy to use](/getting-started/example), even for beginners
- ✨ Auto-detects [CSS transitions](/getting-started/how-it-works) for perfect timing
- 🔗 Updates URLs and preserves native browser history behavior
- 📦 Uses a [cache](https://swup.js.org/api/cache) to speed up subsequent page loads
- 💡 Offers [events](https://swup.js.org/events) for hooking into the lifecycle
- 🔌 Has a powerful [plugin system](https://swup.js.org/plugins) and many official and third-party plugins
- 🎨 Provides ready-to-go [themes](https://swup.js.org/themes) to get started quickly

## Plugins

Swup's core is very small by design. All extended features can be added via [plugins]({{ "/plugins" | relative_url }}). Some examples:

- Install a [progress bar]({{ "/plugins/progress-plugin" | relative_url }})
- Enable [smooth scrolling]({{ "/plugins/scroll-plugin" | relative_url }}) between visits
- Update [meta tags and stylesheets]({{ "/plugins/head-plugin" | relative_url }}) after page loads
- Add support for [preloading pages]({{ "/plugins/preload-plugin" | relative_url }}) in the background
- Perform your [animations in JS]({{ "/plugins/js-plugin" | relative_url }}) instead of CSS transitions
- Animate [form submissions]({{ "/plugins/forms-plugin" | relative_url }})
- Improve [screen reader accessibility]({{ "/plugins/a11y-plugin" | relative_url }})
- Get help in [debug mode]({{ "/plugins/debug-plugin" | relative_url }})

Check out the list of [all official plugins]({{ "/plugins" | relative_url }}) as well as [third-party integrations]({{ "/third-party-integrations" | relative_url }}).

## Having trouble?

If you're having trouble implementing swup, check out [Common Issues]({{ "/other/common-issues" | relative_url }}), look at [closed issues](https://github.com/gmrchk/swup/issues?q=is%3Aissue+is%3Aclosed) or create a [new discussion](https://github.com/swup/swup/discussions/new).

## CLI

Like to make sure your site has no bugs? You can use swup's [CI/CD integration]({{ "/ci-cd" | relative_url }}) for that, or use the official [swup CLI]({{ "/cli" | relative_url }}) to check your site manually.

## Want to Contribute?

Become a sponsor on [Open Collective](https://opencollective.com/swup) or support development through
[GitHub sponsors](https://github.com/sponsors/gmrchk).

<p><div style="position:relative;height:35px;width:107px"><iframe src="https://github.com/sponsors/gmrchk/button" title="Sponsor gmrchk" height="35" width="107" style="border: 0;"></iframe></div></p>

<a href="https://opencollective.com/swup/donate" class="no-link"><img src="https://opencollective.com/swup/donate/button@2x.png?color=blue" width="220" /></a>

## License

Swup is released under the [MIT license](https://github.com/swup/swup/blob/master/LICENSE).
