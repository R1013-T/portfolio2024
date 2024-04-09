import type { IconType } from '@icons-pack/react-simple-icons'

export default function ContactIcon({ Icon }: { Icon: IconType }) {
  return (
    <div className="w-full h-full flex justify-center items-center cursor-pointer group">
      <Icon
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        className="w-1/3 h-1/3 text-primary/70
        group-hover:text-purple-300 transition-colors duration-300 ease-in-out"
      />
    </div>
  )
}
