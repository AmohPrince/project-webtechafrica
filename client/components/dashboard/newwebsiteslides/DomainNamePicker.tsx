import { ToolTip } from "@/components/ToolTip";
import { useNewWebsiteSelections } from "@/hooks/useNewWebsiteSelections";
import { checkDomainAvailability } from "@/util/cors";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { getLighterColor } from "../../../util/utilities";
import { SecondaryButton } from "../../buttons/SecondaryButton";
import { FoundDomain } from "./FoundDomain";

const DomainNamePicker = ({
  setActiveStageId,
}: {
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  //contexts
  const { setSelections, selections } = useNewWebsiteSelections();

  //state variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] =
    useState<boolean>(true);
  const [placeHolderStyles, setPlaceHolderStyles] =
    useState<React.CSSProperties | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [showToolTip, setShowToolTip] = useState(false);
  const [failedToFindDomain, setFailedToFindDomain] = useState(false);
  const [availableDomains, setAvailableDomains] = useState<string[]>([]);

  const domainInput = useRef<HTMLInputElement>(null);
  const extensions = [".com", ".org", ".online", ".shop", ".net", ".io"];

  const buttonStyles = {
    backgroundColor: isSearchButtonDisabled
      ? getLighterColor(selections.theme.colors.primary)
      : selections.theme.colors.primary,
    color: selections.theme.colors.text,
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setAvailableDomains([]);
    for (let i = 0; i < extensions.length; i++) {
      const extension = extensions[i];

      const userUrl: string = domainInput.current!.value;
      const noExtensionUrl = userUrl.split(".")[0];
      const withExtensionUrl = noExtensionUrl + extension;
      const isAvailable = await checkDomainAvailability(withExtensionUrl);

      if (isAvailable) {
        setAvailableDomains((prev) => [...prev, withExtensionUrl]);
      }
      if (extensions.indexOf(extension) === extensions.length - 1) {
        setIsLoading(false);
        if (extension.length === 0) {
          setFailedToFindDomain(true);
        }
      }
    }
  };

  const handleDomainInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidDomain = (e: string): boolean => {
      return extensions.some((extension) => e.includes(extension));
    };

    const isValid = isValidDomain(e.target.value);

    setIsSearchButtonDisabled(!isValid);

    if (isValid || e.target.value === "") {
      setShowToolTip(false);
    } else {
      setShowToolTip(true);
    }
  };

  //to prevent users from typing space
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-white p-6">
      {/* only appears on large screens */}
      <div className="items-center justify-center hidden md:flex">
        <div>
          <p className="font-bold text-xl">Find your domain</p>
          <p className="mt-3">
            Search domain name availability using our domain checker tool. Type
            in your desired name and get instant results.
          </p>
        </div>
        <SecondaryButton
          text="Pick plan ✈"
          style={{
            backgroundColor: selections.theme.colors.primary,
            color: selections.theme.colors.text,
          }}
          className="outline-none hover:scale-100 transition-all ml-auto"
          onClick={() => setActiveStageId((prev) => prev + 1)}
          disabled={selections.domainName === null}
        />
      </div>
      {/* only appears on small screens */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Find your domain</p>
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
        <p className="my-5">
          Search domain name availability using our domain checker tool. Type in
          your desired name and get instant results.
        </p>
      </div>
      <div className="flex mt-5">
        <div className="flex-grow mr-5 relative">
          <div className="relative">
            {showToolTip && (
              <ToolTip
                text="A valid domain name includes a valid extension e.g .com"
                className="right-0 w-1/2 md:w-max"
                style={{
                  backgroundColor: selections.theme.colors.primary,
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
              // value={domainNameInputValue}
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
      <div className="flex gap-2 flex-wrap justify-center mt-4">
        <AnimatePresence>
          {failedToFindDomain ? (
            <p>
              Snap! Turns out {domainInput.current?.value} is taken. Lets give
              it another try.
            </p>
          ) : (
            availableDomains.map((domain, i) => (
              <FoundDomain
                domainName={domain}
                selections={selections}
                setIsButtonDisabled={setIsButtonDisabled}
                setSelections={setSelections}
                key={i}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DomainNamePicker;
