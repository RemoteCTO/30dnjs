import DrumKey from '../../components/DrumKey'
import '../globals.css'
import './page.css'

export default function Page() {
  return (
    <main className="bg-drumkit-background min-h-screen bg-cover">
      <div className="flex flex-1 min-h-screen content-center">
        <DrumKey keyName="A" keyTrigger="A" soundName="clap" keyCode={65} />
        <DrumKey keyName="S" keyTrigger="S" soundName="hihat" keyCode={83} />
        <DrumKey keyName="D" keyTrigger="D" soundName="kick" keyCode={68} />
        <DrumKey keyName="F" keyTrigger="F" soundName="openhat" keyCode={70} />
        <DrumKey keyName="G" keyTrigger="G" soundName="boom" keyCode={71} />
        <DrumKey keyName="H" keyTrigger="H" soundName="ride" keyCode={72} />
        <DrumKey keyName="J" keyTrigger="J" soundName="snare" keyCode={74} />
        <DrumKey keyName="K" keyTrigger="K" soundName="tom" keyCode={75} />
        <DrumKey keyName="L" keyTrigger="L" soundName="tink" keyCode={76} />
      </div>
    </main>
  )
}
