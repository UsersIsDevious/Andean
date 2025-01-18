import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShieldAlert } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SettingItem({ item }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-lg p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-center">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center space-x-2">
          <Label htmlFor={item.id} className="text-sm font-semibold text-white">{item.label}</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ShieldAlert className="h-4 w-4 text-yellow-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">この設定は管理者のみが変更できます。</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center">
          {item.type === 'switch' ? (
            <Switch
              id={item.id}
              checked={item.state}
              onCheckedChange={(value) => item.setState(value)}
              className="data-[state=checked]:bg-green-500"
            />
          ) : (
            <Select value={item.state} onValueChange={(value) => item.setState(value)}>
              <SelectTrigger id={item.id} className="w-[120px] bg-white/10 border-none text-white text-xs">
                <SelectValue placeholder="選択" />
              </SelectTrigger>
              <SelectContent>
                {item.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
    </div>
  )
}

