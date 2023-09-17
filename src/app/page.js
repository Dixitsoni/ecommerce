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
  const res = await fetch(process.env.NEXT_PUBLIC_SERVICE)
  const contentData = await res.json()
  return contentData
}