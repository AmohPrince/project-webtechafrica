import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { NewWebsiteSelections } from "../../Types/Global";
import { getLighterColor } from "../../Util/Utilities";

const DomainNamePicker = ({
  selections,
  setSelections,
  setIsProgressButtonDisabled,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setIsProgressButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] =
    useState<boolean>(true);
  const [placeHolderStyles, setPlaceHolderStyles] =
    useState<React.CSSProperties | null>(null);

  const domainInput = useRef<HTMLInputElement>(null);

  const buttonStyles = {
    backgroundColor: isSearchButtonDisabled
      ? getLighterColor(selections.theme.colors.primary)
      : selections.theme.colors.primary,
    color: selections.theme.colors.text,
  };

  const handleSearch = () => {
    setIsLoading(true);
    //TODO here is where i should validate the domain somehow
    setTimeout(() => {
      setIsLoading(false);
      console.log(domainInput.current?.value);
    }, 2000);
  };

  const handleDomainInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidDomain = (e: string): boolean => {
      const extensions = [".com", ".org", ".online", ".shop", ".net", ".io"];
      return extensions.some((extension) => e.includes(extension));
    };

    setIsSearchButtonDisabled(!isValidDomain(e.target.value));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  return (
    <div className="mt-5">
      <p className="font-bold text-xl">Find your domain</p>
      <p className="mt-3">
        Search domain name availability using our domain checker tool. Type in
        your desired name and get instant results.
      </p>
      <div className="flex mt-5">
        <div className="flex-grow mr-5 relative">
          <input
            type="text"
            className="w-full text-sm border rounded-md px-4 py-3 z-10 relative bg-transparent domain-name-input"
            style={{
              outlineColor: selections.theme.colors.primary,
            }}
            onChange={(e) => handleDomainInput(e)}
            ref={domainInput}
            onKeyDown={handleKeyDown}
            onFocus={() =>
              setPlaceHolderStyles({
                top: 0,
                zIndex: 20,
                color: selections.theme.colors.primary,
                fontWeight: 600,
                paddingLeft: 6,
                paddingRight: 6,
              })
            }
            onBlur={(e) => {
              if (e.target.value.length === 0) {
                setPlaceHolderStyles(null);
              } else {
                setPlaceHolderStyles({
                  display: "none",
                });
              }
            }}
          />
          <p
            className="text-gray-500 text-sm absolute left-4 top-1/2 -translate-y-1/2 z-0 enter-your-design-name transition-all bg-white"
            style={placeHolderStyles!}
          >
            Enter your desired domain name
          </p>
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
        <button
          className="rounded-md hover:scale-100 px-6 text-sm disabled:cursor-not-allowed"
          style={buttonStyles}
          onClick={handleSearch}
          disabled={isSearchButtonDisabled}
        >
          {isLoading ? (
            <FontAwesomeIcon icon={faSpinner} className="spin" />
          ) : (
            "Search"
          )}
        </button>
      </div>
      <p className="my-5">Supported domains</p>
      <div className="flex justify-between w-3/4 mx-auto">
        <p>.com</p>
        <p>.org</p>
        <p>.online</p>
        <p>.shop</p>
        <p>.net</p>
        <p>.io</p>
      </div>
    </div>
  );
};

export default DomainNamePicker;
