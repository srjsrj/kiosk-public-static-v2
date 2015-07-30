const src = './app',
      build = './build',
      dist = './dist';

export default {
  clean: {
    dest: [build, dist]
  },
  browserSync: {
    port: 9000,
    open: false,
    server: {
      baseDir: [build, src]
    },
    files: [build + '/**']
  },
  ghPages: {
    src: build + '/**/*',
    options: {
      message: 'gh-pages'
    }
  },
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
  styles: {
    static: {
      src: src + '/stylesheets/local.scss',
      dest: build + '/stylesheets',
      outputName: 'local.css'
    },
    production: {
      src: src + '/stylesheets/production.scss',
      dest: dist + '/stylesheets',
      outputName: 'bundle.css'
    }
  },
  haml: {
    static: {
      src: 'app/haml/**/*.haml',
      dest: build
    }
  },
  fonts: {
    static: {
      src: src + '/**/*.{eot,svg,ttf,woff,woff2}',
      dest: build + '/fonts'
    },
    production: {
      src: [
        src + '/**/*.{eot,svg,ttf,woff,woff2}',
        '!' + src + '/images/**/*'
      ],
      dest: dist + '/fonts'
    }
  },
  images: {
    static: {
      src: src + '/images/**/*',
      dest: build + '/images'
    },
    production: {
      src: src + '/images/**/*',
      dest: dist + '/images'
    }
  }
}