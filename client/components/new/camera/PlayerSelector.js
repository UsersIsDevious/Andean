import { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Users } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"

export function PlayerSelector({ selectedPlayer, setSelectedPlayer, playerNames = [] }) {
  const [openPlayerSelect, setOpenPlayerSelect] = useState(false)

  return (
    <div className="space-y-2">
      <Label htmlFor="player-select" className="text-gray-300">プレイヤー選択</Label>
      <Popover open={openPlayerSelect} onOpenChange={setOpenPlayerSelect}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openPlayerSelect}
            className="w-full justify-between bg-white/10 border-none text-white"
          >
            {selectedPlayer || "プレイヤーを選択..."}
            <Users className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="プレイヤーを検索..." className="h-9" />
            <CommandEmpty>プレイヤーが見つかりません。</CommandEmpty>
            <CommandGroup>
              {playerNames.length > 0 ? (
                playerNames.map((player) => (
                  <CommandItem
                    key={player}
                    onSelect={() => {
                      setSelectedPlayer(player)
                      setOpenPlayerSelect(false)
                    }}
                  >
                    {player}
                  </CommandItem>
                ))
              ) : (
                <CommandItem>プレイヤーがいません</CommandItem>
              )}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

