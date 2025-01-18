import { Shield } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function AdminOnlySection({ children }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="border-2 border-yellow-500 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between mb-2 cursor-help">
              <h3 className="text-xl font-semibold text-yellow-500">管理者専用機能</h3>
              <Shield className="w-6 h-6 text-yellow-500" />
            </div>
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>これらの機能は管理者のみが使用できます。</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

