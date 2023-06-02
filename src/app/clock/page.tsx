import Clock from '../../components/Clock'
import '../globals.css'

export default function Page() {
  return (
    <main className="flex h-screen p-5 lg:-m-20">
      <div className="flex flex-col lg:flex-row m-auto">
        <Clock timezone='America/New_York'/>
        <Clock timezone="Europe/London" />
        <Clock timezone='Asia/Tokyo'/>
      </div>
    </main>
  )
}
