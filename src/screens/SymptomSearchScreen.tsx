import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { debounce } from 'lodash-es';

//** Components **/
import { SymptomSearchComponent } from '../components/SymptomSearch/SymptomSearchComponent';
import { ISymptom } from '../components/SymptomSearch/SearchResultList';

//** Helpers **/
import { fetchSuggestions } from '../lib/datasource';
import { SEARCH_INPUT_DEBOUNCE_TIME } from '../lib/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routeNames } from '../lib/helpers/navigation';
import { logError } from '../lib/helpers/platform';
import { FoodSuggestionComponent } from '../components/FoodSuggestions/FoodSuggestionComponent';

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
  search: undefined;
  food_suggestions: {
    symptoms: ISymptom[];
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

const SymptomSearchScreen = () => {
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
      if (query?.length > 0) {
        setIsLoading(true);
        fetchSuggestions(query)
          .then((res) => {
            setSuggestions(res);
          })
          .catch((err) => {
            logError(err);
            setSuggestions([]);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setSuggestions([]);
      }
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
      <SearchStack.Navigator initialRouteName={routeNames.search.SEARCH}>
        <SearchStack.Screen
          name={routeNames.search.SEARCH}
          component={SymptomSearchComponent}
        />
        <SearchStack.Screen
          name={routeNames.search.FOOD_SUGGESTIONS}
          component={FoodSuggestionComponent}
        />
      </SearchStack.Navigator>
    </SearchContext.Provider>
  );
};

export default SymptomSearchScreen;
