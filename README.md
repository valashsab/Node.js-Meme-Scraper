Create a cli (Command Line Interface) application that scrapes the current version of this website:

memegen-link-examples-upleveled.netlify.app

...and saves the first 10 images into a folder called "memes" within the directory of the new project. The image files should be named with a number with a leading zero, eg. 01.jpg, 02.jpg, etc.

Avoid using an "image scraper" or "image downloader" library that does multiple steps at once for you (eg. do not use image-downloader or nodejs-file-downloader or similar) - break the task down into smaller steps and select libraries as necessary for each step.

Make sure that the meme images are "ignored" in Git - they should not show up in your repository.

The program should be able to run multiple times without throwing an error.

TODO:

- [x] Setup the Project using the cheatsheet
- [x] Add the directory memes to .gitignore (you can do this manually)
- [x] Find a way to create a directory called memes from code (additional info: not in shell/hyper but you need to enter node --> in hyper enter node index.js and then in the file index.js create a code that creates a new directory with the name "memes" also it should be a subdirectory to .gitignore; since index.js the creation of a new directory refers to precedent folder anyway)
- [ ] Find a way to Access the Website
- [ ] Find a way to either filter the information you need from the html <img> x10 or a tool that helps you to extract the information by organising the html content
  - [ ] option 1: use string methods or use JS to break the html into pieces that you can manage (URL parsing?)
  - [ ] option 2: use a tool that allows you to traverse the html by understanding its content and filter the information. Research for the tool and learn how to use it.
- [ ] get the 10 image urls
  - [ ] put them into a data structure that is convenient (i.e. an array)
- [ ] find a way to download the images from this urls
  - [ ] Get the content of the image visiting the url
  - [ ] Shape the content to be ready to pack into a file
  - [ ] Figure out how to create a file from code
  - [ ] Give a name to this file
- [ ] Test the logic and make sure it runs multiple times
