---
title: "What I Learned While Making a Game With React Native"
date: 2018-02-12T01:34:40+07:00
draft: true
---

I used React Native to make a cross-platform mobile game. [SudoBlock](https://sudoblock.com/)
is a mix between Sudoku and a jigsaw puzzle.

My main goal was to learn React Native, and I really liked the idea of having a single codebase that runs on many different platforms. React Native only supports iOS and Android, so I used [react-native-web](https://github.com/necolas/react-native-web) for browser support,
and [react-native-windows](https://github.com/Microsoft/react-native-windows) for Windows desktop and phone.

You can find SudoBlock on the [web](https://sudoblock.com/),
[App Store](https://itunes.apple.com/us/app/sudoblock/id1207401341?ls=1&mt=8),
[Google Play](https://play.google.com/store/apps/details?id=com.ndbroadbent.sudoblock),
and the [Microsoft Store](https://www.microsoft.com/store/apps/9np72dfcvkbw).

--------------------------

Here's some of the things I learned while building the game:

### Don't use React Native to make a game

You should use a proper game engine, such as [Godot](https://godotengine.org/) or [Unity](https://unity3d.com/).

Building a game was a great way to learn React Native, but it's not the best tool for the job. Having said that, I have ideas for some other games, so I might reuse the React Native code that I've already written.

### Don't bother supporting Windows Phone

I had fun working with Visual Studio and writing some C#. I learned a lot, but it was a waste of time.
No-one uses Windows Phone and it's pretty much dead. One thing to note is that `react-native-windows` gives
you a UWP app, and UWP apps can run on Xbox One. I would just need to add support for controllers, and then you could play SudoBlock on an Xbox. People have also been working on support for [Mac](https://github.com/ptmt/react-native-macos) and [Apple TV](https://github.com/douglowder/react-native-appletv), but these are not being maintained anymore.

### You'll probably have to write some native code

You'll write most of your code in JavaScript, but at some point you'll probably have to write some native code.

I started contributing to [react-native-admob](https://github.com/sbugert/react-native-admob), and [sent a pull request to allow multiple test devices](https://github.com/sbugert/react-native-admob/pull/90). That was my introduction to native code, and I had to work with JavaScript, Objective-C, and Java.

I also did a lot of work on [react-native-blur](https://github.com/react-native-community/react-native-blur). When I first started using it, everything was broken on Android, and there were lots of problems on iOS.
It took a lot of work to get everything running on Android and iOS:
[#173](https://github.com/react-native-community/react-native-blur/pull/173),
[#176](https://github.com/react-native-community/react-native-blur/pull/176),
[#183](https://github.com/react-native-community/react-native-blur/pull/183),
[#184](https://github.com/react-native-community/react-native-blur/pull/184).
I also started working on support for [react-native-web](https://github.com/react-native-community/react-native-blur/pull/190).
I could have just skipped the blur and used a darkened overlay, but this was a valuable experience that taught me a lot about React Native.


### There's a lot of bugs

React Native is pretty stable, but there's a lot of edge cases and unmaintained libraries.
Most React Native libraries don't have any tests.
An example: I found a bug with the [native animation driver for Android](https://github.com/facebook/react-native/issues/13530). There were also crashes in the
[react-native-sound](https://github.com/zmxv/react-native-sound) library.
And the [Android GC seemed to be clearing some JavaScript memory that shouldn't have been cleared](https://stackoverflow.com/questions/43470160/in-a-react-native-javascript-app-why-would-the-android-gc-behavior-change-if-i).

Android seemed to be particularly unstable, but I didn't have too many problems on iOS.
I also found a CSS rendering bug in iOS webkit, and reported that to Apple.


### Marketing

* I shared the Facebook page with friends and family, which gave it a small boost

* I spent $50 on Facebook ads. I reached ~7,000 people and got ~50 clicks. That gave me less than $0.01 in ad revenue, and one person bought the game for $2.99. Not a great return.

* I posted on Reddit a few times:
  * [I posted on /r/iosgaming, which went ok](https://www.reddit.com/r/iosgaming/comments/6edh0l/free_299_to_remove_ads_sudoblock_i_made_a_new_and/)
  * [I also tried a different tactic, which worked pretty well](https://www.reddit.com/r/ios/comments/6ecos4/after_seeing_all_your_posts_about_bug_fixes_and/)

* I found a game publisher who was going to help with marketing, and we would split the revenue. We signed the contract and I took the apps down for a while, but they fell off the radar and never got back to me.

* I finally got around to writing this blog post


### A few random things

* I switched to [VS Code](https://code.visualstudio.com/) near the beginning of the project. (I was using Sublime Text). I highly recommend VS Code, it's really fast and customizable.

* I set up [Flow](https://flow.org/), which is a static type checker for
JavaScript. I also started using [Immutable.js](https://facebook.github.io/immutable-js/).

* I started using Airbnb's [eslint config](https://github.com/airbnb/javascript), and spent about a day
fixing all the issues. Every time I saw a rule that I didn't understand, I looked it up to understand their reasoning. I read through a lot of great discussions on Github. This was a great way to learn more about
JavaScript, and especially some of the new ES6 features.

* I starting doing some functional programming with [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) and [ramda](https://github.com/ramda/ramda). I had fun refactoring some code in a more functional style.

* I really enjoyed working with [redux-saga](https://github.com/redux-saga/redux-saga). This helped me clean up a lot of messy code.

* I learned a lot about Reactive programming. This post is amazing: [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754). I was sidetracked on this for a few days, and started playing with [RxJS](https://github.com/Reactive-Extensions/RxJS) and
[redux-observable](https://github.com/redux-observable/redux-observable). I've been using those libraries in some other projects.

* I set up [CodePush](https://microsoft.github.io/code-push/), so that I could push JS changes without releasing a new version to the App Store. [Their setup guide is really good.](https://github.com/Microsoft/react-native-code-push/blob/master/README.md)

* I had to debug some memory issues on Android, and this article was really helpful: [React Native Android App Memory Investigation](https://shift.infinite.red/react-native-android-app-memory-investigation-55695625da9c)

* I learned about the [webpack DLL plugin](https://medium.com/@soederpop/webpack-plugins-been-we-been-keepin-on-the-dll-cdfdd6cb8cd7), which made development a lot faster. You can compile your `node_modules` as a separate bundle, and you only need to do that once. Then you can compile your app code separately, which is much faster.

* I released a boilerplate project with my [webpack config for react-native-web](https://github.com/ndbroadbent/react-native-web-webpack).

* I learned about the [Babel AST](https://github.com/ndbroadbent/babel-plugin-transform-react-remove-prop-types/commit/18edb329aa4fe7ebfd91af6d4b325cf9204e2ae1) while working on [an issue](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types/issues/95) in a Babel plugin, related to react-native-web.

* I wrote a script that stripped unused glyphs from icon fonts, to reduce the app size.

* I tested the app on a slow network connection (simulated in Xcode). This uncovered a bug where the counter started ticking before everything else had loaded.

* I discovered that it takes a huge amount of effort to actually launch a game. Once I had a playable game, it took another 2 months before everything else was finished. Things like in-app purchases, ads, analytics, high scores, achievements, tutorials, app store listings, screenshots, icons, videos, social media accounts, etc.


## Final Thoughts

I've left out a lot of other things, but those were some pretty intense months. I was in a [state of "flow"](https://en.wikipedia.org/wiki/Flow_(psychology)) most of the time, which was awesome. I learned a ton of new things, and even though the game only made about $30, I think it was worthwhile. I'm a freelancer, so projects like this are the only way to pick up new skills.


## Open Source

I've decided to open source all of the SudoBlock code under the MIT license: https://github.com/ndbroadbent/SudoBlock

Warning: There's a lot of messy code and hacks in here! The code is provided as-is,
and I probably won't be able to respond to many issues.
I haven't added any instructions to the README, so you should [learn about React Native](https://facebook.github.io/react-native/docs/getting-started.html) before diving into the code.


<br/>

Thanks for reading!

-----------------------------

* My latest project: [FormAPI](https://formapi.io/) makes it easy for programmers to fill out PDFs.
* I'm also [available for consulting work](https://ndbroadbent.com/)
