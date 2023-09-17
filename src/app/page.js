import styles from './page.module.css'
import Productcomponent from './pages/productcomponent'

export default async function Home() {
  const data = await fetchContent()
  return (
    <main className={styles.main}>
      <Productcomponent content={data?.story?.content} />
    </main>
  )
}

async function fetchContent() {
  const res = await fetch("https://api.storyblok.com/v2/cdn/stories/product?version=draft&&token=XNzUC77YIE5QzU9O6CuXpAtt", { next: { revalidate: 60 } })
  const contentData = await res.json()
  return contentData
}
