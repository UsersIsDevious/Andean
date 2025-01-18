import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function POISelector({ selectedPOI, setSelectedPOI, poiOptions }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="poi-select" className="text-gray-300">POI選択</Label>
      <Select value={selectedPOI} onValueChange={setSelectedPOI}>
        <SelectTrigger id="poi-select" className="w-full bg-white/10 border-none text-white">
          <SelectValue placeholder="POIを選択" />
        </SelectTrigger>
        <SelectContent>
          {poiOptions.map((poi) => (
            <SelectItem key={poi} value={poi}>{poi}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

