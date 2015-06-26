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
      src: src + '/stylesheets/main.scss',
      dest: build + '/stylesheets',
      outputName: 'local.css'
    },
    production: {
      src: src + '/stylesheets/bundle.scss',
      dest: dist + '/stylesheets',
      outputName: 'bundle.min.css'
    }
  },
  haml: {
    static: {
      src: 'app/haml/*.haml',
      dest: build
    }
  },
  fonts: {
    static: {
      src: src + '/**/*.{eot,svg,ttf,woff,woff2}',
      dest: build + '/fonts'
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

//     sass:
//       src: src + '/stylesheets/main.scss'
//       dest: build + '/stylesheets'
//       outputName: 'local.css'
//     fonts:
//       src: src + '/**/*.{ttf,woff,eof,eot,svg}'
//       dest: build + '/fonts'
//     images:
//       src: src + '/images/**/*'
//       dest: build + '/images'
//   production:
//     scripts:
//       appBundle:
//         baseDir: src
//         entries: './scripts/appBundle.coffee'
//         extensions: ['.jsx', '.cjsx', '.coffee']
//         dest: dist + '/scripts/'
//         outputName: 'appBundle.js'
//       bundle:
//         baseDir: src
//         entries: './scripts/bundle.coffee'
//         extensions: ['.jsx', '.cjsx', '.coffee']
//         dest: dist + '/scripts/'
//         outputName: 'bundle.js'
//       minify:
//         src: dist + '/scripts/bundle.js'
//         dest: dist + '/scripts'
//         outputName: 'bundle.min.js'
//     styles:
//       bundle:
//         src: src + '/stylesheets/bundle.scss'
//         dest: dist + '/stylesheets'
//         outputName: 'bundle.css'
//       minify:
//         src: dist + '/stylesheets/bundle.css'
//         dest: dist + '/stylesheets'
//         outputName: 'bundle.min.css'
//     images:
//       src: src + '/images/**/*'
//       dest: dist + '/images'










// var src = './app',
//     build = './build',
//     dist = './dist/operator',
//     distAssets = './dist/operator';

// var vendorStyles = [
//   src + '/bower_components/select2/select2.css',
//   src + '/bower_components/select2/select2-bootstrap.css',
//   src + '/bower_components/switchery/switchery',
//   src + '/bower_components/iCheck/skins/all.css',
//   src + '/bower_components/iCheck/skins/square/green.css',
//   src + '/bower_components/iCheck/skins/flat/blue.css',
//   src + '/bower_components/jstree/dist/themes/default/style.css'
// ];

// var vendorImages = [
//   src + '/assets/**/*',
//   src + '/bower_components/iCheck/skins/square/green*.png',
//   src + '/bower_components/iCheck/skins/flat/blue*.png',
//   src + '/bower_components/jstree/dist/themes/default/*.png',
//   src + '/bower_components/select2/*.{png,gif}'
// ];

// module.exports = {
//   clean: {
//     dest: [build, dist]
//   },
//   browserSync: {
//     port: 9000,
//     open: false,
//     server: {
//       baseDir: [build, src]
//     },
//     files: [
//       build + '/**',
//       '!' + build + '/**.map'
//     ]
//   },
//   ghPages: {
//     src: build + '/**/*',
//     options: {
//       message: 'gh-pages'
//     }
//   },
//   scripts: {
//     static: {
//       client: {
//         entries: src + '/scripts/static.js',
//         dest: build + '/scripts',
//         outputName: 'client.js',
//         extensions: ['.jsx', '.cjsx', '.coffee']
//       },
//       vendor: {
//         baseDir: src + '/bower_components',
//         dest: build + '/scripts',
//         outputName: 'vendor.js',
//         extensions: ['.coffee']
//       }
//     },
//     development: {
//       entries: src + '/scripts/development.js',
//       dest: dist,
//       outputName: 'development.js',
//       extensions: ['.jsx', '.cjsx', '.coffee']
//     },
//     production: {
//       entries: src + '/scripts/production.js',
//       dest: dist,
//       outputName: 'dist.js',
//       extensions: ['.jsx', '.cjsx', '.coffee']
//     }
//   },
//   html: {
//     static: {
//       src: src + '/html/*.html',
//       dest: build
//     }
//   },
//   haml: {
//     static: {
//       src: 'app/haml/*.haml',
//       dest: build
//     }
//   },
//   styles: {
//     static: {
//       src: src + '/stylesheets/local.scss',
//       vendorSrc: vendorStyles,
//       dest: build + '/stylesheets',
//       outputName: 'local.css'
//     },
//     production: {
//       src: src + '/stylesheets/dist.scss',
//       vendorSrc: vendorStyles,
//       dest: dist,
//       outputName: 'dist.css'
//     }
//   },
//   systemStyles: {
//     static: {
//       src: src + '/stylesheets/system_local.scss',
//       dest: build + '/stylesheets',
//       outputName: 'system.css'
//     },
//     production: {
//       src: src + '/stylesheets/system_dist.scss',
//       dest: dist,
//       outputName: 'system.css'
//     }
//   },
//   fonts: {
//     static: {
//       src: src + '/**/*.{eot,svg,ttf,woff,woff2}',
//       dest: build + '/fonts'
//     }
//   },
//   images: {
//     static: {
//       src: vendorImages,
//       dest: build + '/assets'
//     },
//     production: {
//       src: vendorImages,
//       dest: distAssets
//     }
//   }
// };