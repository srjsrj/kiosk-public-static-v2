src   = './app'
build = './build'
dist  = './dist'

module.exports =
  clean:
    dest: [build, dist]
  browserSync:
    port: 9000
    open: false
    server:
      baseDir: [build, src]
    files: [build + '/**']
  scripts: {
    static: {
      client: {
        entries: src + '/scripts/main.coffee',
        dest: build + '/scripts',
        outputName: 'client.js',
        extensions: ['.jsx', '.cjsx', '.coffee']
      },
      vendor: {
        baseDir: src + '/bower_components',
        dest: build + '/scripts',
        outputName: 'vendor.js',
        extensions: ['.coffee']
      }
    },
    production: {
      entries: src + '/scripts/appBundle.coffee',
      dest: dist + '/scripts/',
      outputName: 'appBundle.js',
      extensions: ['.jsx', '.cjsx', '.coffee']
    }
  },
  local:
    scripts:
      vendor:
        baseDir: src + '/bower_components'
        dest: build + '/scripts'
        outputName: 'vendor.js'
        extensions: ['.coffee']
      client:
        entries: src + '/scripts/main.coffee'
        dest: build + '/scripts'
        outputName: 'client.js'
        extensions: ['.jsx', '.cjsx', '.coffee']
    haml:
      src: 'app/haml/**/*.haml'
      dest: build
    sass:
      src: src + '/stylesheets/main.scss'
      dest: build + '/stylesheets'
      outputName: 'local.css'
    fonts:
      src: src + '/**/*.{ttf,woff,eof,eot,svg}'
      dest: build + '/fonts'
    images:
      src: src + '/images/**/*'
      dest: build + '/images'
  production:
    scripts:
      appBundle:
        baseDir: src
        entries: './scripts/appBundle.coffee'
        extensions: ['.jsx', '.cjsx', '.coffee']
        dest: dist + '/scripts/'
        outputName: 'appBundle.js'
      bundle:
        baseDir: src
        entries: './scripts/bundle.coffee'
        extensions: ['.jsx', '.cjsx', '.coffee']
        dest: dist + '/scripts/'
        outputName: 'bundle.js'
      minify:
        src: dist + '/scripts/bundle.js'
        dest: dist + '/scripts'
        outputName: 'bundle.min.js'
    styles:
      bundle:
        src: src + '/stylesheets/bundle.scss'
        dest: dist + '/stylesheets'
        outputName: 'bundle.css'
      minify:
        src: dist + '/stylesheets/bundle.css'
        dest: dist + '/stylesheets'
        outputName: 'bundle.min.css'
    images:
      src: src + '/images/**/*'
      dest: dist + '/images'