import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SettingInput({ id, label, value, onChange, type = "text", placeholder }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-gray-300">{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/10 border-none text-white placeholder-gray-400"
      />
    </div>
  )
}

