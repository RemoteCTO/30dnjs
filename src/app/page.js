import Image from 'next/image'
import VerticalNav from '../components/VerticalNav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VerticalNav />
    </main>
  )
}
