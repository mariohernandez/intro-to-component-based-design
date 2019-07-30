# Introduction to Component Based Web Design
An Introductory online course by [Mario Hernandez](https://mariohernandez.io), Head of Learning at [Mediacurrent](https://mediacurrent.com/).   Available at [Skill Share](https://skillshare.com).


![Cover Image](./source/images/cover-intro.jpg)

# Codebase
To download the entire codebase used in this class click the **Clone or Download** button above.

**NOTE** The codebase includes the Gulp Configuration described below.  If you wish to use this codebase, you DO NOT need to copy the files listed below as they are already part of the codebase.

# Resources
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Pattern Lab](https://patternlab.io/)
* [BEM 101](https://css-tricks.com/bem-101/)
* [Lorem Picsum](https://picsum.photos/)
* [Microsoft VS Code Editor](https://code.visualstudio.com/)

# Gulp Configuration Only
If you wish to implement the Gulp configuration changes we discussed in the **Introduction to Pattern Lab** video, copy the following files and folders into your project:

  * gulp-tasks/
  * patches/
  * .gitignore
  * .htaccess
  * .nvmrc
  * .sass-lint.yml
  * .alter-twig.php
  * gulpfile.js
  * package.json
  * patternlab-config.json


**NOTE**:  If you are prompted to override files, please do so.


## then do this

  1. Delete **node_modules**
  2. Delete **package-lock.json**

---
## and finally run the following commands from the root of your Pattern Lab project

  ```nvm use```<br />
  This ensures you use the version of NodeJS specified in the **.nvmrc** file.


  ```npm install```<br />
  Installs all NodeJS dependencies for the project.


  ```npm run build```<br />
  Builds your entire project by compiling all code.


  ```npm run watch```<br />
  Compiles code, reloads browser and auto compiles any file changes upon save, changes or creation.
