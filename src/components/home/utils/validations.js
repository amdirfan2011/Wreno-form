import { TAB_COUNT } from "../Home"
import { isPersonalInformationValid } from "../tabs/PersonalInformation/validation"

const TAB_MAP = 
{
    0: {name: "Introduction", isValid: () => true},
    1: {name: "PersonalInformation", isValid: isPersonalInformationValid}}

const isTabValid = (selectedTab, formData) => {
    return TAB_MAP[selectedTab].isValid(formData)
}

export const handleNextClick = (selectedTab, setSelectedTab, formData) => {
    if (isTabValid(selectedTab, formData)) {
        setSelectedTab((selectedTab + 1) % TAB_COUNT )
    }
}