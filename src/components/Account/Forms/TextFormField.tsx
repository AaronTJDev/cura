import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { FieldInputProps, FormikErrors } from 'formik';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';

import { colors, fonts } from '../../../lib/styles';
import { upperFirst } from 'lodash-es';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { signupFormFieldKeys } from './SignupForm';

interface FormFieldProps {
  handleChange: FieldInputProps<any>['onChange'];
  handleBlur: FieldInputProps<any>['onBlur'];
  value: string;
  error:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  fieldName: string;
  placeholder: string;
  icon: IconProp;
  secure?: boolean;
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    borderRadius: 14,
    borderColor: colors.main.gray25,
    borderWidth: 1,
    padding: 12,
    marginBottom: 16
  },
  labelGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  label: {
    flex: 5,
    marginLeft: 8,
    fontFamily: fonts.ComfortaaBold,
    fontSize: 12,
    lineHeight: 18,
    color: colors.main.black
  },
  labelIcon: {
    flex: 1
  },
  labelError: {
    color: colors.indicators.error,
    fontSize: 10
  },
  placeholder: {},
  visible: {
    position: 'absolute',
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 12,
    right: 0
  }
});

export const TextFormField: React.FC<FormFieldProps> = ({
  handleBlur,
  handleChange,
  fieldName,
  placeholder,
  icon,
  secure,
  error
}) => {
  const [shouldShowSecureEntry, setShouldShowSecureEntry] =
    useState<boolean>(true);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 75,
        useNativeDriver: true
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 75,
        useNativeDriver: true
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 75,
        useNativeDriver: true
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 75,
        useNativeDriver: true
      })
    ]).start();
  };

  const toggleSecureVisibility = () => {
    setShouldShowSecureEntry(!shouldShowSecureEntry);
  };

  useEffect(() => {
    if (error) {
      shake();
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.labelGroup,
          { transform: [{ translateX: shakeAnimation }] }
        ]}
      >
        <Icon
          style={styles.labelIcon}
          icon={icon}
          color={!error ? colors.main.secondary : colors.indicators.error}
          size={14}
          secondaryColor={colors.main.black}
          secondaryOpacity={1}
        />
        <Text
          style={[
            styles.label,
            error ? { color: colors.indicators.error } : {}
          ]}
        >
          {upperFirst(fieldName)}
        </Text>
        {!!error && <Text style={styles.labelError}>{error}</Text>}
      </Animated.View>
      <TextInput
        onChangeText={handleChange(fieldName)}
        onBlur={handleBlur(fieldName)}
        placeholder={placeholder}
        secureTextEntry={secure && shouldShowSecureEntry}
      />
      {fieldName === signupFormFieldKeys.password && (
        <TouchableOpacity
          style={styles.visible}
          onPress={toggleSecureVisibility}
        >
          <Icon
            icon={shouldShowSecureEntry ? 'eye' : 'eye-slash'}
            color={colors.main.secondary}
            size={18}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
