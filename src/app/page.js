import styles from './page.module.css'

export default async function Home() {
  const data = await fetchContent()
  return (
    <main className={styles.main}>
      <h1>Hello this is Next JS </h1>
      {/* <h1>{data?.story?.content?.title}</h1>
      <div style={{ display: 'flex' }}>
        <div><img src={data?.story?.content?.product_first?.filename} alt='product_first' /></div>
        <div><img src={data?.story?.content?.product_second?.filename} alt='product_second' /></div>
        <div><img src={data?.story?.content?.product_third?.filename} alt='product_third' /></div>
      </div> */}
    </main>
  )
}

async function fetchContent() {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVICE)
  const contentData = await res.json()
  return contentData
}