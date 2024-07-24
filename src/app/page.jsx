import Image from 'next/image'
import Nav from '@/component/navigation/nav'
import BlogCard from '@/component/home/components/news/newsCard/newsCard'
export default function Home() {
  return (
    <main>
      <Nav />
      <h1>TOPページ</h1>
      <div>
        <BlogCard />
      </div>
      <p>hello world</p>
    </main>
  )
}
