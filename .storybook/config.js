import { configure } from '@kadira/storybook';
import '../styles/ColorPicker.scss';
import '../styles/Switch.scss';
import '../styles/LoadingSpinner.scss';
import '../styles/Button.scss';
import '../styles/Pagination.scss';

function loadStories() {
  require('../src/stories/Switch');
  require('../src/stories/YoutubeVideo');
  require('../src/stories/VimeoVideo');
  require('../src/stories/ColorPicker');
  require('../src/stories/LoadingSpinner');
  require('../src/stories/Button');
  require('../src/stories/Pagination');
}

configure(loadStories, module);