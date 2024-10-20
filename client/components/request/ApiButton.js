import { useState } from 'react';
import { Button } from '@/components/ui/button'; // shadcnのボタンコンポーネント
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'; // Heroiconsからアイコンをインポート

export default function ApiButton({ apiEndpoint, buttonText, icon: Icon, className, successDuration = 3000 }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: null, // bodyに何も含めない
      });

      if (!response.ok) {
        throw new Error('リクエストが失敗しました');
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false); // 指定時間後に「実行済み」表示をリセット
      }, successDuration);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button 
        onClick={handleClick} 
        disabled={loading} 
        className={className}  // 外部からのクラスを適用
      >
        {!success && Icon && <Icon className="mr-2 h-5 w-5" />} {/* アイコンが指定されている場合のみ表示 */}
        {success && <CheckCircleIcon className="mr-2 h-5 w-5" />} {/* 実行済み時にチェックマークを表示 */}
        {loading ? '送信中...' : success ? '実行済み' : buttonText} {/* 実行済みの表示 */}
      </Button>

      {error && <p style={{ color: 'red' }}>エラー: {error}</p>}
    </div>
  );
}

// 継承された関数として、TogglingApiButtonを定義
export function TogglingApiButton({ apiEndpoint, trueText, falseText, trueIcon: TrueIcon, falseIcon: FalseIcon, initialState, className }) {
  const [state, setState] = useState(initialState);  // 初期状態をプロップスで指定
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state }),  // bodyに現在のstateを含める
      });

      if (!response.ok) {
        throw new Error('リクエストが失敗しました');
      }

      setState(prevState => !prevState);  // ボタンを押したらstateをトグルする
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button 
        onClick={handleClick}
        disabled={loading}
        className={className}  // 外部からのクラスを適用
      >
        {state ? <TrueIcon className="mr-2 h-5 w-5" /> : <FalseIcon className="mr-2 h-5 w-5" />} {/* 状態に応じてアイコンを表示 */}
        {loading ? '送信中...' : state ? trueText : falseText} {/* 状態に応じてテキストを変更 */}
      </Button>

      {error && <p style={{ color: 'red' }}>エラー: {error}</p>}
    </div>
  );
}
