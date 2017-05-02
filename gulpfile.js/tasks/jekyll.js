const child         = require('child_process')
const gulp          = require('gulp')
const gutil         = require('gulp-util')

const jekyllTask = function() {

  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
}

gulp.task('jekyll', jekyllTask)
module.exports = jekyllTask