import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingSelect({ id, label, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-gray-300">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className="w-full bg-white/10 border-none text-white">
          <SelectValue placeholder="選択してください" />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

