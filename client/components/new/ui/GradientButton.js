import { Button } from "@/components/ui/button"

export function GradientButton({ onClick, fromColor, toColor, hoverFromColor, hoverToColor, icon: Icon, children }) {
  return (
    <Button
      onClick={onClick}
      className={`w-full bg-gradient-to-r from-${fromColor} to-${toColor} hover:from-${hoverFromColor} hover:to-${hoverToColor} text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center overflow-hidden`}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </Button>
  )
}

