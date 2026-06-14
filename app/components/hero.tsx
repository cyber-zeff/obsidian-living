import Image from "next/image";

export default function Hero() {
  return (
    <>
        <div className="priColor">
        </div>
        <div>
            <Image width={600} height={600} src="/obsidian.png" alt="Obsidian Image" />
        </div>
    </>
  )
}
