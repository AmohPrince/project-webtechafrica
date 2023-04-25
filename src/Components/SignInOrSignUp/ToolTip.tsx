import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ToolTip = ({ text }: { text: string }) => {
  return (
    <div className="absolute -top-2 p-1 left-1/2 -translate-x-1/2 -translate-y-full text-center rounded-sm text-white text-xs bg-bgSignupPage">
      <p>{text}</p>
      <FontAwesomeIcon
        icon={faCaretDown}
        className="absolute left-1/2 -translate-x-1/2 text-bgSignupPage"
      />
    </div>
  );
};
