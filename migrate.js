"use strict";

const fs = require("fs");
const path = require("path");
const grayMatter = require("gray-matter");
const uuid = require("node-uuid");
const markdown = require("markdown").markdown;
const extend = require("util")._extend;

let tagList = [];
let matterList = [];

let ghostData = {
  meta: {
    exported_on: Date.now(),
    version: "5.7.0",
  },
  data: {
    posts: [],
    tags: [],
    posts_tags: [],
  },
};

function getMatter(filePath) {
  let fileContent = String(fs.readFileSync(filePath));
  return grayMatter(fileContent);
}

function createSlug(filename) {
  return filename.substring(0, filename.lastIndexOf("."));
  // return Path.parse(filename).name
  // const filename = Path.parse('/home/user/avatar.png').name
}

function createDate(filename) {
  return Date.parse(filename.substring(0, 10));
}

function addUniqueTags(tags, index) {
  let postIndex = index + 1;

  let addUniqueTag = (tag) => {
    if (tagList.indexOf(tag) === -1) {
      tagList.push(tag);
    }

    createPostsTags(postIndex, tagList.indexOf(tag) + 1);
  };

  if (typeof tags === "string") {
    addUniqueTag(tags);
  } else if (typeof tags === "object") {
    tags.map((tag) => addUniqueTag(tag));
  }
}

function createGhostPost(index, matter, filename) {
  let importUserId = 1;
  let post = {
    featured: 0,
    page: 0,
    status: "published",
    language: "pt_BR",
    meta_description: matter.data.excerpt,
    author_id: matter.data.author,
    created_by: importUserId,
    updated_by: importUserId,
    published_by: importUserId,
  };

  post = extend(post, {
    id: index + 1,
    uuid: uuid.v4(),
    title: matter.data.title
      ? matter.data.title
      : createSlug(filename).replaceAll("-", " ").toLowerCase(),
    slug: createSlug(filename),
    // markdown: matter.content,
    // html: markdown.toHTML(matter.content),
    mobiledoc:
      '{"version":"0.3.1","atoms":[],"cards":[["markdown",{"markdown":"' +
      matter.content
        .replaceAll("/content/images/", "/content/images/")
        .replaceAll("/post-assets/", "/content/files/")
        .replaceAll('"', '\\"')
        .replaceAll("\n", "\\n")
        .replaceAll("\\---", "---") +
      '"}]],"markups":[],"sections":[[10,0],[1,"p",[]]]}',
    image: matter.data.images ? matter.data.images.title : null,
    meta_title: matter.data.title,
    created_at: createDate(filename),
    updated_at: createDate(filename),
    published_at: matter.data.date,
    // publised_at: createDate(filename)
  });

  return post;
}

function createGhostTag(index, tag) {
  return {
    id: index + 1,
    name: tag,
    slug: tag,
    description: "",
  };
}

function createPostsTags(postId, tagId) {
  ghostData.data.posts_tags.push({ post_id: postId, tag_id: tagId });
}

function convert(src, dest) {
  fs.readdir(src, (err, filenames) => {
    // const filename = filenames[0];
    // const index = 0;
    filenames.forEach((filename, index) => {
      let filePath = path.join(src, filename);
      let matter = getMatter(filePath);
      matterList.push(matter);

      let ghostPost = createGhostPost(index, matter, filename);
      ghostData.data.posts.push(ghostPost);
      addUniqueTags(matter.data.tags, index);
    });

    tagList.forEach((tag, i) => {
      let ghostTag = createGhostTag(i, tag);
      ghostData.data.tags.push(ghostTag);
    });

    createPostsTags();
    fs.writeFile(dest, JSON.stringify(ghostData), (err) =>
      err ? console.error(err) : process.exit(0)
    );
  });
}

if (process.argv.length < 4) {
  console.error("You need to specify a path to Jekyll posts.");
} else {
  let src = process.argv[2];
  let dest = process.argv[3];

  convert(src, dest);
}
