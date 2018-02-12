---
title: "Making a Game With React Native"
date: 2018-02-12T01:34:40+07:00
draft: true
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

SudoBlock is a single codebase that targets all of these different platforms. React Native supports iOS and Android, but I also used [react-native-web](https://github.com/necolas/react-native-web) for the browser,
and [react-native-windows](https://github.com/Microsoft/react-native-windows) for Windows desktop and phone. It's a UWP app so it can also run on Xbox One, but I haven't tested that.
I also experimented with the [Mac](https://github.com/ptmt/react-native-macos)
and [Apple TV](https://github.com/douglowder/react-native-appletv) libraries,
but those are not being maintained.


--------------------------

Here's some of the things that I learned while building SudoBlock:

### You should probably use a real game engine

I've heard good things about [Godot](https://godotengine.org/) and [Unity](https://unity3d.com/).
These game engines support iOS, Android, Windows, Linux, and many other platforms.
Building a simple game was a great way to learn React Native, but it's not the best tool for the job.
You should use Godot unless you're building a simple 2D game like SudoBlock or 2048.

Having said that, I want to make a few more simple games, so I'll fork SudoBlock and reuse most of the code. I also want to make an AR game using ARKit, and I'll probably use Godot for something in the future.


### Don't worry about supporting Windows

This is a no-brainer, since no-one uses Windows Phone, and Microsoft are abandoning it.
I wanted to explore and learn new things, so I did it anyway. I enjoyed the process
of installing Windows, working with Visual Studio, and writing some C#.
I learned a lot about Windows development, and I figured out how to write cross-platform npm scripts (I used [scripty](https://github.com/testdouble/scripty).)

[react-native-windows](https://github.com/Microsoft/react-native-windows) gives you a UWP app which can
run on Windows Phone, desktop, and Xbox One. You would just need to write some native code to integrate with the Xbox controller. Mobile games aren't usually a good fit for Xbox. No-one uses Windows Phone. And if your game already runs in a browser, then you probably don't need a desktop app for Windows.

However, I would recommend React Native over [Electron](https://electronjs.org/) for a desktop app. I think a React Native app will be smaller and use far less memory. You can also use responsive design to have a single codebase that works on desktop, mobile, and the web.


### You'll probably have to write some native code

Most of your code will be JavaScript, but you'll probably have to write some native code.
In the future you might be able to find a library for everything, but the community isn't quite there yet.

I started contributing to [react-native-admob](https://github.com/sbugert/react-native-admob), and [sent a pull request to allow multiple test devices](https://github.com/sbugert/react-native-admob/pull/90). That was my introduction to native code in React Native, and my pull request
included changes to JavaScript, Objective-C, and Java.

I also did a lot of work on [react-native-blur](https://github.com/react-native-community/react-native-blur). When I first tried to use it, it was completely broken on Android, and there were lots of problems on iOS.
It took a lot of work to get everything running:
[#173](https://github.com/react-native-community/react-native-blur/pull/173),
[#176](https://github.com/react-native-community/react-native-blur/pull/176),
[#183](https://github.com/react-native-community/react-native-blur/pull/183),
[#184](https://github.com/react-native-community/react-native-blur/pull/184).
I could have just skipped the blur and used a darkened overlay, but this was a valuable learning experience.


### Bugs. Bugs everywhere.

React Native is pretty stable, but there's a lot of edge cases and unmaintained libraries.
Most React Native libraries don't have any tests.
An example: I found a bug with the [native animation driver for Android](https://github.com/facebook/react-native/issues/13530). There were also crashes in the
[react-native-sound](https://github.com/zmxv/react-native-sound) library.
And the [Android GC seemed to be clearing some JavaScript memory that shouldn't have been cleared](https://stackoverflow.com/questions/43470160/in-a-react-native-javascript-app-why-would-the-android-gc-behavior-change-if-i).

Android seemed to be particularly unstable, but I didn't have too many problems on iOS.
I also found a CSS rendering bug in iOS webkit, and reported that to Apple.


### Marketing

* I spent $50 on Facebook ads. I reached ~7,000 people and got ~50 clicks. That gave me less than $0.01 in ad revenue, and one person bought the game for $2.99 (and Apple took 30%.) You can't spend $50 to make $2.

* I posted on Reddit a few times:
  * [I posted on /r/iosgaming, which went ok](https://www.reddit.com/r/iosgaming/comments/6edh0l/free_299_to_remove_ads_sudoblock_i_made_a_new_and/)
  * [I also tried a different tactic, which worked pretty well](https://www.reddit.com/r/ios/comments/6ecos4/after_seeing_all_your_posts_about_bug_fixes_and/)

* I found a game publisher who was going to help with marketing, and we would split the revenue. We signed the contract and I took the apps down for a while, but they fell off the radar and stopped replying to my emails.

* I finally got around to writing this blog post, about one year later.


### Other Notes

* I switched to [VS Code](https://code.visualstudio.com/) near the beginning of the project. (I was using Sublime Text before that). I highly recommend VS Code, it's very fast and easy to customize.

* I set up [Flow](https://flow.org/) and started using [Immutable.js](https://facebook.github.io/immutable-js/).

* I used Airbnb's [eslint config](https://github.com/airbnb/javascript), and spent about a day
fixing all the issues. Every time I saw a rule that I didn't understand, I looked it up to understand their reasoning. I read through a lot of great discussions on Github. This was a great way to learn more about
JavaScript, and especially some of the new ES6 features.

* I starting doing some functional programming with [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) and [ramda](https://github.com/ramda/ramda). I had fun refactoring some code in a more functional style.

* I really enjoyed working with [redux-saga](https://github.com/redux-saga/redux-saga). This helped me clean up a lot of messy code.

* I learned a lot about Reactive programming. This post is amazing: [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754). I started playing with [RxJS](https://github.com/Reactive-Extensions/RxJS) and
[redux-observable](https://github.com/redux-observable/redux-observable).

* I set up [CodePush](https://microsoft.github.io/code-push/), so that I could push JS changes without releasing a new version to the App Store. [Their setup guide is really good.](https://github.com/Microsoft/react-native-code-push/blob/master/README.md)

* I had to debug some memory issues on Android, and this article was really helpful: [React Native Android App Memory Investigation](https://shift.infinite.red/react-native-android-app-memory-investigation-55695625da9c)

* I learned about the [webpack DLL plugin](https://medium.com/@soederpop/webpack-plugins-been-we-been-keepin-on-the-dll-cdfdd6cb8cd7), which made development a lot faster. You can compile your `node_modules` as a separate bundle, and you only need to do that once, so it saves a lot of time.

* I released a boilerplate project with my [webpack config for react-native-web](https://github.com/ndbroadbent/react-native-web-webpack).

* I learned about the [Babel AST](https://github.com/ndbroadbent/babel-plugin-transform-react-remove-prop-types/commit/18edb329aa4fe7ebfd91af6d4b325cf9204e2ae1) while working on [an issue](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types/issues/95) in a Babel plugin, related to react-native-web.

* I wrote a script that stripped unused glyphs from icon fonts, to reduce the app size.

* I tested the app while simulating a slow network connection in Chrome. This revealed a bug where the counter started ticking before everything had finished loading.

* I discovered that it takes a huge amount of effort to actually launch a game. Once I had a playable game, it took another 2 months before everything else was finished. Things like in-app purchases, ads, analytics, high scores, achievements, tutorials, app store listings, screenshots, icons, videos, social media accounts, etc.

<br/>
<br/>

This was about 3 months of work, and I was in a state of [flow](https://en.wikipedia.org/wiki/Flow_(psychology)) most of the time. I really enjoyed it and learned a lot of new things.
The game has only made about $30, but I think it was worthwhile. I might fork the code and try releasing a few different games this year. I'm also a freelancer, so this is the only way I can pick up new skills.

I love working with React Native, and would definitely recommend it for regular apps.

<br/>

Thanks for reading!

<br/>

-----------------------------

* I'm currently working on [FormAPI](https://formapi.io/), which is an API for filling out PDFs.
* I'm also [available for consulting work](https://ndbroadbent.com/).
