import Style from '../styles/App.module.css'
import LayoutApp from '../components/app/LayoutApp'
import SearchApp from '../components/app/SearchApp'
import WidgetTrends from '../components/app/WidgetTrends'
import WidgetPrivacy from '../components/app/WidgetPrivacy'

export default function Index() {
  return (
    <LayoutApp
      title="Decentralized Search Assistant"
      description="Findto is an assistant for decentralized web search with diverse sources, AI and privacy.">
      <SearchApp />

      <section className={Style.widgetContainer}>
        <WidgetTrends />
        <WidgetPrivacy />
      </section>
    </LayoutApp>
  )
}
