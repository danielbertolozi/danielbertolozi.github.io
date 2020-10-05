Time: Sun Oct 04 2020 20:07:12 GMT-0300
Title: Metadata support for Markdown!
Tags:
- programming
- meta
- javascript
- markdown
--/--/--
One of the tasks I decided to implement in this site is support for Markdown Metadata. This will include tags, the post title (can be different from Filename), post date, and possibly others.

A quick search on Google brought me [this question](https://stackoverflow.com/questions/44215896/markdown-metadata-format) on StackOverflow. And while there isn't a spec for how to write Metadata in MD, it seems like YAML syntax is a good option.

So, this here is my first post which will try to implement a metadata feature. I'll display the file name + title above, along with post date to the right of each post block, and the tags right below, but above the post's contents. The metadata itself will be hidden from the end-user, and will be only displayed on the RAW file in Github.

## How it will work

I'm not gonna implement full YAML support, as it just isn't needed. I'm assuming every metadata will be at the beginning of a file, and it will use `--/--/--` as a delimiter between content and metadata.

As of now, I have determined only a few fields that I desire to have in that. This below is the same example I'm using in this file:

```
Time: Sun Oct 04 2020 20:07:12 GMT-0300
Title: Metadata support for Markdown!
Tags:
- programming
- meta
- javascript
- markdown
--/--/--
[Content starts on next line after divider]
```

## Preparation and more programming things

I decided, for this functionality, to go on a little refactoring of what I've done so far. Like, every post is now being wrapper in a `PostWrapper` class, which will provide useful methods such as `getMetadata()` or `getContent()`. As soon as a `PostWrapper` is instantiated, its constructor will call private method `parse()` which will then get all metadata and post information in the given source file, and assign them to the correct variables, for ease of use.

Finally a chance to use TDD! It have been very useful since I had to deal with a lot of string processing. I have always been a TDD practitioner, and once again it has proven its value. Unit testing is waaaaay more easier than test & refresh – specially since you can "document" edge cases on written tests, and one command = run all scenarios (fast!). Also, it helps a lot to refactor your code – you can change everything with confidence, knowing it won't break.

Apart from that, this website development environment is turning quite ok, in fact. I just have yet to make a kind of watch-mode for compiling w/ TS and packing with webpack. Perhaps even run all unit tests in the middle...

I'm actually having a lot of fun coding this. It's like, sunday, and I'm coding lol been a while since I've felt this motivated to program in the weekend (it was a nice weekend, overall, apart from me not seeing my lovely girlfriend :( but well, life happens). It's nice to deal with a framework-free environment sometimes – apart from usual tooling such as TS.
