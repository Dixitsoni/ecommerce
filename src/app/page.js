import styles from './page.module.css'
import Product from './pages/productcomponent'

export default async function Home() {
  const data = await fetchContent()
  return (
    <main className={styles.main}>
      <Product content={data?.story?.content} />
    </main>
  )
}

async function fetchContent() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_ID, { next: { revalidate: 60 } })
  const contentData = await res.json()
  return contentData
}
