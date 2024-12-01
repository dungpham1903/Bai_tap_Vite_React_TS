import { createContext, ReactNode, useContext, useState } from "react"

type SearchContextType = {
    searchKeyword: string;
    setSearchKeyword: (keyword: string) => void;
}
const SearchContext = createContext<SearchContextType | undefined>(undefined);
function SearchProvider({ children }: { children: ReactNode }) {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    return (
        <SearchContext.Provider value={{ searchKeyword, setSearchKeyword }}>
            {children}
        </SearchContext.Provider>
    )
}
function useSearch() {
    const context = useContext(SearchContext);
    if (typeof context === "undefined")
        throw new Error("useSearch must be used within a SearchProvider")
    return context;
}
export { useSearch, SearchProvider }
