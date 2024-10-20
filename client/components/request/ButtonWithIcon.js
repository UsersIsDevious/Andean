import { CheckIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';

const ButtonWithIcon = ({ onClick, executed, icon: Icon, text }) => (
  <Button
    onClick={onClick}
    className="h-full flex-1 bg-white text-black border border-black hover:bg-gray-200"
    style={{ borderWidth: "1px" }}
  >
    {executed ? (
      <>実行済み <CheckIcon className="ml-2 h-5 w-5" /></>
    ) : (
      <>
        <Icon className="mr-2 h-5 w-5" /> {text}
      </>
    )}
  </Button>
);
export default ButtonWithIcon;
