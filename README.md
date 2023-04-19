# NextJS tests
Basic project to tests independent features with NextJS.

## What we are testing here?
### Redirection to locale by Vercel Geo service
- If you go to https://nextjs-test-dimaslz.vercel.app (home path /) you should be redirected to the default locale according with your country. Only exists 3 locales for this example: `es-ES`, `en-GB`, `fr-FR`.
  - For example, if you are located in Spain, you should be redirected to https://nextjs-test-dimaslz.vercel.app/es-ES
- If you change the country by the links on the page, your preference is stored and, next time when you arrive to the home `/`, you should be redirected to your last locale visited.


### Lottie animations controlled by the user visibility

#### Option 1
Here we are using the Javascript class `IntersectionObserver` which allows to observe the status of the element, if is intersecting or not with the user.
- If you go to http://localhost:3005/es-ES/lottie-example/1 ([/src/components/pages/lottie-examples/1]()), you will see 4 sections, but in 3, you will have Lottie animations.
- Firt animation, should be running, because, is visible by default, when the user arrive to the page.
- Second section, is empty, just to add space to the next section.
- In the section #2, when you scroll or navigate by the header items, you should see how the Lottie animation starts, when you are in the section. (I used counter animation to check it easily).
- And the last section #3, is an example how to pause the animation, when the user scrolls out the section.

#### Option 1x
The same as the option #1, but with a wrapper of the LottiePlayer easier. Less code from DevX.

#### Option 2
Here we are trying to simplify the code and do not use the Javascript class `IntersectionObserver` to use directly the posibilities provided by Lottie.

In this case, looks like we need to do some manual stuffs to control the animations. I stopped digging on, because I think, using the class `IntersectionObserver`, is a better solution.

But in any case, I created some examples:
- If you go to http://localhost:3005/es-ES/lottie-example/2 ([/src/components/pages/lottie-examples/2]()), you will see 3 sections, where you can see Lottie animations.
- Firt animation, is not running but, if you scroll a bit, it should start. In comparation with the example #1 http://localhost:3005/es-ES/lottie-example/1 ([/src/components/pages/lottie-examples/1]()), I do not have control to play the animation when is visible on load the page. We can do it but, is a lot code to get it.
- In the section #2 and #3, when you scroll or navigate by the header items, you should see how the Lottie animation starts, when you are in the section. (I used counter animation to check it easily).

## Author
```js
{
	name: "Dimas López",
	role: "FullStack Software Engineer",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita",
	tags: "react, vue, angular, nodejs, mongodb, bootstraping"
}
```

## My other projects
- https://randomdata.loremapi.io: API mock data (no open source)
- https://svg-icon-2-fw-component.dimaslz.dev: SVG to Framework component (open source soon)
- https://ng-heroicons.dimaslz.dev: Use Heroicons.com in you Angular projects (open source)
