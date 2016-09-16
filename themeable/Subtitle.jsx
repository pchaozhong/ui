import Subtitle from '../Subtitle'
import themeable from '../lib/decorators/themeable'

const Component = themeable(Subtitle, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_header
  }
}))

Component.displayName = 'ThemeableSubtitle'

export default Component
