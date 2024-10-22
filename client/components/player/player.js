import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const PlayerInfo = ({ player }) => {
  return (
    <Card className="w-full max-w-sm mx-auto my-4">
    <CardHeader>
      <CardTitle className="flex items-center space-x-4">
        <img src={player.characterImage} alt={player.characterName} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-lg font-semibold">{player.name}</h2>
          <p className="text-sm text-gray-500">{player.characterName}</p>
        </div>
      </CardTitle>
      <CardDescription className="text-green-500">オンライン</CardDescription>
    </CardHeader>
    
    <CardContent className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm font-semibold">キル数</p>
        <p className="text-lg">{player.kills}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">キルアシスト</p>
        <p className="text-lg">{player.assists}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">ノックダウン数</p>
        <p className="text-lg">{player.knockdowns}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">蘇生数</p>
        <p className="text-lg">{player.revives}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">与ダメージ</p>
        <p className="text-lg">{player.damageDealt}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">ヒットダメージ</p>
        <p className="text-lg">{player.damageReceived}</p>
      </div>
    </CardContent>
    
    <CardFooter>
      <p className="text-gray-500 text-sm">Last Updated: {player.lastUpdated}</p>
    </CardFooter>
  </Card>
  );
};

export default PlayerInfo;
