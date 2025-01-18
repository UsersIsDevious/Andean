import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function WarningToggle({ enabled, onToggle }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="warnings-mode"
        checked={enabled}
        onCheckedChange={onToggle}
      />
      <Label htmlFor="warnings-mode">警告を有効にする</Label>
    </div>
  )
}

