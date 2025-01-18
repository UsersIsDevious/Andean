import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function SettingTextarea({ id, label, value, onChange, placeholder, rows = 3 }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-gray-300">{label}</Label>
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-white/10 border-none text-white placeholder-gray-400"
      />
    </div>
  )
}

