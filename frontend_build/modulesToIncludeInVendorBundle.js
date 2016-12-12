module.exports = [
  'setWebpackCdnHost',
  'Backbone',
  'compiled/tinymce',
  'classnames',
  'handlebars',
  'jquery',
  'jquery.ajaxJSON',
  'jquery.google-analytics',
  'spin.js/jquery.spin',
  'jqueryui/effects/drop',
  'jqueryui/progressbar',
  'jqueryui/tabs',
  'jqueryui/dialog',
  'moment',
  'react',
  'react-modal',
  'underscore',
  'vendor/date',
  'vendor/i18n',
  'vendor/i18n_js_extension',
  'vendor/jquery-1.7.2',
  'vendor/jquery.ba-hashchange',
  'vendor/jquery.ba-tinypubsub',
  'vendor/jquery.cookie',
  'vendor/jquery.pageless',
  'vendor/jquery.scrollTo',
  'vendor/jqueryui/dialog',
  'vendor/mediaelement-and-player',

  // without putting these here, they get included in each bundle
  // seperately. since they are not actual vendor libs, we should get
  // them out of here eventually
  'compiled/views/PaginatedCollectionView',
  'compiled/util/brandableCss',
  'i18nObj',
  'jquery.disableWhileLoading',
  'compiled/jquery/fixDialogButtons',
  'jquery.instructure_misc_plugins',
  'jquery.instructure_misc_helpers',
  'jquery.loadingImg',
  'compiled/str/i18nLolcalize',
  'instructure',

   // 'instructure-ui/Spinner',
   // 'jsx/shared/rce/RichContentEditor'
]
