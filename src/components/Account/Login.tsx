import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { IconName } from '@fortawesome/fontawesome-svg-core';

/** Components */
import SocialCTA from './SocialCTA';

/** Helpers */
import { assetResolver } from '../../lib/assetResolver';
import { colors, fonts } from '../../lib/styles';

const styles = StyleSheet.create({
  container: {
    flex: .66,
    alignItems: 'center'
  },
  logo: {
    width: '66%',
    resizeMode: 'contain'
  },
  emailAuthContainer: {
    flexDirection: 'row',
    width: '66%',
    marginTop: 32,
    justifyContent: 'space-around'
  },
  authText: {
    color: colors.main.primaryDark,
    fontFamily: fonts.CrimsonProBold,
    fontSize: 18,
    textDecorationLine: 'underline'
  }
});

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={assetResolver.images.logo}
      />
      <SocialCTA brandIconName={'Apple' as IconName}/>
      <SocialCTA brandIconName={'Google' as IconName}/>
      <SocialCTA brandIconName={'Facebook' as IconName}/>
      <View style={styles.emailAuthContainer}>
        <TouchableOpacity>
          <Text style={styles.authText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.authText}>Sign Up With Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};