---
title: Home
type: page
sections:
  - type: section
    width: default
    gutter: default
    mode: default
    style: default
    spaceBefore: default
    spaceAfter: default
    headline:
      text: Another headline
      sub: Subheadline
    content:
      align: left
    components:
      - type: cta
        align: left
        Type: cta
        headline: Test!
        sub: With a subheadline
        text: And even some nice text!
        button:
          - label: Test
            variant: secondary
            size: medium
            Type: button
            target: "#"
            disabled: "false"
      - type: hero
        height: default
        textbox: true
        textPosition: below
        Type: hero
        image:
          indent: left
          src: >-
            https://design-system.agency/static/img/deco/contact-us-person-smart.png
          srcMobile: >-
            https://design-system.agency/static/img/deco/contact-us-person-smart.png
          srcTablet: >-
            https://design-system.agency/static/img/deco/contact-us-person-smart.png
          srcDesktop: >-
            https://design-system.agency/static/img/deco/contact-us-person-smart.png
        headline: Welcome to this demo!
      - type: features
        layout: largeTiles
        style: stack
        Type: features
        features:
          - title: Title 1
            text: Text 1
            cta:
              target: "#"
              label: See more
          - title: Title 2
            text: Text 2
    sub: Subheadline
  - type: section
    width: default
    style: default
    backgroundColor: default
    spaceBefore: default
    spaceAfter: default
    Type: section
    content:
      width: unset
      align: center
      gutter: default
      mode: tile
    components:
      - type: teaser_card
        Type: teaser-card
        text: Teaser 1
        label: Label 1
        target: "#"
        headline: Headline 1
      - type: teaser_card
        Type: teaser-card
        headline: Headline 2
        text: Teaser 2
        label: Label 2
        target: "#"
      - type: testimonials
        Type: testimonials
        testimonials:
          - quote: >-
              Systemics's Design System transformed our development process. The
              consistency it introduced across our platforms not only saved us
              time but also boosted our brand's credibility. It's a partnership
              that continues to pay dividends.
            image:
              src: >-
                https://design-system.agency/static/img/deco/contact-us-person-smart.png
              alt: Wow
            name: Emily Johnson
            title: Director of Digital Strategy at EcoTech Solutions
---
