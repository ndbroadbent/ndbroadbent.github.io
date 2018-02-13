---
title: "What I Learned While Making a Game With React Native"
date: 2018-02-12T01:34:40+07:00
tags: ["projects", "games", "react native", "react", "javascript"]
draft: false
---

I used React Native to build a cross-platform game for iOS, Android, Windows, and the web. [SudoBlock](https://sudoblock.com/)
is a cross between Sudoku, jigsaw puzzles, and Tetris.

You can find SudoBlock on the [web](https://sudoblock.com/),
[App Store](https://itunes.apple.com/us/app/sudoblock/id1207401341?ls=1&mt=8),
[Google Play](https://play.google.com/store/apps/details?id=com.ndbroadbent.sudoblock),
and the [Microsoft Store](https://www.microsoft.com/store/apps/9np72dfcvkbw).

<a href="/images/posts/2018/02/sudoblock.jpg" target="_blank">
<img src="/images/posts/2018/02/sudoblock.jpg" style="max-width: 200px; margin: 30px 0;" />
</a>

React Native only supports iOS and Android, but I used [react-native-web](https://github.com/necolas/react-native-web) for the browser,
and [react-native-windows](https://github.com/Microsoft/react-native-windows) for Windows desktop and phone.
The [UWP](https://docs.microsoft.com/en-us/windows/uwp/get-started/whats-a-uwp) app can also run on Xbox One and HoloLens.
I also experimented with [react-native-macos](https://github.com/ptmt/react-native-macos)
and [react-native-appletv](https://github.com/douglowder/react-native-appletv),
but they're not being maintained.

<br/>

Here's some of the things I learned while building SudoBlock:

### You should probably use a game engine

I've heard good things about [Godot](https://godotengine.org/) and [Unity](https://unity3d.com/).
These game engines support iOS, Android, Windows, and Linux. Unity supports
[many other platforms](https://unity3d.com/unity/features/multiplatform).

Building a simple game was a great way to learn React Native. People have also started working on game engines for React Native, such as [react-game-kit](https://github.com/FormidableLabs/react-game-kit) and [react-native-game-engine](https://github.com/bberak/react-native-game-engine).

The built-in [Animated](https://facebook.github.io/react-native/docs/animated.html) library is great,
and I also used [react-native-animatable](https://github.com/oblador/react-native-animatable).
I used a library to [play sounds](https://github.com/zmxv/react-native-sound).
I wrote native code to integrate with iOS Game Center and Google Play Game Services.
I used libraries to integrate with [InApp Billing on Android](https://github.com/idehub/react-native-billing),
and [in-app purchases on iOS](https://github.com/chirag04/react-native-in-app-utils).
I also wrote native code for ads and in-app purchases on Windows.
There's a RN library for [particle effects](https://github.com/greghe/react-native-particle-system)
(although you'd have to add support for Android),
and [react-game-kit](https://github.com/FormidableLabs/react-game-kit) provides a way to manage sprites and animations.

I want to make a few more simple games. I'm going to stick with React Native because I can fork SudoBlock and reuse a lot of the code that I've already written.

If your goal is to build a cross-platform mobile game, and you need to build it fast,
then I would recommend learning Godot or Unity.


### Don't worry about supporting Windows

This is a no-brainer. No one uses Windows Phone and Microsoft have abandoned it.
I wanted to explore and learn new things, so I decided to do it anyway. I enjoyed the process
of installing Windows, working with Visual Studio, and writing some C#.
I also figured out how to write cross-platform npm scripts using [scripty](https://github.com/testdouble/scripty).

[react-native-windows](https://github.com/Microsoft/react-native-windows) gives you a UWP app that can
run on Windows Phone, tablets, desktop, Xbox One, HoloLens, and other Windows platforms. But:

* Nobody uses Windows Phone.
* Mobile games don't usually make sense on an Xbox.
* If your game runs in a browser, then you probably don't need a desktop app.

### React Native is better than Electron for desktop apps

I think React Native is a better choice than [Electron](https://electronjs.org/).
Electron apps are notorious for being huge and using a lot of memory (e.g. Slack and Spotify.)
They have to package and load an entire WebKit browser.
React Native apps are much smaller and use far less memory, because they only need a JavaScript engine.
You can also use responsive design, so that a single codebase works on desktop, mobile, and the web. The only problem is that [react-native-macos](https://github.com/ptmt/react-native-macos)
is unmaintained and out of date, so it would be great if a company sponsored development.


### You'll probably have to write some native code

Some people are attracted to React Native because they've heard that you can write a mobile
app with only JavaScript. In practice, this is only true for extremely simple applications.
Most of your code will be written in JavaScript, but you'll probably have to write some native code.
At the very least, you must be prepared to fix some bugs in third-party libraries.

I started contributing to [react-native-admob](https://github.com/sbugert/react-native-admob), and [sent a pull request to allow multiple test devices](https://github.com/sbugert/react-native-admob/pull/90). That was my introduction to native code in React Native, and I had to work with JavaScript, Objective-C, and Java.

I also did a lot of work on [react-native-blur](https://github.com/react-native-community/react-native-blur). When I first tried to use it, it was completely broken on Android, and there were lots of problems on iOS.
It took a lot of work to get everything running. I could have just skipped the blur and used a darkened overlay, but I enjoyed the work and learned a lot.

I also had to write native code to integrate with iOS Game Center and Google Play Game Services,
and for ads and in-app purchases on Windows. I also wrote a small library to manage vibrations and haptic feedback across iOS, Android, Windows, and the web (using the [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API).)

### There will be bugs

React Native is pretty stable, but there's a lot of unmaintained libraries,
and most libraries don't have any tests. React Native is a bit like jQuery, in that it smooths over a lot of quirks and inconsistencies and provides a consistent API. But sometimes you'll
come across an edge case, so I often had to read the React Native source code to figure out
what was happening.

Some examples:

* There was a bug with the [native animation driver for Android](https://github.com/facebook/react-native/issues/13530).
* There were crashes in the
[react-native-sound](https://github.com/zmxv/react-native-sound) library.
* The [Android GC seemed to be clearing some memory that shouldn't have been cleared](https://stackoverflow.com/questions/43470160/in-a-react-native-javascript-app-why-would-the-android-gc-behavior-change-if-i).

Android was particularly unstable. Not just React Native, but Android itself.
I didn't have too many problems with iOS.

I wrote an iOS app with Swift a few years ago, and I've actually had a much better experience with React Native.
When I was working with UIKit, I remember constantly fighting with things like layout, contraints, and font rendering. I uncovered some actual bugs, and found long threads on the Apple forums that were being ignored.
It was really nice to let React Native handle all of the rendering. I had no rendering issues on iOS or Android,
and just a few problems that I fixed on Windows.

Swift was also very unstable at the time, and Xcode upgrades took a lot of effort.
My Obj-C code still compiles a year later on the latest version of Xcode. If I was using Swift,
I think it would take at least a day to upgrade to Swift 4.1 and update all of the third-party libraries.
I believe Swift is [more stable now](https://github.com/apple/swift/blob/master/docs/ABIStabilityManifesto.md), and I love the language, so I might start using it again on future projects.

I had a lot of headaches with React Native, but it wasn't as bad as Swift v1 and UIKit.


### Marketing is really hard

* I tested Facebook ads with $50. I reached about ~7,000 people and got ~50 clicks. One person
ended up buying the game for $2.99, so I made $2. You can't spend $50 to make $2.

* I posted on Reddit a few times:
  * [I posted on /r/iosgaming, which went ok](https://www.reddit.com/r/iosgaming/comments/6edh0l/free_299_to_remove_ads_sudoblock_i_made_a_new_and/)
  * [I also tried a different tactic, which worked pretty well](https://www.reddit.com/r/ios/comments/6ecos4/after_seeing_all_your_posts_about_bug_fixes_and/)

* A German website
[published an article about SudoBlock](https://www.mobiflip.de/sudoblock-ist-eine-interessante-mischung-aus-tetris-und-sudoku/).

* I tried to capitalize on [#covfefe](https://twitter.com/SudoBlock/status/870202842182590465),
which didn't work at all. But I repurposed that new code into an [Emojidoku mode](https://twitter.com/SudoBlock/status/875065979679645696).

* I found a game publisher who was going to handle all the marketing and split the revenue.
They even promised to get the game featured on the App Store.
We signed the contract and I took the apps down for a while, but the publisher fell off the radar and stopped replying to my emails.

* I finally got around to writing this blog post.



### Other Notes

* I switched from Sublime Text to [VS Code](https://code.visualstudio.com/) near the beginning of the project.
VS Code is awesome. It's super fast and very customizable.

* I set up [Flow](https://flow.org/) and started using [Immutable.js](https://facebook.github.io/immutable-js/).
I love having static type checking for JavaScript.

* I used Airbnb's [eslint config](https://github.com/airbnb/javascript), and spent about a day
fixing all the issues. Every time I saw a rule that I didn't understand, I looked it up to understand their reasoning. I read through a lot of great discussions on Github. This was a great way to learn more about
JavaScript, and especially some of the new ES6 features.

* I starting doing some functional programming with [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) and [ramda](https://github.com/ramda/ramda). I had fun refactoring some code in a more functional style.

* I really enjoyed working with [redux-saga](https://github.com/redux-saga/redux-saga), which helped me clean up a lot of messy code.

* I learned a lot about Reactive programming. This post is amazing: [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754). I started playing with [RxJS](https://github.com/Reactive-Extensions/RxJS) and
[redux-observable](https://github.com/redux-observable/redux-observable).

* I set up [CodePush](https://microsoft.github.io/code-push/), so that I could push JS changes without releasing a new version to the App Store. [Their setup guide is really good.](https://github.com/Microsoft/react-native-code-push/blob/master/README.md)

* I had to debug some memory issues on Android, and this article was really helpful: [React Native Android App Memory Investigation](https://shift.infinite.red/react-native-android-app-memory-investigation-55695625da9c)

* I learned about the [webpack DLL plugin](https://medium.com/@soederpop/webpack-plugins-been-we-been-keepin-on-the-dll-cdfdd6cb8cd7), which made development a lot faster. You can compile everything in `node_modules` as a separate bundle. You only need to do that once, so it saves a lot of time.

* I released a boilerplate project with my [webpack config for react-native-web](https://github.com/ndbroadbent/react-native-web-webpack).

* I learned about the [Babel AST](https://github.com/ndbroadbent/babel-plugin-transform-react-remove-prop-types/commit/18edb329aa4fe7ebfd91af6d4b325cf9204e2ae1) while working on [an issue](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types/issues/95) in a Babel plugin, related to react-native-web.

* I wrote a script that stripped unused glyphs from icon fonts, to reduce the app size.

* I tested the app while simulating a slow network connection in Chrome. This revealed a bug where the counter started ticking before everything had finished loading.

* I discovered that it takes a huge amount of effort to actually launch a game. Once I had a playable game, it was another 2 months before everything else was finished. Things like in-app purchases, ads, analytics, high scores, achievements, tutorials, app store listings, screenshots, icons, videos, social media accounts, etc.

<br/>
<br/>

This was about 3 months of work, and I was in a [state of flow](https://en.wikipedia.org/wiki/Flow_(psychology)) most of the time. I learned a lot of new things, and I really enjoyed the whole process.
The game has only made about $50 so far, but I have some more ideas for grid-based games, and
I can reuse a lot of the SudoBlock code. I'm also a freelancer, so this is the only way I can pick up new skills.

Thanks for reading! If you have any questions, please leave a comment on Hacker News.

<br/>

-----------------------------

* I'm currently working on [FormAPI](https://formapi.io/), which is an API for filling out PDFs.
* I'm also [available for consulting work](https://ndbroadbent.com/).
