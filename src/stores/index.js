import getters from '~stores/getters'
import mutations from '~stores/mutations'
import actions from '~stores/actions'

const DEFAULT_SUB_REDDIT = 'webdev'
const DEFAULT_LAYOUT_PRIMARY_COLOR = 'indigo' // only from vuetify's color

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    defaultLayoutPrimaryColor: DEFAULT_LAYOUT_PRIMARY_COLOR,
    defaultSubReddit: DEFAULT_SUB_REDDIT,

    drawerOpen: false,
    isDoneRender: false,
    toolbarTitle: '',
    isShowLoadMore: false,
    isLoadingMore: false,
    layoutPrimaryColor: DEFAULT_LAYOUT_PRIMARY_COLOR,
    drawerMenus: [
      {
        title: 'WebDev',
        r: 'webdev',
        icon: 'devicon-html5-plain',
        primaryColor: 'deep-orange darken-1'
      },
      {
        title: 'VueJS',
        r: 'vuejs',
        icon: 'devicon-vuejs-plain',
        primaryColor: 'green darken-3'
      },
      {
        title: 'ReactJS',
        r: 'reactjs',
        icon: 'devicon-react-original',
        primaryColor: 'light-blue lighten-1'
      },
      {
        title: 'Angular',
        r: 'Angular2',
        icon: 'devicon-angularjs-plain',
        primaryColor: 'red darken-4'
      },
      {
        title: 'Meteor',
        r: 'Meteor',
        icon: 'devicon-meteor-plain',
        primaryColor: 'red accent-4'
      },
      {
        title: 'Backbone',
        r: 'backbonejs',
        icon: 'devicon-backbonejs-plain',
        primaryColor: 'indigo darken-4'
      },
      {
        title: 'jQuery',
        r: 'jquery',
        icon: 'devicon-jquery-plain',
        primaryColor: 'blue darken-4'
      },
      {
        title: 'NodeJS',
        r: 'node',
        icon: 'devicon-nodejs-plain',
        primaryColor: 'green darken-1'
      },
      {
        title: 'JavaScript',
        r: 'javascript',
        icon: 'devicon-javascript-plain',
        primaryColor: 'orange lighten-1'
      }
    ],
    subReddit: '',
    threads: [],
    threadContent: {},
    comments: [],
    threadAfter: ''
  },
  getters,
  mutations,
  actions
}
