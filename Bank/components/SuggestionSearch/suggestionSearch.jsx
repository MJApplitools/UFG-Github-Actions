import {
    suggestionSearchContainer,
    searchBar,
    closeSuggestions,
    closeSuggestionIcon,
    searchSuggestionsGroup,
    searchSuggestionsHeader,
    searchSuggestionsIcon,
    cubeIcon,
    searchSuggestionsName,
    searchSuggestionsInfo,
    searchSuggestionsContent,
    searchSuggestionsItems,
    searchSuggestionsItem,
    itemMedia,
    itemName,
    userIcon,
    searchSuggestionsItemlist,
    searchSuggestionsListItem,
    fileIcon,
    searchSuggestionsBlockItems,
    searchSuggestionsBlockItem,
    blockItemIcon,
    textIcon,
    filmIcon,
    dbIcon,
    photoIcon,
    nothingFound
} from './suggestionSearch.module.css';

import diamond from "../../../img/company6.png";
import product from "../../../img/company7.png";
import avatar1 from "../../../img/avatar1.jpg";
import avatar2 from "../../../img/avatar2.jpg";
import avatar3 from "../../../img/avatar3.jpg";

export default function SuggestionSearch({shouldShow = true}) {
    return (
        <div /*style={{display: 'none'}} */ style={shouldShow ? {} : {display: "none"}}>
            <div className={suggestionSearchContainer}>
                <div className={searchBar}>
                    <input placeholder="Start typing to search..." type="text" />
                    <div className={closeSuggestions}>
                        <i className={closeSuggestionIcon}></i>
                    </div>
                </div>
                <div className={searchSuggestionsGroup}>
                    <div className={searchSuggestionsHeader}>
                        <div className={searchSuggestionsIcon}>
                            <div className={["osIcon", cubeIcon].join(' ')}></div>
                        </div>
                        <div className={searchSuggestionsName}>
                            Projects
                        </div>
                        <div className={searchSuggestionsInfo}>
                            24 Total
                        </div>
                    </div>
                    <div className={searchSuggestionsContent}>
                        <div className={searchSuggestionsItems}>
                            <a className={searchSuggestionsItem} href="#">
                                <img className={itemMedia} src={diamond.src}></img>
                                <div className={itemName}>
                                    Integ<span>ration</span> with API
                                </div>
                            </a>
                            <a className={searchSuggestionsItem} href="#" style={{marginTop: "8px"}}>
                                <img className={itemMedia} src={product.src}></img>
                                <div className={itemName}>
                                    Deve<span>lopm</span>ent Project
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={searchSuggestionsGroup}>
                    <div className={searchSuggestionsHeader}>
                        <div className={searchSuggestionsIcon}>
                            <div className={["osIcon", userIcon].join(' ')}></div>
                        </div>
                        <div className={searchSuggestionsName}>
                            Customers
                        </div>
                        <div className={searchSuggestionsInfo}>
                            7 Total
                        </div>
                    </div>
                    <div className={searchSuggestionsContent}>
                        <div className={[searchSuggestionsItemlist].join(' ')}>
                            <a className={searchSuggestionsListItem} href="#">
                                <img className={itemMedia} src={avatar1.src}></img>
                                <div className={itemName}>
                                    John Ma<span>yer</span>s
                                </div>
                            </a>
                            <a className={searchSuggestionsListItem} href="#">
                                <img className={itemMedia}  src={avatar2.src}></img>
                                <div className={itemName}>
                                    Th<span>omas</span> Mullier
                                </div>
                            </a>
                            <a className={searchSuggestionsListItem} href="#">
                                <img className={itemMedia}  src={avatar3.src}></img>
                                <div className={itemName}>
                                    Kim C<span>olli</span>ns
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={searchSuggestionsGroup}>
                    <div className={searchSuggestionsHeader}>
                        <div className={searchSuggestionsIcon}>
                            <div className={["osIcon", fileIcon].join(' ')}></div>
                        </div>
                        <div className={searchSuggestionsName}>
                            Files
                        </div>
                        <div className={searchSuggestionsInfo}>
                            17 Total
                        </div>
                    </div>
                    <div className={searchSuggestionsContent}>
                        <div className={searchSuggestionsBlockItems}>
                            <a className={searchSuggestionsBlockItem} href="#">
                                <div className={blockItemIcon}>
                                    <i className={["osIcon", textIcon].join(' ')}></i>
                                </div>
                                <div className={itemName}>
                                    Work<span>Not</span>e.txt
                                </div>
                            </a>
                            <a className={searchSuggestionsBlockItem} href="#">
                                <div className={blockItemIcon}>
                                    <i className={["osIcon", filmIcon].join(' ')}></i>
                                </div>
                                <div className={itemName}>
                                    V<span>ideo</span>.avi
                                </div>
                            </a>
                            <a className={searchSuggestionsBlockItem} href="#">
                                <div className={blockItemIcon}>
                                    <i className={["osIcon", dbIcon].join(' ')}></i>
                                </div>
                                <div className={itemName}>
                                    User<span>Tabl</span>e.sql
                                </div>
                            </a>
                            <a className={searchSuggestionsBlockItem} href="#">
                                <div className={blockItemIcon}>
                                    <i className={["osIcon", photoIcon].join(' ')}></i>
                                </div>
                                <div className={itemName}>
                                    wed<span>din</span>g.jpg
                                </div>
                            </a>
                        </div>
                        <div className={nothingFound}>
                            <span>No files were found. Try changing your query...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}