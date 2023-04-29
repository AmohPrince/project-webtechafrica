import {
  faCircleCheck,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { NewWebsiteSelections } from "../../Types/Global";
import { getLighterColor } from "../../Util/Utilities";
import PrimaryButton from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { ToolTip } from "../SignInOrSignUp/ToolTip";

const DomainNamePicker = ({
  selections,
  setSelections,
  setActiveStageId,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] =
    useState<boolean>(true);
  const [placeHolderStyles, setPlaceHolderStyles] =
    useState<React.CSSProperties | null>(null);
  const [domainNameInputValue, setDomainNameInputValue] = useState<string>("");
  const [showDomainSearchResults, setShowDomainSearchResults] =
    useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const domainInput = useRef<HTMLInputElement>(null);

  const buttonStyles = {
    backgroundColor: isSearchButtonDisabled
      ? getLighterColor(selections.theme.colors.primary)
      : selections.theme.colors.primary,
    color: selections.theme.colors.text,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleSearch = () => {
    setIsLoading(true);
    //TODO here is where i should validate the domain somehow
    setTimeout(() => {
      setIsLoading(false);
      setShowDomainSearchResults(true);
    }, 2000);
  };

  const handleDomainInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowDomainSearchResults(false);
    const isValidDomain = (e: string): boolean => {
      const extensions = [".com", ".org", ".online", ".shop", ".net", ".io"];
      return extensions.some((extension) => e.includes(extension));
    };
    setDomainNameInputValue(e.target.value.toLowerCase());
    setIsSearchButtonDisabled(!isValidDomain(e.target.value));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-white p-6">
      <div className="sm:flex items-center justify-center">
        <div className="flex justify-between items-center sm:block">
          <p className="font-bold text-xl">Find your domain</p>
          <p className="mt-3 hidden sm:block">
            Search domain name availability using our domain checker tool. Type
            in your desired name and get instant results.
          </p>
          <SecondaryButton
            text="Pick plan"
            style={{
              backgroundColor: selections.theme.colors.primary,
              color: selections.theme.colors.text,
            }}
            className="outline-none hover:scale-100 transition-all ml-auto"
            onClick={() => setActiveStageId((prev) => prev + 1)}
            disabled={isButtonDisabled}
          />
        </div>
        <div>
          <p className="my-7 sm:hidden">
            Search domain name availability using our domain checker tool. Type
            in your desired name and get instant results.
          </p>
          <SecondaryButton
            text="Pick plan"
            style={{
              backgroundColor: selections.theme.colors.primary,
              color: selections.theme.colors.text,
            }}
            className="outline-none hover:scale-100 transition-all ml-auto hidden sm:block"
            onClick={() => setActiveStageId((prev) => prev + 1)}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
      <div className="flex mt-5">
        <div className="flex-grow mr-5 relative">
          <div className="relative">
            {isSearchButtonDisabled && (
              <ToolTip
                text="A valid domain name includes a valid extension e.g .com"
                className="right-0 w-1/2"
                style={{
                  backgroundColor: selections.theme.colors.primary,
                  // color: selections.theme.colors.text,
                }}
              />
            )}
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
              value={domainNameInputValue}
            />
            <p
              className="text-gray-500 text-sm absolute left-4 top-1/2 -translate-y-1/2 z-0 enter-your-design-name transition-all bg-white"
              style={placeHolderStyles!}
            >
              Enter your desired domain name
            </p>
          </div>
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
      <div
        className="flex justify-between w-3/4 mx-auto font-semibold"
        style={{
          color: selections.theme.colors.primary,
        }}
      >
        <p>.com</p>
        <p>.org</p>
        <p>.online</p>
        <p>.shop</p>
        <p>.net</p>
        <p>.io</p>
      </div>
      {showDomainSearchResults && (
        <div className="border rounded-md p-4 w-1/2 sm:w-1/4 mt-9">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="mr-3 text-green-600"
            />
            <p className="font-bold text-sm">{domainInput.current?.value}</p>
          </div>
          <PrimaryButton
            text={selections.domainName === null ? "Select domain" : "Selected"}
            className="w-full rounded-md mt-5 hover:scale-100 disabled:bg-gray-400 disabled:hover:bg-gray-400"
            onClick={() => {
              setSelections((prev) => {
                return {
                  ...prev,
                  domainName: domainInput.current!.value,
                };
              });
              setIsButtonDisabled(false);
            }}
            disabled={selections.domainName !== null}
          />
        </div>
      )}
    </div>
  );
};

export default DomainNamePicker;
