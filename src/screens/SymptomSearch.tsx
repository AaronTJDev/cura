import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { debounce } from 'lodash-es';

//** Components **/
import SymptomSearchComponent from '../components/SymptomSearchComponent';
import { ISymptom } from '../components/SymptomSearchComponent/SearchResultList';

//** Helpers **/
import { fetchSuggestions } from '../lib/datasource';
import { SEARCH_INPUT_DEBOUNCE_TIME } from '../lib/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SymptomInfo from './SymptomInfo';
import CustomHeader from '../components/utility/CustomHeader';
import { transparentHeaderOptions } from '../lib/helpers/navigation';

interface ISearchContext {
  query: string;
  suggestions: ISymptom[];
  isLoading: boolean;
  setQuery: Dispatch<SetStateAction<string>> | (() => {});
  setSuggestions: Dispatch<SetStateAction<ISymptom[]>> | (() => {});
  setTextInputTouched:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => {});
  setTextInputBlurred:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => {});
  isBlurred: boolean;
  isTouched: boolean;
  selectedSymptoms?: Set<string>;
  setSelectedSymptoms?: Dispatch<SetStateAction<Set<string>>> | (() => {});
}

export type SearchStackParamList = {
  Search: undefined;
  Disease: undefined;
  SymptomInfo: {
    symptom: ISymptom;
  };
};

export const SearchContext = React.createContext<ISearchContext>({
  query: '',
  suggestions: [],
  isLoading: false,
  setQuery: () => {},
  setSuggestions: () => {},
  setTextInputTouched: () => {},
  setTextInputBlurred: () => {},
  isBlurred: false,
  isTouched: false,
  selectedSymptoms: new Set(),
  setSelectedSymptoms: () => {}
});

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

const SymptomSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ISymptom[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textInputTouched, setTextInputTouched] = useState<boolean>(false);
  const [textInputBlurred, setTextInputBlurred] = useState<boolean>(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<Set<string>>(
    new Set()
  );

  const getSuggestions = debounce(
    useCallback(async () => {
      setIsLoading(true);
      fetchSuggestions(query)
        .then((res) => {
          setSuggestions(res);
        })
        .catch((err) => {
          console.log(err);
          setSuggestions([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [query]),
    SEARCH_INPUT_DEBOUNCE_TIME
  );

  useEffect(() => {
    getSuggestions();
  }, [query]);

  return (
    <SearchContext.Provider
      value={{
        query,
        suggestions,
        selectedSymptoms,
        setQuery,
        setSuggestions,
        setTextInputBlurred,
        setTextInputTouched,
        setSelectedSymptoms,
        isLoading,
        isBlurred: textInputBlurred,
        isTouched: textInputTouched
      }}
    >
      <SearchStack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerShown: false
        }}
      >
        <SearchStack.Screen name="Search" component={SymptomSearchComponent} />
        <SearchStack.Screen
          name="SymptomInfo"
          component={SymptomInfo}
          options={({ navigation, route }) => ({
            ...transparentHeaderOptions,
            headerLeft: () => (
              <CustomHeader navigation={navigation} route={route} />
            )
          })}
        />
      </SearchStack.Navigator>
    </SearchContext.Provider>
  );
};

export default SymptomSearch;
