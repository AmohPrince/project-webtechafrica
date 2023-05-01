import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ToolTip = ({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={`absolute -top-2 py-1 px-2 -translate-y-full text-center rounded-sm text-white text-xs bg-bgSignupPage ${
        className ? className : "left-1/2 -translate-x-1/2"
      }`}
      style={style}
    >
      <p>{text}</p>
      <FontAwesomeIcon
        icon={faCaretDown}
        className="absolute -translate-x-1/2"
        style={{
          color: style?.backgroundColor,
        }}
      />
    </div>
  );
};
