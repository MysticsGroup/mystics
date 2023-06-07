import { CustomProductHome, AtlassianNavigation, PrimaryButton, Search} from "@atlaskit/atlassian-navigation";
import MysticsIcon from '../img/MysticsIconFixed.png'
import MysticsLogo from '../img/MysticsLogoFixed.png'
import { useState } from "react";
const CProductHome = () => {
    return (
    <CustomProductHome
        href="/"
        iconUrl={MysticsIcon}
        logoUrl={MysticsLogo}  
    />
)}

const CSearch = () => {
    const [SearchField, SetSearchField] = useState('')
    const SearchChange = (e) => {
        SetSearchField(e.target.value)
    }

    return(
        <Search onClick={SearchChange} placeholder="Search.." tooltip="Search" label="Search" value={SearchField}/>
    )
}

const TopNavBar = () =>{
    return(
        <AtlassianNavigation
        label="site"
        renderProductHome={CProductHome}
        primaryItems={[
        <PrimaryButton href="/">Home</PrimaryButton>
        ]}
        renderSearch={CSearch}
        />
    )
}

export default TopNavBar