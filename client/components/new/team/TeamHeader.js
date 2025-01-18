import { CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function TeamHeader({ name, image }) {
  return (
    <CardHeader className="p-2 bg-black bg-opacity-30 flex flex-row items-center space-x-2">
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarImage src={image || `/placeholder.svg?height=32&width=32`} alt={name} className="translate-y-[-2px]" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <CardTitle className="text-sm text-white flex-grow truncate">{name}</CardTitle>
    </CardHeader>
  )
}

