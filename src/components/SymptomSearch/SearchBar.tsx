import React, { useContext } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, fonts } from '../../lib/styles';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';
import { Formik } from 'formik';
import { SearchSchema } from '../../lib/validationSchemas';
import { SearchContext } from '../../screens/SymptomSearchScreen';
import { isIos } from '../../lib/helpers/platform';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    width: '92%',
    height: 60,
    borderBottomWidth: 0.25,
    borderBottomColor: colors.main.black,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  textInput: {
    flex: 7,
    fontSize: 16,
    fontFamily: fonts.ComfortaaMedium
  },
  searchIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIcon: {}
});

const initialValues = {
  query: ''
};

export const SearchBar = () => {
  const {
    setQuery,
    setTextInputTouched,
    setTextInputBlurred
    // isTouched,
    // isBlurred,
    // suggestions,
    // query
  } = useContext(SearchContext);

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SearchSchema}
      validateOnBlur
      validateOnChange
      onSubmit={handleSubmit}
    >
      {({ handleBlur, setFieldValue, values }) => {
        const handleAnimationOnFocus = () => {
          setTextInputTouched(true);
          setTextInputBlurred(false);
        };

        const handleAnimationOnBlur = () => {
          if (!(values['query'].length > 0)) {
            setTextInputTouched(false);
            setTextInputBlurred(true);
            handleBlur('query');
          }
        };

        const onChange = (text: string) => {
          setTextInputTouched(true);
          setFieldValue('query', text);
          setQuery(text);
        };

        return (
          <View style={styles.container}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.textInput}
                value={values['query']}
                onBlur={handleAnimationOnBlur}
                onFocus={handleAnimationOnFocus}
                onChangeText={onChange}
                underlineColorAndroid="transparent"
                keyboardType={isIos ? 'default' : 'visible-password'}
                placeholder="Search for a symptom"
                placeholderTextColor={colors.main.gray20}
                autoCapitalize="none"
              />
              <View style={styles.searchIconContainer}>
                <Icon
                  style={styles.searchIcon}
                  icon={'magnifying-glass'}
                  color={colors.main.black}
                  size={18}
                />
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};
